import dlib
import cv2
import numpy as np

predictor_file = './shape_predictor_68_face_landmarks.dat' 
image_file = './test/kimmingyu.jpeg' 

ALL = list(range(0, 68))

img = cv2.imread(image_file)

# 얼굴의 landmark 뽑아내는 함수
def landmark_extract(img, predictor_file):    
    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor(predictor_file)

    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    rects = detector(gray_img, 1)

    for (i, rect) in enumerate(rects):
        points = np.matrix([[p.x, p.y] for p in predictor(gray_img, rect).parts()])

        left, right, top, bottom = rect.left(), rect.right(), rect.top(), rect.bottom()
        
    return points, left, right, top, bottom

# pos에 landmark 위치 정보 담겨있음
RIGHT_EYE = list(range(36, 42))
LEFT_EYE = list(range(42, 48))
MOUTH = list(range(48, 68))
NOSE = list(range(27, 36))
EYEBROWS = list(range(17, 27))
JAWLINE = list(range(1, 17))
ALL = list(range(0, 68))
EYES = list(range(36, 48))

# 두 점 거리 찾기
def find_distance(left, right):
    a = np.abs(left[0] - right[0])
    b = np.abs(left[1] - right[1])
    return int(np.sqrt(np.power(a, 2) + np.power(b, 2)))

# 두 점 기울기
def find_slope(left, right):
    x_increment = right[0] - left[0]
    y_increment = right[1] - left[1]
    return x_increment / y_increment

# 두 점의 중심
def find_center(left, right):
    return (int((left[0] + right[0]) / 2), int((left[1] + right[1]) / 2)) 

# 눈 부분 추출하기
def eye_ousting(pos, img):
    left_eye_pos = [(x[0], x[1]) for x in pos[LEFT_EYE].tolist()]
    right_eye_pos = [(x[0], x[1]) for x in pos[RIGHT_EYE].tolist()]

    # le_width = find_distance(left_eye_pos[0], left_eye_pos[3])
    # ri_width = find_distance(right_eye_pos[0], right_eye_pos[3])

    # le_height = find_distance(left_eye_pos[1], left_eye_pos[-2])
    # ri_height = find_distance(right_eye_pos[1], right_eye_pos[-2])

    # le_center = find_center(left_eye_pos[0], left_eye_pos[3])
    # ri_center = find_center(right_eye_pos[0], right_eye_pos[3])

    # left_slope = find_slope(left_eye_pos[0], left_eye_pos[3])
    # right_slope = find_slope(right_eye_pos[0], right_eye_pos[3])

    # left_axes_len = (le_width, le_height)
    # right_axes_len = (ri_width, ri_height)

    # mask = np.zeros_like(img[:, :])
    # cv2.ellipse(img=mask, center=le_center, axes=left_axes_len, angle=left_slope, startAngle=0, endAngle=360, color=black, thickness=-1)
    # cv2.ellipse(img=mask, center=ri_center, axes=right_axes_len, angle=right_slope, startAngle=0, endAngle=360, color=black, thickness=-1)

    left_pts = np.array(left_eye_pos, np.int32)
    left_pts = left_pts.reshape((-1, 1, 2))

    right_pts = np.array(right_eye_pos, np.int32)
    right_pts = right_pts.reshape((-1, 1, 2))

    res = img.copy()

    cv2.fillPoly(res, [left_pts], color=(0,0,0))
    cv2.fillPoly(res, [right_pts], color=(0,0,0))

    # arr = np.array([0, 0, 0], dtype=np.uint8)
    # mask = cv2.inRange(mask, arr, arr)
    # res = cv2.bitwise_and(img, img, mask=mask)

    return res


pos, left, right, top, bottom = landmark_extract(img, predictor_file)

eye_ousting_img = eye_ousting(pos, img)

face_original_img = img[top : bottom, left:right]
face_img = eye_ousting_img[top : bottom, left:right]


# https://www.researchgate.net/publication/262371199_Explicit_image_detection_using_YCbCr_space_color_model_as_skin_detection
# lower
lower = np.array([0, 133, 77], dtype=np.uint8)

# upper
upper = np.array([255, 173, 127], dtype=np.uint8)


face_image_ycbcr = cv2.cvtColor(face_img, cv2.COLOR_BGR2YCrCb)
face_skin_mask = cv2.inRange(face_image_ycbcr, lower, upper)

# cv2.imshow("test", face_skin_mask)


face_skin_img = cv2.bitwise_and(face_img, face_img, mask=face_skin_mask)

image_horizontal = np.hstack((face_original_img, face_skin_img))

cv2.imshow("Face Landmark", image_horizontal)
key = cv2.waitKey(0)

if key == ord('q'):
    cv2.destroyAllWindows()