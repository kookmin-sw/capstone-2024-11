import numpy as np
import cv2

img_path = "./test/kimmingyu.jpeg"

img = cv2.imread(img_path)

# convert BGR to hsv
img_hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

mask_hsv = cv2.inRange(img_hsv, (0, 15, 0), (17, 170, 255))
mask_hsv = cv2.morphologyEx(mask_hsv, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))

img_YCrCb = cv2.cvtColor(img, cv2.COLOR_BGR2YCrCb)

mask_YCrCb = cv2.inRange(img_YCrCb, (0, 133, 77), (255, 173, 127))
mask_YCrCb = cv2.morphologyEx(mask_YCrCb, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))

mask = cv2.bitwise_and(mask_YCrCb, mask_hsv)
mask = cv2.medianBlur(mask, 3)
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((4, 4), np.uint8))

res = cv2.bitwise_and(img, img, mask=mask)

res_and_origin = np.hstack((res, img))

cv2.imshow("res_and_origin", res_and_origin)

key = cv2.waitKey(0)

if key == ord('q'):
    cv2.destroyAllWindows()
