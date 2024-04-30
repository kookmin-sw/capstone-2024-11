#%%
import pandas as pd
import numpy as np
import sys
import os
import joblib

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from image_processing.gamma_correction import gamma_correction
from Skin_detect.skin_detect_v2 import *
from Color_extract.color import extract_high_rank, save_data_csv


from sklearn.model_selection import train_test_split
from PC_model.utils import get_evaluation, feature_plot, heatmap_plot
from sklearn.preprocessing import MinMaxScaler, StandardScaler

from xgboost import XGBClassifier, plot_importance
from sklearn.multiclass import OneVsRestClassifier, OneVsOneClassifier
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import VotingClassifier, RandomForestClassifier


class PersonalColorModel:
    def __init__(self) -> None:
        self.xgb = XGBClassifier(objective="multi:softmax")
        self.ovr = OneVsRestClassifier(LinearRegression())
        self.ovo = OneVsOneClassifier(SVC())
        self.knn = KNeighborsClassifier(n_neighbors=5, n_jobs=-1,)
        self.lr = LogisticRegression()
        self.voting = VotingClassifier(estimators=[("xgb", self.xgb), ("knn", self.knn),
                                                   ("lr", self.lr)], voting='soft')
        self.rfc = RandomForestClassifier()


    def train(self, train_x, train_y):
        self.xgb.fit(train_x, train_y)
        self.ovr.fit(train_x, train_y)
        self.ovo.fit(train_x, train_y)
        self.knn.fit(train_x, train_y)
        self.lr.fit(train_x, train_y)
        self.voting.fit(train_x, train_y)
        self.rfc.fit(train_x, train_y)
    
    def predict_probability(self, test_x):
        # self.ovr.predict_proba(test_x), self.ovo.predict_proba(test_x), 
        return self.xgb.predict_proba(test_x),\
            self.knn.predict_proba(test_x),\
                  self.lr.predict_proba(test_x),\
                      self.voting.predict_proba(test_x),\
                          self.rfc.predict_proba(test_x)

    def test(self, test_x):
        return self.xgb.predict(test_x),\
              self.ovr.predict(test_x),\
                  self.ovo.predict(test_x),\
                      self.knn.predict(test_x), \
                        self.lr.predict(test_x),\
                              self.voting.predict(test_x),\
                                  self.rfc.predict(test_x)
    
    def save(self):
        joblib.dump(value=self, \
                    filename=os.path.join(os.path.dirname(os.path.dirname(__file__)), "test_model.pkl"))
    
def save_model(model, path):
    try:
        joblib.dump(model, path)
        return True
    except :
        print("model 저장에 실패하였습니다.")
        return False
#%%
def model_train_save():
    train_df = pd.read_csv("/Users/ohs/Desktop/capstone/personal_color_dataset/train/new_data.csv")
    features = train_df.columns.drop(["filename", "label"])

    train_x = train_df[features]
    train_y = train_df['label']


    m = PersonalColorModel()
    # mm = MinMaxScaler()
    scaler = StandardScaler()

    scaler.fit(train_x)

    processing_train_x = scaler.transform(train_x)

    m.train(processing_train_x, train_y)

    save_model(scaler, os.path.join(os.path.dirname(os.path.dirname(__file__)), "scaler_all_features.pkl"))
    save_model(m, os.path.join(os.path.dirname(os.path.dirname(__file__)), "test_model_all_features.pkl"))
# %%

train_path = "/Users/ohs/Desktop/capstone/personal_color_dataset/train"

for file_name in os.listdir(train_path):
    if os.path.isdir(os.path.join(train_path, file_name)):
        folder_path = os.path.join(train_path, file_name)
        size = len(os.listdir(folder_path))

        data = {'filename' : [0] * size, 'Red' : [0] * size, 'Green' : [0] * size, 'Blue' : [0] * size, 
        'Hue' : [0] * size, 'Saturation' : [0] * size, 'Value' : [0] * size, 
        'Y' : [0] * size, 'Cr' : [0] * size, 'Cb' : [0] * size, 
        'L' : [0] * size, 'A' : [0] * size, 'B' : [0] * size, 
        'Hair_Red' : [0] * size, 'Hair_Green' : [0] * size, 'Hair_Blue' : [0] * size,
       'Eye_Red' : [0] * size, 'Eye_Green' : [0] * size, 'Eye_Blue' : [0] * size, 
       'New Red' : [0] * size, 'New Green' : [0] * size, 'New Blue' : [0] * size}


        for i, name in enumerate(df['filename']):
    path = os.path.join(os.getcwd(), "personal_color_dataset", "train", name)
    # file 이름 넣기
    data['filename'][i] = name

    # 전체 마스크
    total_feat_mask = get_mask(path)

    # 얼굴과 코 마스크
    face_mask = get_feature_mask(total_feat_mask, FaceFeature.FACE)
    nose_mask = get_feature_mask(total_feat_mask, FaceFeature.NOSE)

    # 마스크 합치기
    face_nose_mask = combine_feature(face_mask, nose_mask)

    # 이진 마스크로 변환
    binary_mask = (face_nose_mask >= 0.5).astype(int)

    # image load
    image = cv2.imread(path)
    image = gamma_correction(image, 0.8)
    rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    ycrcb_image = cv2.cvtColor(image, cv2.COLOR_BGR2YCrCb)
    lab_image = cv2.cvtColor(image, cv2.COLOR_BGR2LAB)

    #RGB
    rgb = extract_points(binary_mask, rgb_image)
    rgb_average = rgb.mean(axis=0).round()
    data['Red'][i] = rgb_average[0]
    data['Green'][i] = rgb_average[1]
    data['Blue'][i] = rgb_average[2]

    #HSV
    hsv = extract_points(binary_mask, hsv_image)
    hsv_average = hsv.mean(axis=0).round()
    data['Hue'][i] = hsv_average[0]
    data['Saturation'][i] = hsv_average[1]
    data['Value'][i] = hsv_average[2]

    #YCrCb
    Ycrcb = extract_points(binary_mask, ycrcb_image)
    Ycrcb_average = Ycrcb.mean(axis=0).round()
    data['Y'][i] = Ycrcb_average[0]
    data['Cr'][i] = Ycrcb_average[1]
    data['Cb'][i] = Ycrcb_average[2]

    #LAB
    lab = extract_points(binary_mask, lab_image)
    lab_average = lab.mean(axis=0).round()
    data['L'][i] = lab_average[0]
    data['A'][i] = lab_average[1]
    data['B'][i] = lab_average[2]

    # Hair Color
    hair_mask = get_feature_mask(total_feat_mask, FaceFeature.HAIR)
    binary_mask = (hair_mask >= 0.5).astype(int)

    hair_rgb = extract_points(binary_mask, rgb_image)
    hair_rgb_average = hair_rgb.mean(axis=0).round()
    data['Hair_Red'][i] = hair_rgb_average[0]
    data['Hair_Green'][i] = hair_rgb_average[1]
    data['Hair_Blue'][i] = hair_rgb_average[2]


# test_df = pd.read_csv("../personal_color_dataset/test/new_data.csv")

# features = ['Hair_Red', 'Hue', 'Saturation', 'Cr', 'Cb', 'L',
#             'A', 'B', 'New Blue', 'Eye_Red', 'Eye_Blue', 'New Green', 'New Red']

# features = ['Blue', 
#             'Hair_Blue', 
#             'Hue', 'Saturation', 'Value',
#             'A', 'B', 
#             'Eye_Blue',
#             'New Blue']

# test_x = test_df[features]
# y_test = test_df['label']
# processing_test_x = scaler.transform(test_x)

# processing_test_x = mm.transform(test_x)
# X_train, X_test, y_train, y_test = train_test_split(train_x, train_y, test_size=0.2,random_state=2024)

# m.train(X_train, y_train)
#     # res_xgb, res_ovr, res_ovo, res_knn, res_lr = m.test(X_test)
#     res_xgb, res_knn, res_lr, res_voting, res_rfc = m.predict_probability(processing_test_x)
# # res_ovr, res_ovo,
#     print("xgb 평가지표")
#     print(res_xgb)
#     # get_evaluation(y_test, res_xgb)
#     print()

#     # print("ovr 평가지표")
#     # print(res_ovr)
#     # # get_evaluation(y_test, res_ovr)
#     # print()

#     # print("ovo 평가지표")
#     # print(res_ovo)
#     # # get_evaluation(y_test, res_ovo)
#     # print()

#     print("knn 평가지표")
#     print(res_knn)
#     # get_evaluation(y_test, res_knn)
#     print()

#     print("lr 평가지표")
#     print(res_lr)
#     # get_evaluation(y_test, res_lr)
#     print()

#     print("voting 평가지표")
#     print(res_voting)
#     # get_evaluation(y_test, res_voting)
#     print()

#     print("rfc 평가지표")
#     print(res_rfc)
#     # get_evaluation(y_test, res_rfc)
#     print()
#%%
# feature_plot(train_df, "label")

#%%
# feature_corr = train_x.corr()   
# heatmap_plot(feature_corr)
# %%
# plot_importance(m.xgb)

# %%
# model_train_save()