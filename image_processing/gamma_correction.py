import cv2
import numpy as np

def gamma_correction(img, gamma = 1.0):
  invG = 1.0 / gamma
  table = np.array([((i / 255.0) ** invG) * 255
        for i in np.arange(0, 256)]).astype("uint8")

  return cv2.LUT(img, table)