import cv2
import numpy as np

def extract_color(mask, path):
    img = cv2.imread(path)
    rgb_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    points = np.argwhere(mask)
    return rgb_img[points[:, 0], points[:, 1], :]
    