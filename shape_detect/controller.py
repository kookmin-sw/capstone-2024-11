from shape_detect.utils import landmark, line, norm, ratio, vector
import cv2
import pandas as pd
import os

def get_vector(img_path):

    display_img, pos = landmark.get_landmark(img_path)#사진 랜드마크 처리

    distances = line.get_line(display_img, pos)#랜드마크간 특징 거리 추출

    norm_distances = norm.get_norm(distances) #거리정보 정규화

    vectors = vector.get_vector(pos)#각도 산출을 위한 벡터 추출

    angles = vector.get_angles(vectors) #각도 추출

    rations = ratio.get_ratio(distances) #길이 간 비율 정보


    # print("norm: ", norm_distances, "\n\n")
    # print("angle: ", angles, "\n\n")
    # print("ratio: ", rations, "\n\n")

    # cv2.imshow("Face Landmark", display_img)
    # cv2.waitKey(0)

    return norm_distances, angles, rations

def list_files(directory):
    file_names = []
    print(directory)
    for root, _, files in os.walk(directory):
        print(files)
        for file in files:
            file_names.append(os.path.join(root, file))
    return file_names

def make_label(data):
    row = ["D1","D2","D3","D4","D5","D6","D7","R1","R2","R3","R4","R5","R6","R7","R8","R9","R10","A1","A2","A3"]
    df = pd.DataFrame(data, columns = row)
    df.to_csv("./train.csv")
    print(df)

def run_label(path):
    data_set_directory = list_files(path)
    vectors = []
    for path in data_set_directory:
        norm_distances, angles, rations = get_vector(path)
        vectors.append(norm_distances + rations + angles)

    make_label(vectors)


