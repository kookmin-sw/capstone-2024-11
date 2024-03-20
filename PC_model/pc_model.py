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
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from Color_extract.color import extract_color
from Skin_detect.skin_detect_v2 import *

df = pd.read_csv('./personal_color_dataset/train/_classes.csv')

df.columns = [x.replace(' ', '') for x in df.columns]

label = [' ' for _ in range(len(df))]

for col in df[['fall', 'spring', 'summer', 'winter']]:
    label = [col if val == 1 else label[idx] for idx, val in enumerate(df[col])]

df.drop(labels=['fall', 'spring', 'summer', 'winter'], axis=1, inplace=True)

red = [0] * len(df)
green = [0] * len(df)
blue = [0] * len(df)

for idx, file in enumerate(df['filename']):
    print(file)
    path = os.path.join(os.getcwd(), "personal_color_dataset", "train", file)
    total_feat_mask = get_mask(path)
    face_mask = get_feature_mask(total_feat_mask, FaceFeature.FACE)
    nose_mask = get_feature_mask(total_feat_mask, FaceFeature.NOSE)

    face_nose_mask = combine_feature(face_mask, nose_mask)

    face_img = extract_feature(path, face_nose_mask)

    rgb = extract_color(face_img, path)

    rgb_mean = rgb.mean(axis=0).round()

    red[idx] = rgb_mean[0]
    green[idx] = rgb_mean[1]
    blue[idx] = rgb_mean[2]

    print("진행률 : {} / {}\n".format(idx, len(df)))

rgb_data = {'Red' : red, 'Green' : green, 'Blue': blue}
rgb_df = pd.DataFrame(rgb_data)

label = pd.DataFrame({"label" : label})
total_df = pd.concat([df, rgb_df], axis=1)

total_df = pd.concat([total_df, label], axis=1)

total_df.to_csv(path_or_buf = './personal_color_dataset/train/_classes.csv', mode='w')


# m = PersonalColorModel()