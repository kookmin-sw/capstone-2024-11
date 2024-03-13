import dlib
import cv2
import numpy as np

#랜드마크 번호에 따른 부위
RIGHT_EYE = list(range(36, 42))
LEFT_EYE = list(range(42, 48))
MOUTH = list(range(48, 68))
NOSE = list(range(27, 36))
EYEBROWS = list(range(17, 27))
JAWLINE = list(range(1, 17))
ALL = list(range(0, 81))
EYES = list(range(36, 48))
FOREHEAD = list(range(68, 81))

def get_landmark(img_path):
    image_file = img_path
    predictor_file = './shape_predictor_81_face_landmarks.dat'
    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor(predictor_file)

    image = cv2.imread(image_file)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    display_image = image

    rects = detector(gray, 1)

    pos = []

    print("Number of faces detected: {}".format(len(rects)))

    for (i, rect) in enumerate(rects):
        points = np.matrix([[p.x, p.y] for p in predictor(gray, rect).parts()])
        show_parts = points[ALL]
        for (i, point) in enumerate(show_parts):
            x = point[0,0]
            y = point[0,1]
            pos.append([x,y])
            cv2.circle(display_image, (x, y), 1, (0, 255, 255), -1)
            cv2.putText(display_image, "{}".format(i), (x, y - 2),
            cv2.FONT_HERSHEY_SIMPLEX, 0.4, (0, 255, 0), 1)
    
    return display_image, pos
