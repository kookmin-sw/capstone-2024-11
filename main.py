from shape_detect import classifier, controller
from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
import joblib
from werkzeug.utils import secure_filename
from flask import Flask, request, render_template, send_file
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return '사진이 전송되지 않았습니다.'

    file = request.files['file']

    if file:
        input_path = "./static/"+secure_filename(file.filename)
        file.save(input_path)

        norm_distances, angles, rations = controller.get_vector(input_path)

        if not norm_distances:
            os.unlink(input_path)
            return "얼굴인식 실패"

        cls = classifier.classifier()
        cls.set_vector(norm_distances + angles + rations)
        shape_result = cls.get_shape()
        
        os.unlink(input_path)
        return shape_result
    
    return '사진이 없습니다.'

if __name__ == '__main__':
    app.run(port="8080", debug=True)