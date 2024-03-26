import sys
import os
import cv2
import numpy as np
import pandas as pd
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from Skin_detect.skin_detect_v2 import *

def extract_rgb(mask, path):
    img = cv2.imread(path)
    rgb_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    points = np.argwhere(mask)
    return rgb_img[points[:, 0], points[:, 1], :]

def extract_hsv(mask, path):
    img = cv2.imread(path)
    hsv_img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    points = np.argwhere(mask)
    return hsv_img[points[:, 0], points[:, 1], :]

def save_data_csv(df, csv_path):
    df.to_csv(path_or_buf = csv_path, mode='w', index = False)

def make_hsv_data(csv_path, folder_name):
    sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

    df = pd.read_csv(csv_path)

    H = [0] * len(df)
    S = [0] * len(df)
    V = [0] * len(df)

    for idx, file in enumerate(df['filename']):
        # 색상정보 검출할 파일 경로
        path = os.path.join(os.getcwd(), folder_name, "train", file)
        total_feat_mask = get_mask(path)

        face_mask = get_feature_mask(total_feat_mask, FaceFeature.FACE)
        nose_mask = get_feature_mask(total_feat_mask, FaceFeature.NOSE)

        face_nose_mask = combine_feature(face_mask, nose_mask)

        face_img = extract_feature(path, face_nose_mask)

        hsv = extract_hsv(face_img, path)

        hsv_mean = hsv.mean(axis=0).round()

        H[idx] = hsv_mean[0]
        S[idx] = hsv_mean[1]
        V[idx] = hsv_mean[2]

        print("진행률 : {} / {}\n".format(idx, len(df)))

    hsv_data = {'H' : H, 'S' : S, 'V': V}
    hsv_df = pd.DataFrame(hsv_data)

    label = df['label']
    df.drop(columns='label', inplace=True)

    total_df = pd.concat([df, hsv_df], axis=1)
    total_df = pd.concat([total_df, label])
    return total_df

def make_rgb_data(csv_path, folder_name):
    sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

    df = pd.read_csv(csv_path)

    # columns 명의 공백 제거
    df.columns = [x.replace(' ', '') for x in df.columns]

    # label 포함 data일 시 label 추출
    label = []
    if df.columns[-1] == "label":
        label = df['label']
        df.drop(columns='label', inplace=True)

    # rgb 색상 저장할 list 생성
    red = [0] * len(df)
    green = [0] * len(df)
    blue = [0] * len(df)

    for idx, file in enumerate(df['filename']):
        # 색상정보 검출할 파일 경로
        path = os.path.join(os.getcwd(), folder_name, "train", file)
        total_feat_mask = get_mask(path)

        face_mask = get_feature_mask(total_feat_mask, FaceFeature.FACE)
        nose_mask = get_feature_mask(total_feat_mask, FaceFeature.NOSE)

        face_nose_mask = combine_feature(face_mask, nose_mask)

        face_img = extract_feature(path, face_nose_mask)

        rgb = extract_rgb(face_img, path)

        rgb_mean = rgb.mean(axis=0).round()

        red[idx] = rgb_mean[0]
        green[idx] = rgb_mean[1]
        blue[idx] = rgb_mean[2]

        print("진행률 : {} / {}\n".format(idx, len(df)))

    rgb_data = {'Red' : red, 'Green' : green, 'Blue': blue}
    rgb_df = pd.DataFrame(rgb_data)

    total_df = pd.concat([df, rgb_df], axis=1, ignore_index=True)
    if len(label) == 0:
        total_df = pd.concat([total_df, label], axis=1, ignore_index=True)

    return total_df


df1 = pd.read_csv("./personal_color_dataset/train/data.csv")
df2 = pd.read_csv("./personal_color_dataset/train/_classes.csv")

total_df = pd.concat([df2, df1], axis=0, ignore_index=True).sample(frac=1).reset_index(drop=True)

print(total_df)

save_data_csv(total_df, "./personal_color_dataset/train/data.csv")
