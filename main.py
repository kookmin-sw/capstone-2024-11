from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
from PC_model.pc_model import PersonalColorModel
from image_processing.gamma_correction import gamma_correction
import joblib
import os

from flask import Flask, request

app = Flask(__name__)

image_path = os.path.join(os.path.dirname(__file__), "predict_image")

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/predict_color', methods = ['POST'])
def predict_color():
    f = request.files['image']
    f_name = f.filename
    print(f_name)
    f.save(os.path.join(image_path, f_name))
    return "Success"
    

if __name__ == '__main__':
    app.run(port="5050", debug=True)