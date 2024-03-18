from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn import svm

class classifier:

    def __init__(self):
        self.df = pd.read_csv("./test.csv")
         # 데이터 불러오기
        x_data = self.df.loc[:, "D1":"A3"]
        y_data = self.df.loc[:, "shape"]

        (self.x_train, self.x_valid, self.y_train, self.y_valid) = train_test_split(x_data, y_data, train_size=0.8, random_state=1)
    

    def get_knn(self):
        knn = KNeighborsClassifier(n_neighbors=3, weights="distance", metric="euclidean")
        knn.fit(self.x_train, self.y_train)
        probabilities = knn.predict_proba(self.x_valid)[0]
        return probabilities

    def get_mlr(self):

        logreg = LogisticRegression(max_iter=1000)
        logreg.fit(self.x_train, self.y_train)

        probabilities = logreg.predict_proba(self.x_valid)[0]
        return probabilities
    
    def get_svm(self):
     
        clf = svm.SVC(kernel='linear', probability=True)

        # 모델 학습
        clf.fit(self.x_train, self.y_train)
        
        # 예측
        probabilities = clf.predict_proba(self.x_valid)[0]
        return probabilities
    
    def soft_vote(d, a, b, c):
        result = []
        for i, j, k in zip(a, b, c):
            result.append((i + j + k)/3)
        return result
    
if __name__ == "__main__":
    cls = classifier()
    a = cls.get_knn()
    b = cls.get_mlr()
    c = cls.get_svm()

    cls.soft_vote(a, b, c)