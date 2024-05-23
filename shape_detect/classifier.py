import joblib
import pandas as pd
import argparse
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score
import numpy as np

class classifier:
    def __init__(self):
        self.df = pd.read_csv("./test.csv")
        self.x_data = self.df.loc[:, "D1":"A3"]
        self.y_data = self.df.loc[:, "shape"]
    
    def set_vector(self, vector):
        row = ["D1","D2","D3","D4","D5","D6","D7","R1","R2","R3","R4","R5","R6","R7","R8","R9","R10","A1","A2","A3"]
        df = pd.DataFrame([vector], columns=row)
        self.x_data = df

    def get_knn(self):
        knn = joblib.load('./shape_detect/models/knn_model.pkl') 
        probabilities = knn.predict_proba(self.x_data)
        return probabilities * 2
    
    def get_dt(self):
        dt = joblib.load('./shape_detect/models/dt_model.pkl')
        probabilities = dt.predict_proba(self.x_data)
        return probabilities

    def get_svm(self):
        clf = joblib.load('./shape_detect/models/svm_model.pkl')
        probabilities = clf.predict_proba(self.x_data)
        return probabilities * 2
    
    def softvote(self,a,b,c):
        result = []
        for i,j,k in zip(a,b,c):
            result.append((i+j+k)/3)
        return result
    
    def get_shape(self):
        print(self.x_data)
        knn = self.get_knn()
        dt = self.get_dt()
        svm = self.get_svm()
        print("knn", knn[0])
        print("dt", dt[0])
        print("svm", svm[0])
        return self.softvote(knn[0], dt[0], svm[0])
    
def main(args):
    cls = classifier()

    a = cls.get_knn()
    b = cls.get_dt()
    c = cls.get_svm()
    
    df = pd.read_csv(args.testset)
    answer = df.loc[:, "shape"]

    answer = np.array([answer[i] for i in range(len(answer))])

    accuracies = []
    v_acc = []

    for i in range(len(answer)):
        predict_list = cls.softvote(a[i],b[i],c[i])
        v_acc.append(predict_list.index(max(predict_list)))

    a = np.array([a[i].argmax() for i in range(len(answer))])
    b = np.array([b[i].argmax() for i in range(len(answer))])
    c = np.array([c[i].argmax() for i in range(len(answer))])
    k_acc = accuracy_score(answer, a)
    d_acc = accuracy_score(answer, b)
    s_acc = accuracy_score(answer, c)

    accuracies.append(k_acc)
    accuracies.append(d_acc)
    accuracies.append(s_acc)
    accuracies.append(accuracy_score(answer, v_acc))
    print(accuracies)
    
    # 정확도 시각화
    import matplotlib.colors as mcolor
    models = ['KNN', 'Decision Tree', 'SVM', 'Soft voting']
    # plt.figure(figsize=(10, 6))
    plt.bar(models, accuracies, width=0.7, color="skyblue")
    plt.title('Model comparison')
    plt.xlabel('Models')
    plt.ylabel('Accuracy')
    plt.ylim(0, 1)  # y축 범위를 0에서 1로 설정
    plt.show()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Train Command')

    # dataset, train option
    parser.add_argument('--testset', type=str, default="./test.csv")
    args = parser.parse_args()
    main(args)
    


