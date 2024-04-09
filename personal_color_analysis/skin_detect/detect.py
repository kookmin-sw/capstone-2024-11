import cv2
import dlib
import numpy as np

def dlib_segment(img) :
  predictor_path = './shape_predictor_68_face_landmarks.dat'
  predictor = dlib.shape_predictor(predictor_path)

  image = img
  image_with_shape = img  

  detector = dlib.get_frontal_face_detector()

  gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  faces = detector(gray_image)

  for face in faces:
      shape = predictor(gray_image, face)
      points = [(shape.part(i).x, shape.part(i).y) for i in range(68)]
      points = np.array(points, np.int32)

      convexhull = cv2.convexHull(points)
      mask = np.zeros_like(image)
      cv2.fillConvexPoly(mask, convexhull, (255, 255, 255))
      masked_image = cv2.bitwise_and(image, mask)

      left_eye_points = points[36:42]
      right_eye_points = points[42:48]
      mouth_points = points[48:68]

      cv2.fillPoly(masked_image, [left_eye_points], (0, 0, 0))
      cv2.fillPoly(masked_image, [right_eye_points], (0, 0, 0))

      cv2.fillPoly(masked_image, [mouth_points], (0, 0, 0))

      x, y, w, h = cv2.boundingRect(convexhull)
      cropped_image = masked_image[y:y+h, x:x+w]

  face_img_ycrcb = cv2.cvtColor(cropped_image, cv2.COLOR_BGR2YCrCb)
  lower = np.array([0,133,77], dtype = np.uint8)
  upper = np.array([255,173,127], dtype = np.uint8)
  skin_msk = cv2.inRange(face_img_ycrcb, lower, upper)
  skin = cv2.bitwise_and(cropped_image, cropped_image, mask = skin_msk)
  return skin