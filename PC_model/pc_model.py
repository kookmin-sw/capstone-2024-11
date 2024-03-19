import torch
import numpy as np
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

"""
test용 코드
"""

df = pd.read_csv('./personal_color_dataset/train/_classes.csv')

print(df.columns)
df.columns = [x.replace(' ', '') for x in df.columns]
print(df.columns)

label = [' ' for _ in range(len(df))]

for col in df[['fall', 'spring', 'summer', 'winter']]:
    label = [col if val == 1 else label[idx] for idx, val in enumerate(df[col])]

df.drop(labels=['fall', 'spring', 'summer', 'winter'], axis=1, inplace=True)

df['label'] = label
print(df)



# m = PersonalColorModel()


