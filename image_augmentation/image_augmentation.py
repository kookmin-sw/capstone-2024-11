import cv2
import os
import numpy as np
import pandas as pd

def image_flipping(img, type):
    # type == 0 상하 반전, type == 1 좌우 반전
    return cv2.flip(img, type)

def image_rotation(img, angle):
    return cv2.rotate(img, angle)

path = os.path.dirname(os.path.dirname(__file__)) + "/test/kimmingyu_rotation_270.jpeg"
print(path)
image = cv2.imread("./test/kimmingyu.jpeg")

cv2.imwrite(path, image_rotation(image, cv2.ROTATE_90_COUNTERCLOCKWISE))

