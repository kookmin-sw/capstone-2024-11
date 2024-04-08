#%%
import pandas as pd
import numpy as np
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from image_processing.gamma_correction import gamma_correction
from Skin_detect.skin_detect_v2 import *
from Color_extract.color import extract_high_rank, save_data_csv


from sklearn.model_selection import train_test_split
from utils import get_evaluation, feature_plot, heatmap_plot
from sklearn.preprocessing import MinMaxScaler, StandardScaler

from xgboost import XGBClassifier, plot_importance
from sklearn.multiclass import OneVsRestClassifier, OneVsOneClassifier
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier


class PersonalColorModel:
    def __init__(self) -> None:
        self.xgb = XGBClassifier(objective="multi:softmax")
        self.ovr = OneVsRestClassifier(LinearRegression())
        self.ovo = OneVsOneClassifier(SVC())
        self.knn = KNeighborsClassifier(n_neighbors=5, n_jobs=-1)
        self.lr = LogisticRegression()


    def train(self, train_x, train_y):
        self.xgb.fit(train_x, train_y)
        self.ovr.fit(train_x, train_y)
        self.ovo.fit(train_x, train_y)
        self.knn.fit(train_x, train_y)
        self.lr.fit(train_x, train_y)

    def test(self, test_x):
        return self.xgb.predict(test_x), self.ovr.predict(test_x), self.ovo.predict(test_x), self.knn.predict(test_x), self.lr.predict(test_x)

m = PersonalColorModel()

#%%
df = pd.read_csv("/Users/ohs/Desktop/capstone/personal_color_dataset/train/data.csv")

#%%

df.columns = [x.replace(' ', '') for x in df.columns]

label = []
if df.columns[-1] == "label":
    label = df['label']
    df.drop(columns='label', inplace=True)


R = [0] * len(df)
G = [0] * len(df)
B = [0] * len(df)

for idx, file in enumerate(df['filename']):
    # 색상정보 검출할 파일 경로
    path = os.path.join(os.path.dirname(os.getcwd()), "personal_color_dataset", "train", file)
    total_feat_mask = get_mask(path)

    face_mask = get_feature_mask(total_feat_mask, FaceFeature.FACE)
    nose_mask = get_feature_mask(total_feat_mask, FaceFeature.NOSE)

    face_nose_mask = combine_feature(face_mask, nose_mask)

    binary_mask = (face_nose_mask >= 0.5).astype(int)

    points = np.argwhere(binary_mask)

    # image processing
    image = cv2.cvtColor(cv2.imread(path), cv2.COLOR_BGR2RGB)
    processing_image = gamma_correction(image, 0.8)

    # blue 영역의 상위값 추출
    rgb_codes = processing_image[points[:, 0], points[:, 1], :]
    new_rgb_codes = extract_high_rank(rgb_codes, 2, 10)

    # 단순 평균
    rgb_mean = new_rgb_codes.mean(axis=0).round()

    R[idx] = rgb_mean[0]
    G[idx] = rgb_mean[1]
    B[idx] = rgb_mean[2]

    print("진행률 : {} / {}\n".format(idx, len(df)))

rgb_data = {'New Red' : R, 'New Green' : G, 'New Blue' : B}
rgb_df = pd.DataFrame(rgb_data)

total_df = pd.concat([df, rgb_df], axis=1, ignore_index=False)

if len(label) != 0:
    total_df['label'] = label

#%%
total_df
save_data_csv(total_df, "/Users/ohs/Desktop/capstone/personal_color_dataset/train/data.csv")
#%%
features = ['Blue', 
            'Hair_Blue', 
            'Hue', 'Saturation', 'Value',
            'A', 'B', 
            'Eye_Blue',
            'New Blue']

train_x = total_df[features]
train_y = total_df['label']

#%%
mm = MinMaxScaler()
processing_x = mm.fit_transform(train_x)

# %%

X_train, X_test, y_train, y_test = train_test_split(processing_x, train_y, test_size=0.2)

m.train(X_train, y_train)

res_xgb, res_ovr, res_ovo, res_knn, res_lr = m.test(X_test)

print("xgb 평가지표")
get_evaluation(y_test, res_xgb)
print()

print("ovr 평가지표")
get_evaluation(y_test, res_ovr)
print()

print("ovo 평가지표")
get_evaluation(y_test, res_ovo)
print()

print("knn 평가지표")
get_evaluation(y_test, res_knn)
print()

print("lr 평가지표")
get_evaluation(y_test, res_lr)
print()

#%%
feature_plot(df, "label")

#%%
feature_corr = train_x.corr()   
heatmap_plot(feature_corr)
# %%
