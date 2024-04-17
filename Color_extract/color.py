#%%
import sys
import os
import cv2
import numpy as np
import pandas as pd
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from Skin_detect.skin_detect_v2 import *
from image_processing.gamma_correction import *

def extract_points(mask, img):
    points = np.argwhere(mask)
    return img[points[:, 0], points[:, 1], :]

def save_data_csv(df, csv_path):
    df.to_csv(path_or_buf = csv_path, mode='w', index = False)

def make_ycrcb_data(csv_path, folder_name):
    sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

    df = pd.read_csv(csv_path)

    # columns 명의 공백 제거
    df.columns = [x.replace(' ', '') for x in df.columns]

    # label이 포함된 경우 추출
    label = []
    if df.columns[-1] == "label":
        label = df['label']
        df.drop(columns='label', inplace=True)

    Y = [0] * len(df)
    Cr = [0] * len(df)
    Cb = [0] * len(df)

    for idx, file in enumerate(df['filename']):
        # 색상정보 검출할 파일 경로
        path = os.path.join(os.getcwd(), folder_name, "test", file)
        total_feat_mask = get_mask(path)

        face_mask = get_feature_mask(total_feat_mask, FaceFeature.FACE)
        nose_mask = get_feature_mask(total_feat_mask, FaceFeature.NOSE)

        face_nose_mask = combine_feature(face_mask, nose_mask)

        binary_mask = (face_nose_mask >= 0.5).astype(int) 

        face_img = extract_feature(path, binary_mask)

        image = cv2.imread(path)
        ycrcb_image = cv2.cvtColor(image, cv2.COLOR_BGR2YCrCb)
        ycrcb = extract_points(binary_mask, ycrcb_image)

        ycrcb_mean = ycrcb.mean(axis=0).round()

        Y[idx] = ycrcb_mean[0]
        Cr[idx] = ycrcb_mean[1]
        Cb[idx] = ycrcb_mean[2]

        print("진행률 : {} / {}\n".format(idx, len(df)))

    ycrcb_data = {'Y' : Y, 'Cr' : Cr, 'Cb': Cb}
    ycrcb_df = pd.DataFrame(ycrcb_data)

    total_df = pd.concat([df, ycrcb_df], axis=1, ignore_index=False)

    if len(label) != 0:
        total_df['label'] = label
    return total_df

def make_hsv_data(csv_path, folder_name):
    sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

    df = pd.read_csv(csv_path)

    # columns 명의 공백 제거
    df.columns = [x.replace(' ', '') for x in df.columns]

    # label이 포함된 경우 추출
    label = []
    if df.columns[-1] == "label":
        label = df['label']
        df.drop(columns='label', inplace=True)

    H = [0] * len(df)
    S = [0] * len(df)
    V = [0] * len(df)

    for idx, file in enumerate(df['filename']):
        # 색상정보 검출할 파일 경로
        path = os.path.join(os.getcwd(), folder_name, "test", file)
        total_feat_mask = get_mask(path)

        face_mask = get_feature_mask(total_feat_mask, FaceFeature.FACE)
        nose_mask = get_feature_mask(total_feat_mask, FaceFeature.NOSE)

        face_nose_mask = combine_feature(face_mask, nose_mask)

        binary_mask = (face_nose_mask >= 0.5).astype(int)

        face_img = extract_feature(path, binary_mask)

        image = cv2.imread(path)
        hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

        hsv = extract_points(binary_mask, hsv_image)

        hsv_mean = hsv.mean(axis=0).round()

        H[idx] = hsv_mean[0]
        S[idx] = hsv_mean[1]
        V[idx] = hsv_mean[2]

        print("진행률 : {} / {}\n".format(idx, len(df)))

    hsv_data = {'H' : H, 'S' : S, 'V': V}
    hsv_df = pd.DataFrame(hsv_data)

    total_df = pd.concat([df, hsv_df], axis=1, ignore_index=False)

    if len(label) != 0:
        total_df['label'] = label
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
        path = os.path.join(os.getcwd(), folder_name, "test", file)
        total_feat_mask = get_mask(path)

        face_mask = get_feature_mask(total_feat_mask, FaceFeature.LEFT_EYE)
        nose_mask = get_feature_mask(total_feat_mask, FaceFeature.RIGHT_EYE)

        face_nose_mask = combine_feature(face_mask, nose_mask)

        binary_mask = (face_nose_mask >= 0.5).astype(int)

        face_img = extract_feature(path, binary_mask)

        image = cv2.imread(path)
        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        rgb = extract_points(binary_mask, rgb_image)

        rgb_mean = rgb.mean(axis=0).round()

        red[idx] = rgb_mean[0]
        green[idx] = rgb_mean[1]
        blue[idx] = rgb_mean[2]

        print("진행률 : {} / {}\n".format(idx, len(df)))

    rgb_data = {'Eye_Red' : red, 'Eye_Green' : green, 'Eye_Blue': blue}
    rgb_df = pd.DataFrame(rgb_data)

    total_df = pd.concat([df, rgb_df], axis=1, ignore_index=False)
    if len(label) != 0:
        total_df = pd.concat([total_df, label], axis=1, ignore_index=False)

    return total_df

def make_lab_data(csv_path, folder_name):
    sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

    df = pd.read_csv(csv_path)

    # columns 명의 공백 제거
    df.columns = [x.replace(' ', '') for x in df.columns]

    # label이 포함된 경우 추출
    label = []
    if df.columns[-1] == "label":
        label = df['label']
        df.drop(columns='label', inplace=True)

    L = [0] * len(df)
    A = [0] * len(df)
    B = [0] * len(df)

    for idx, file in enumerate(df['filename']):
        # 색상정보 검출할 파일 경로
        path = os.path.join(os.getcwd(), folder_name, "test", file)
        total_feat_mask = get_mask(path)

        face_mask = get_feature_mask(total_feat_mask, FaceFeature.FACE)
        nose_mask = get_feature_mask(total_feat_mask, FaceFeature.NOSE)

        face_nose_mask = combine_feature(face_mask, nose_mask)

        binary_mask = (face_nose_mask >= 0.5).astype(int)

        image = cv2.imread(path)
        lab_image = cv2.cvtColor(image, cv2.COLOR_BGR2LAB)
        lab = extract_points(binary_mask, lab_image)

        lab_mean = lab.mean(axis=0).round()

        L[idx] = lab_mean[0]
        A[idx] = lab_mean[1]
        B[idx] = lab_mean[2]

        print("진행률 : {} / {}\n".format(idx, len(df)))

    lab_data = {'L' : L, 'A' : A, 'B' : B}
    lab_df = pd.DataFrame(lab_data)

    total_df = pd.concat([df, lab_df], axis=1, ignore_index=False)

    if len(label) != 0:
        total_df['label'] = label

    return total_df

# lab 색공간의 l값을 이용한 밝기 필터링
def filter_by_brightness(rgb_codes, brightness_threshold=60):
  new_rgb_codes = []
  for rgb in rgb_codes:
    lab = cv2.cvtColor(np.array([[rgb]]), cv2.COLOR_RGB2LAB).squeeze()
    if lab[0] >= brightness_threshold:
      new_rgb_codes.append(rgb)
  return np.array(new_rgb_codes)

# RGB 색공간의 상위 값 추출
def extract_high_rank(rgb_codes, color_area, percent):
  idx = int(rgb_codes.shape[0] * (percent / 100))
  new_rgb_codes = sorted(rgb_codes, key = lambda x : x[color_area], reverse=True)[ : idx]
  return np.array(new_rgb_codes)

# #%%
# df = pd.read_csv("../personal_color_dataset/test/data.csv")

# #%%
# label = df['label']
# df.drop(columns='label', inplace=True)

# #%%
# for i, name in enumerate(df['filename']):
#     path = os.path.join(os.path.dirname(os.getcwd()), "personal_color_dataset", "test", name)
#     # file 이름 넣기
#     data['filename'][i] = name

def total_data_extract(path):
    data = {'Red' : 0, 'Green' : 0, 'Blue' : 0, 
        'Hue' : 0, 'Saturation' : 0, 'Value' : 0, 
        'Y' : 0, 'Cr' : 0, 'Cb' : 0, 
        'L' : 0, 'A' : 0, 'B' : 0, 
        'Hair_Red' : 0, 'Hair_Green' : 0, 'Hair_Blue' : 0,
       'Eye_Red' : 0, 'Eye_Green' : 0, 'Eye_Blue' : 0, 
       'New Red' : 0, 'New Green' : 0, 'New Blue' : 0}
    
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
    data['Red'] = rgb_average[0]
    data['Green'] = rgb_average[1]
    data['Blue'] = rgb_average[2]

    #HSV
    hsv = extract_points(binary_mask, hsv_image)
    hsv_average = hsv.mean(axis=0).round()
    data['Hue'] = hsv_average[0]
    data['Saturation'] = hsv_average[1]
    data['Value'] = hsv_average[2]

    #YCrCb
    Ycrcb = extract_points(binary_mask, ycrcb_image)
    Ycrcb_average = Ycrcb.mean(axis=0).round()
    data['Y'] = Ycrcb_average[0]
    data['Cr'] = Ycrcb_average[1]
    data['Cb'] = Ycrcb_average[2]

    #LAB
    lab = extract_points(binary_mask, lab_image)
    lab_average = lab.mean(axis=0).round()
    data['L'] = lab_average[0]
    data['A'] = lab_average[1]
    data['B'] = lab_average[2]

    # Hair Color
    hair_mask = get_feature_mask(total_feat_mask, FaceFeature.HAIR)
    binary_mask = (hair_mask >= 0.5).astype(int)

    hair_rgb = extract_points(binary_mask, rgb_image)
    hair_rgb_average = hair_rgb.mean(axis=0).round()
    data['Hair_Red'] = hair_rgb_average[0]
    data['Hair_Green'] = hair_rgb_average[1]
    data['Hair_Blue'] = hair_rgb_average[2]
    
    # Eye Color
    le_mask = get_feature_mask(total_feat_mask, FaceFeature.LEFT_EYE)
    re_mask = get_feature_mask(total_feat_mask, FaceFeature.RIGHT_EYE)

    eye_mask = combine_feature(le_mask, re_mask)
    binary_mask = (eye_mask >= 0.5).astype(int)

    eye_rgb = extract_points(binary_mask, rgb_image)
    eye_rgb_average = eye_rgb.mean(axis=0).round()
    data['Eye_Red'] = eye_rgb_average[0]
    data['Eye_Green'] = eye_rgb_average[1]
    data['Eye_Blue'] = eye_rgb_average[2]

    # New RGB
    binary_mask = (face_nose_mask >= 0.5).astype(int)

    rgb_codes = extract_points(binary_mask, rgb_image)
    new_rgb_codes = extract_high_rank(rgb_codes, 2, 10)

    new_rgb_average = new_rgb_codes.mean(axis=0).round()
    data['New Red'] = new_rgb_average[0]
    data['New Green'] = new_rgb_average[1]
    data['New Blue'] = new_rgb_average[2]

    return data

# #%%
# new_df = pd.DataFrame(data)
# #%%
# new_df
# #%%

# new_df['label'] = label
# save_data_csv(new_df, "../personal_color_dataset/test/new_data.csv")

# #%% 
# df = pd.read_csv("../personal_color_dataset/test/data.csv")
# df

# # %%
