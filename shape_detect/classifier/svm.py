from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score
import pandas as pd

def svm():
    # 데이터 불러오기
    df = pd.read_csv("./test.csv")
    x = df.loc[:, "D1":"A3"]
    y = df.loc[:, "shape"]
    
    # 데이터 분할
    X_train, X_test, y_train, y_test = train_test_split(
        x, y, train_size = 0.8, random_state=42)
    
    # SVM 모델 정의
    clf = svm.SVC(kernel='linear', probability=True)

    # 모델 학습
    clf.fit(X_train, y_train)
    
    # 예측
    probabilities = clf.predict_proba(X_test)
    return probabilities[0]