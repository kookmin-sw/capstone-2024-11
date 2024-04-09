import joblib
import pandas as pd
import argparse

class classifier:
    def __init__(self):
        self.df = pd.read_csv("./test.csv")
        self.x_data = self.df.loc[:, "D1":"A3"]
        self.y_data = self.df.loc[:, "shape"]

    def get_knn(self):
        knn = joblib.load('./shape_detect/models/knn_model.pkl') 
        probabilities = knn.predict_proba(self.x_data)
        return probabilities
    
    def get_dt(self):
        dt = joblib.load('./shape_detect/models/dt_model.pkl')
        probabilities = dt.predict_proba(self.x_data)
        return probabilities * 0.5

    def get_svm(self):
        clf = joblib.load('./shape_detect/models/svm_model.pkl')
        probabilities = clf.predict_proba(self.x_data)
        return probabilities * 2
    
    def softvote(d,a,b,c):
        result = []
        for i,j,k in zip(a,b,c):
            result.append((i+j+k)/3)
        return result.index(max(result))
    
def main(args):
    cls = classifier()

    a = cls.get_knn()
    b = cls.get_dt()
    c = cls.get_svm()

    df = pd.read_csv(args.testset)
    answer = df.loc[:, "shape"]

    correct = 0

    for i in range(len(a)):
        predict = cls.softvote(a[i],b[i],c[i])
        if answer[i] == predict:
            correct += 1

    print("accuracy", correct/len(a))

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Train Command')

    # dataset, train option
    parser.add_argument('--testset', type=str, default="./test.csv")
    args = parser.parse_args()
    main(args)
    


