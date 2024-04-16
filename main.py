from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
from PC_model.pc_model import PersonalColorModel
from image_processing.gamma_correction import gamma_correction
import joblib
import os

from flask import Flask, request

app = Flask(__name__)

image_path = os.path.join(os.path.dirname(__file__), "predict_image")
pc_model : PersonalColorModel = joblib.load('./test_model.pkl')

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/predict_color', methods = ['POST'])
def predict_color():
    # 이미지 저장
    f = request.files['image']
    f_path = os.path.join(image_path, f.filename)
    f.save(f_path)

    return "Success"

@app.route('/predict_test')
def test():
    return str(pc_model.test([[0] * 13]))
    

if __name__ == '__main__':
    app.run(port="5050", debug=True)