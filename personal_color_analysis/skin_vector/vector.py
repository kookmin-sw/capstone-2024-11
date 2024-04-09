# 방법2 ; k-means를 이용하여 대표 피부색상 검출 

import cv2
import dlib
import numpy as np
import sys
sys.path.append("../skin_detect_dlib")
from skin_detect_dlib import dlib_segment

def color_vector(skin_image):
  # 검은색을 제외한 피부 영역에서 피부 색상 픽셀 추출
  skin_pixels = []
  for y in range(skin_image.shape[0]):
      for x in range(skin_image.shape[1]):
          pixel = skin_image[y, x]
          if not all(pixel == [0, 0, 0]):  # 검은색 제외
              skin_pixels.append(pixel)

  # 대표 색상 추출을 위해 피부 색상 픽셀을 1차원 배열로 변환
  skin_pixels = np.array(skin_pixels)

  # K-Means 클러스터링 적용
  num_clusters = 20  # 클러스터 수 (대표 색상의 수)
  criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 0.1)
  _, labels, centers = cv2.kmeans(np.float32(skin_pixels), num_clusters, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)

  # 각 클러스터의 크기 계산
  cluster_sizes = np.bincount(labels.flatten())

  # 가중 평균을 사용하여 대표 색상 계산
  weighted_avg_color = np.zeros((1, 3), dtype=np.float32)
  for i, color in enumerate(centers):
      weighted_avg_color += (color * cluster_sizes[i])
  weighted_avg_color /= np.sum(cluster_sizes)

  # 대표 색상 출력
  dominant_color = np.uint8(weighted_avg_color)
  return dominant_color


image_path = "./test/kimmingyu.jpeg"
image = cv2.imread(image_path)
skin_image = dlib_segment(image)
dominant_color = color_vector(skin_image)

# 대표 색상 출력
print("Dominant Color (BGR):", dominant_color)

# 대표 색상 시각화
color_chip = np.zeros((100, 100, 3), dtype=np.uint8)
color_chip[:, :] = dominant_color
cv2.imshow("1",color_chip)
key = cv2.waitKey(0)

if key == ord('q'):
    cv2.destroyAllWindows()

