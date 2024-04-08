import cv2

def image_flipping(img, type):
    # type == 0 상하 반전, type == 1 좌우 반전
    return cv2.flip(img, type)

def image_rotation(img, angle):
    # 이미지의 크기를 잡고 이미지의 중심을 계산
    h, w = img.shape[:2]
    cX, cY = w // 2, h // 2
    
    # 이미지의 중심을 기준으로 이미지를 회전
    M = cv2.getRotationMatrix2D((cX, cY), angle, 1.0)
    rotated_img = cv2.warpAffine(img, M, (w, h))
    
    return rotated_img