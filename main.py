from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
from PC_model.pc_model import PersonalColorModel
from PC_model.utils import draw_probability_bar_chart
from image_processing.gamma_correction import gamma_correction

import joblib
import os
import pandas as pd
import shutil
import base64

from flask import Flask, request, jsonify

import shape_detect.controller

app = Flask(__name__)

image_path = os.path.join(os.path.dirname(__file__), "predict_image")
filename = ""
pc_model : PersonalColorModel = joblib.load('./model_v2.pkl')
ss = joblib.load("./scaler_v2.pkl")
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

    type = f.filename[f.filename.rfind("."):]

    folder_path = os.path.join(image_path, f.filename.replace(".", "_"))
    f_path = os.path.join(folder_path, "origin_img" + type)

    if os.path.exists(folder_path):
        shutil.rmtree(folder_path)
    
    os.makedirs(folder_path)

    f.save(f_path)

    current_image_path = f_path[:]
    print(current_image_path)
    
    # 데이터 추출
    data = total_data_extract(f_path, True)

    # DataFrame으로 변환
    df = pd.DataFrame(data, index = [0])

    # 학습에 사용된 features들만 가져오기
    predict_data = df[features]

    # Scaler
    preprocssing_data = ss.transform(predict_data)

    # 예츨 결과
    raw_res = pc_model.select_test("xgb", preprocssing_data)
    probability_res = pc_model.select_predict_probability("xgb", preprocssing_data)

    predict_probability = {}
    # key_list = ["xgb", "knn", "lr", "voting", "rfc"]
    key_list = ["xgb"]
    for probability_list, key in zip(probability_res, key_list):
        predict_probability[key] = list(map(lambda x : "{:.2f}%".format(x * 100), probability_list))

    draw_probability_bar_chart(list(map(lambda x : round(x * 100), probability_res[0])), folder_path)
    
    predict_res = {}
    for predict, key in zip(raw_res, key_list):
        if predict == 0:
            label = "spring"
        elif predict == 1:
            label = "summer"
        elif predict == 2:
            label = "fall"
        else:
            label = "winter"
        predict_res[key] = label
    
    res = {"label_res" : predict_res, "probability_res" : predict_probability}
    img_dict = {}
    for i in os.listdir(folder_path):
        with open(os.path.join(folder_path, i), "rb") as img:
            img_dict[i[: i.index(".")]] = base64.b64encode(img.read()).decode('utf-8')
    res["images"] = img_dict
    return res

@app.route('/predict_test')
def test():
    return str(pc_model.test([[0] * 13]))

from shape_detect.controller import get_shape
@app.route('/predict_shape', methods =['GET'])
def predict_shape():
    global current_image_path
    print(current_image_path)
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
