import cv2

def image_flipping(img, type):
    # type == 0 상하 반전, type == 1 좌우 반전
    return cv2.flip(img, type)
