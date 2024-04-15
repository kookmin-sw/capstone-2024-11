from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
import joblib
import os

from flask import Flask
app = Flask(__name__)

print(os.getcwd())

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(port="5000", debug=True)