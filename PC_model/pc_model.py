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
        self.knn = KNeighborsClassifier(n_neighbors=5, n_jobs=-1,)
        self.lr = LogisticRegression()


    def train(self, train_x, train_y):
        self.xgb.fit(train_x, train_y)
        self.ovr.fit(train_x, train_y)
        self.ovo.fit(train_x, train_y)
        self.knn.fit(train_x, train_y)
        self.lr.fit(train_x, train_y)

    def test(self, test_x):
        return self.xgb.predict(test_x), self.ovr.predict(test_x), self.ovo.predict(test_x), self.knn.predict(test_x), self.lr.predict(test_x)

#%%
train_df = pd.read_csv("/Users/ohs/Desktop/capstone/personal_color_dataset/train/new_data.csv")

#%%
# features = df.columns.drop(["filename", "label"])

# print(df.columns)

features = ['Hair_Red', 'Hue', 'Saturation', 'Cr', 'Cb',
            'A', 'B', 'New Blue', 'Eye_Red', 'Eye_Blue']

# features = ['Blue', 
#             'Hair_Blue', 
#             'Hue', 'Saturation', 'Value',
#             'A', 'B', 
#             'Eye_Blue',
#             'New Green']

train_x = train_df[features]
train_y = train_df['label']

m = PersonalColorModel()
#%%
mm = MinMaxScaler()
processing_x = mm.fit_transform(train_x)

# %%
test_df = pd.read_csv("../personal_color_dataset/test/new_data.csv")
test_x = test_df[features]
test_y = test_df['label']
#%%

# X_train, X_test, y_train, y_test = train_test_split(train_x, train_y, test_size=0.2,random_state=2024)

# m.train(X_train, y_train)

m.train(train_x, train_y)

# res_xgb, res_ovr, res_ovo, res_knn, res_lr = m.test(X_test)
res_xgb, res_ovr, res_ovo, res_knn, res_lr = m.test()

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
plot_importance(m.xgb)
# %%
