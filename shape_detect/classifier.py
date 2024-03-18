import joblib
import pandas as pd

class classifier:
    def __init__(self):
        self.df = pd.read_csv("./test.csv")
        self.x_data = self.df.loc[:, "D1":"A3"]
        self.y_data = self.df.loc[:, "shape"]

    def get_knn(self):
        knn = joblib.load('./shape_detect/models/knn_model.pkl') 
        probabilities = knn.predict_proba(self.x_data)[0]
        return probabilities
    
    def get_mlr(self):
        mlr = joblib.load('./shape_detect/models/mlr_model.pkl')
        probabilities = mlr.predict_proba(self.x_data)[0]
        return probabilities

    def get_svm(self):
        clf = joblib.load('./shape_detect/models/svm_model.pkl')
        probabilities = clf.predict_proba(self.x_data)[0]
        return probabilities
    
    def softvote(a,b,c):
        result = []
        for i,j,k in zip(a,b,c):
            result.append((i+j+k)/3)

cls = classifier()
print(cls.get_knn())
print(cls.get_mlr())
print(cls.get_svm())

