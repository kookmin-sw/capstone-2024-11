import cv2
import numpy as np

# !pip install colour-science
# !pip install colormath
from colormath.color_objects import LabColor, sRGBColor, HSVColor
from colormath.color_conversions import convert_color

import sys
sys.path.append("../skin_detect_dlib")
sys.path.append("../skin_vector")
from skin_detect import dlib_segment
from skin_vector import color_vector
def is_warm_prob(lab_b, a):


    # standard of skin
    warm_b_std = 11.6518
    cool_b_std = 4.64255

    warm_dist = abs(lab_b - warm_b_std) * a
    cool_dist = abs(lab_b - cool_b_std) * a

    # 확률 계산
    warm_prob = 1 - (warm_dist / (warm_dist + cool_dist))
    cool_prob = 1 - warm_prob  # 쿨 톤에 대한 확률

    return warm_prob, cool_prob

def is_season_prob(hsv_s, a, season_std1, season_std2):

    season_dist1 = abs(hsv_s - season_std1) * a
    season_dist2 = abs(hsv_s - season_std2) * a

    # 확률 계산
    prob_season1 = 1 - (season_dist1 / (season_dist1 + season_dist2))
    prob_season2 = 1 - prob_season1  # 다른 계절에 대한 확률

    return prob_season1, prob_season2

def diagnose_personal_color(image_path):

    image = cv2.imread(image_path)
    skin_image = dlib_segment(image)
    dominant_color = color_vector(skin_image)
    selected_part = dominant_color
    Lab_bt, hsv_s = [], []

    # Lab_b 및 hsv_s 값을 계산하여 확률을 계산
    rgb = sRGBColor(selected_part[0][2], selected_part[0][1], selected_part[0][0], is_upscaled=True)
    lab = convert_color(rgb, LabColor, through_rgb_type=sRGBColor)
    hsv = convert_color(rgb, HSVColor, through_rgb_type=sRGBColor)
    Lab_b = float(format(lab.lab_b, ".2f"))
    hsv_s = float(format(hsv.hsv_s, ".2f")) * 100

    Lab_weight = 30
    hsv_weight = 10


    # 확률 계산
    warm_prob, cool_prob = is_warm_prob(Lab_b, Lab_weight)
    spring_prob, fall_prob = is_season_prob(hsv_s, hsv_weight, 18.59296, 27.13987)  # spring, fall
    summer_prob, winter_prob = is_season_prob(hsv_s, hsv_weight, 12.5, 16.73913)  # summer, winter

    # 결과 출력
    print('퍼스널 컬러 진단 결과:')
    print('  - 따뜻한 톤(Warm) 확률: {:.2f}%'.format(warm_prob * 100))
    print('  - 시원한 톤(Cool) 확률: {:.2f}%'.format(cool_prob * 100))

    print('  - 봄(Spring) 톤 확률: {:.2f}%'.format(spring_prob * 100))
    print('  - 가을(Fall) 톤 확률: {:.2f}%'.format(fall_prob * 100))
    print('  - 여름(Summer) 톤 확률: {:.2f}%'.format(summer_prob * 100))
    print('  - 겨울(Winter) 톤 확률: {:.2f}%'.format(winter_prob * 100))

# 이미지 경로
image_path = 'test.jpg'
# 퍼스널 컬러 진단 함수 호출
diagnose_personal_color(image_path)
