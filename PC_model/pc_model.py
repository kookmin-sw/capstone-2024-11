import pandas as pd
from xgboost import XGBClassifier, plot_importance
import matplotlib.pyplot as plt

class PersonalColorModel:
    def __init__(self) -> None:
        self.model = XGBClassifier(object="multi:softmax", num_class=4)

    def train(self, train_x, train_y):
        self.model.fit(train_x, train_y)

    def test(self, test_x):
        return self.model.predict(test_x)

    def show_importance_factor(self):
        fig, ax = plt.subplots(figsize=(10, 12))
        plot_importance(self.model, ax = ax)

m = PersonalColorModel()

df = pd.read_csv("/Users/ohs/Desktop/capstone/personal_color_dataset/train/_classes.csv")

print(df)
