import cv2
import os
import numpy as np

# for i in os.listdir("./input"):
#     path = os.path.join(os.path.dirname(__file__), "input", i)
#     img = cv2.imread(path)
#     # image = cv2.resize(img, (1024, 1024))
    
#     # path = path[:-4] + "_1024" + path[-4:]
#     # cv2.imwrite(path, image)
#     print(i, img.shape)
path = os.path.join(os.path.dirname(__file__), "input", "image1.jpeg")
img = cv2.imread(path)
print("img.shape", img.shape)
image = cv2.resize(img, (1024, 1024))
path = path[:-5] + "_1024" + path[-5:]
cv2.imwrite(path, image)
print("1024_img", image.shape)

