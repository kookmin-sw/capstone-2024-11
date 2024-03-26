import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from utils import get_evaluation

from xgboost import XGBClassifier, plot_importance
from sklearn.multiclass import OneVsRestClassifier, OneVsOneClassifier
from sklearn.linear_model import LinearRegression
from sklearn.svm import SVC


class PersonalColorModel:
    def __init__(self) -> None:
        self.xgb = XGBClassifier(objective="multi:softmax")
        self.ovr = OneVsRestClassifier(LinearRegression())
        self.ovo = OneVsOneClassifier(SVC())


    def train(self, train_x, train_y):
        self.xgb.fit(train_x, train_y)
        self.ovr.fit(train_x, train_y)
        self.ovo.fit(train_x, train_y)

    def test(self, test_x):
        return self.xgb.predict(test_x), self.ovr.predict(test_x), self.ovo.predict(test_x)


m = PersonalColorModel()

df = pd.read_csv("/Users/ohs/Desktop/capstone/personal_color_dataset/train/_classes.csv")

train_x = df[['Red', 'Green', 'Blue']]
train_y = df['label']

X_train, X_test, y_train, y_test = train_test_split(train_x, train_y, test_size=0.2, random_state=2024)

m.train(X_train, y_train)

res_xgb, res_ovr, res_ovo = m.test(X_test)

print("xgb 평가지표")
get_evaluation(y_test, res_xgb)
print()

print("ovr 평가지표")
get_evaluation(y_test, res_ovr)
print()

print("ovo 평가지표")
get_evaluation(y_test, res_ovo)