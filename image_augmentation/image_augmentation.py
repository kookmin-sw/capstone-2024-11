import cv2
import os
import numpy as np
import pandas as pd

def image_flipping(img, type):
    # type == 0 상하 반전, type == 1 좌우 반전
    return cv2.flip(img, type)

def image_rotation(img, angle):
    return cv2.rotate(img, angle)

path = os.path.dirname(os.path.dirname(__file__)) + "/personal_color_dataset/train/"

df = pd.read_csv(path + "data.csv")

files = df['filename']
labels = df['label']


namelist = ["_rotation_90.jpg", "_rotation_180.jpg", "_rotation_270.jpg", "_flip_horizontal.jpg"]

idx = df.index[-1] + 1

for file, label in zip(files, labels):
    image = cv2.imread(path + file)
    for i, name in enumerate(namelist):
        filename = path + file[ : -4] + name
        if i == 0:
            cv2.imwrite(filename, image_rotation(image, cv2.ROTATE_90_CLOCKWISE))
        elif i == 1:
            cv2.imwrite(filename, image_rotation(image, cv2.ROTATE_180))
        elif i == 2:
            cv2.imwrite(filename, image_rotation(image, cv2.ROTATE_90_COUNTERCLOCKWISE))
        else : 
            cv2.imwrite(filename, image_flipping(image, 1))
        df.loc[idx] = [file[: -4] + name, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, label]
        idx += 1

df.to_csv(path_or_buf= path + "data.csv", mode='w', index=False)