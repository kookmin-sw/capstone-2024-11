from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
from PC_model.pc_model import PersonalColorModel
from image_processing.gamma_correction import gamma_correction

from sklearn.preprocessing import StandardScaler

import joblib
import os
import pandas as pd

from flask import Flask, request, jsonify

import shape_detect.controller

app = Flask(__name__)

image_path = os.path.join(os.path.dirname(__file__), "predict_image")
filename = ""
pc_model : PersonalColorModel = joblib.load('./test_model.pkl')
ss = joblib.load("./scaler.pkl")
features = ['Hair_Red', 'Hue', 'Saturation', 'Cr', 'Cb', 'L',
                'A', 'B', 'New Blue', 'Eye_Red', 'Eye_Blue', 'New Green', 'New Red']

current_image_path = ""

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/predict_color', methods = ['POST'])
def predict_color():
    global features, pc_model, ss, current_image_path
    # 이미지 저장
    f = request.files['image']
    f_path = os.path.join(image_path, f.filename)
    filename = f.filename
    if not os.path.exists(f_path):
        f.save(f_path)

    current_image_path = f_path[:]
    
    # 데이터 추출
    data = total_data_extract(f_path)

    # DataFrame으로 변환
    df = pd.DataFrame(data, index = [0])

    # 학습에 사용된 features들만 가져오기
    predict_data = df[features]

    # Scaler
    preprocssing_data = ss.transform(predict_data)

    # 예츨 결과
    raw_res = pc_model.test(preprocssing_data)

    predict_res = [""] * len(raw_res)
    for idx, predict in enumerate(raw_res):
        if predict[0] == 0:
            label = "spring"
        elif predict[0] == 1:
            label = "summer"
        elif predict[0] == 2:
            label = "fall"
        else:
            label = "winter"
        predict_res[idx] = label
    return predict_res

@app.route('/predict_test')
def test():
    return str(pc_model.test([[0] * 13]))

from shape_detect.controller import get_shape
@app.route('/predict_shape', methods =['GET'])
def predict_shape():
    global image_path

    result = get_shape(current_image_path)
    
    if result == -1:
        return "경로에 사진을 찾을 수 없음"

    idx = result.index(max(result))
    total = sum(result)
    res = {
        'shape': idx,
        'probability': [ round(i/total*100, 1) for i in result],
    }

    return jsonify(res)

if __name__ == '__main__':
    app.run(port="5050", debug=True)
