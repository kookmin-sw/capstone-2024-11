from utils import landmark, line, norm, ratio, vector
import csv

def get_vector(img_path):

    display_img, pos = landmark.get_landmark(img_path)#사진 랜드마크 처리

    distances = line.get_line(display_img, pos)#랜드마크간 특징 거리 추출

    norm_distances = norm.get_norm(distances) #거리정보 정규화

    vector = vector.get_vector(pos)#각도 산출을 위한 벡터 추출

    angles = vector.get_angles(vector) #각도 추출

    rations = ratio.get_ratio(distances) #길이 간 비율 정보


    # print("norm: ", norm_distances, "\n\n")
    # print("angle: ", A, "\n\n")
    # print("ratio: ", ratios, "\n\n")

    # cv2.imshow("Face Landmark", display_img)
    # cv2.waitKey(0)

    return norm_distances, angles, rations

img_path = './test/seulgi.jpeg'
get_vector(img_path)

def mk_label(norm_distances, angles, rations):
    row = [
            "D1","D2","D3","D4","D5","D6","D7","D8",
            "R1","R2","R3","R4","R5","R6","R7","R8","R9","R10",
            "A1","A2","A3"
          ]