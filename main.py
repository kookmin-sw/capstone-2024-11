from shape_detect import classifier, controller
from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
import joblib
from werkzeug.utils import secure_filename
from flask import Flask, request, render_template, send_file

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
        file.save("./static/"+secure_filename(file.filename))
        return "upload"

    return '사진이 없습니다.'

if __name__ == '__main__':
    app.run(port="8080", debug=True)