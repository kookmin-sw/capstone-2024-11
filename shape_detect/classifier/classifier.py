from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn import svm

class classifier:

    def __init__(self):
        self.df = pd.read_csv("./test.csv")
    

    def get_knn(self):
        # 데이터 불러오기
        x_data = self.df.loc[:, "D1":"A3"]
        y_data = self.df.loc[:, "shape"]

        (x_train, x_valid, y_train, y_valid) = train_test_split(x_data, y_data, train_size=0.8, random_state=1)

        knn = KNeighborsClassifier(n_neighbors=3, weights="distance", metric="euclidean")
        knn.fit(x_train, y_train)
        return knn.predict_proba(x_valid)

    def get_mlr(self):

        x = self.df.loc[:, "D1":"A3"]
        y = self.df.loc[:, "shape"]


        X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

        logreg = LogisticRegression(max_iter=1000)
        logreg.fit(X_train, y_train)

        predictions = logreg.predict_proba(X_test)[0]

        return predictions
    
    def get_svm(self):
        x = self.df.loc[:, "D1":"A3"]
        y = self.df.loc[:, "shape"]
        
        X_train, X_test, y_train, y_test = train_test_split(
            x, y, train_size = 0.8, random_state=42)
        
        clf = svm.SVC(kernel='linear', probability=True)

        # 모델 학습
        clf.fit(X_train, y_train)
        
        # 예측
        probabilities = clf.predict_proba(X_test)
        return probabilities[0]
    
if __name__ == "__main__":
    cls = classifier()
    print(cls.get_knn())
    print(cls.get_mlr())
    print(cls.get_svm())