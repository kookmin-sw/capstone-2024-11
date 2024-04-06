from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn import svm
import joblib
import argparse

class trainer:

    def __init__(self):
        self.df = pd.read_csv("./train.csv")
        self.x_data = self.df.loc[:, "D1":"A3"]
        self.y_data = self.df.loc[:, "shape"]
    
    def train_knn(self):
        knn = KNeighborsClassifier(n_neighbors=3, weights="distance", metric="euclidean")
        knn.fit(self.x_data, self.y_data)

        joblib.dump(knn, './shape_detect/models/knn_model.pkl') 

    def train_mlr(self):
        logreg = LogisticRegression(max_iter=1000)
        logreg.fit(self.x_data, self.y_data)

        joblib.dump(logreg, './shape_detect/models/mlr_model.pkl') 
    
    def train_svm(self):
        clf = svm.SVC(kernel='linear', probability=True)
        clf.fit(self.x_data, self.y_data)

        joblib.dump(clf, './shape_detect/models/svm_model.pkl')

    def train_all(self):
        self.train_knn()
        self.train_mlr()
        self.train_svm()

def main(args):
    cls = trainer()
    cls.train_all()
    
    
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Train Command')

    # dataset directory
    parser.add_argument('--dataset', type=str, default="./dataset")
    args = parser.parse_args()
    main(args)
    