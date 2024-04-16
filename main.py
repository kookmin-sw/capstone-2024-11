from shape_detect import classifier
from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
import joblib

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(port="5000", debug=True)