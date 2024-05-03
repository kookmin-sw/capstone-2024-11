from sklearn.metrics import confusion_matrix, accuracy_score, precision_score, recall_score
from sklearn.metrics import confusion_matrix, f1_score
import seaborn as sns
import matplotlib
matplotlib.use("agg")
import matplotlib.pyplot as plt
import os


def get_evaluation(y_test, y_pred):
    confusion = confusion_matrix(y_test, y_pred) # 오차 행렬
    accuracy = accuracy_score(y_test, y_pred) # 정확도
    precision = precision_score(y_test, y_pred, average="macro") # 정밀도
    recall = recall_score(y_test, y_pred, average="macro") # 재현률
    F1 = f1_score(y_test, y_pred, average="macro") # f1
    # AUC = roc_auc_score(y_test, y_pred, average='macro') # auc
    print('오차행렬:\n', confusion)
    print('\n정확도: {:.4f}'.format(accuracy))
    print('정밀도: {:.4f}'.format(precision))
    print('재현율: {:.4f}'.format(recall))
    print('F1: {:.4f}'.format(F1))
    # print('AUC: {:.4f}'.format(AUC))

def get_accuracy(y_test, y_pred):
    return accuracy_score(y_test, y_pred)

def feature_plot(data, label_name):
    markers = ["o", "s", "d", "v"]
    sns.pairplot(data, hue=label_name, markers=markers)
    plt.show()

def heatmap_plot(data, number = True):
    sns.heatmap(data, annot=number, fmt=".2f")

# 3d plot을 이용하여 데이터 분포 확인
def draw_3d_rgb(rgb_codes, colors, path = None):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    ax.scatter(rgb_codes[:, 0], rgb_codes[:, 1], rgb_codes[:, 2], c=colors, marker='o')
    ax.set_xlabel('Red')
    ax.set_ylabel('Green')
    ax.set_zlabel('Blue')
    if path is None:
        plt.show()
    else:
        if not os.path.exists(path + "/rgb_3d_plot.jpg"):
            plt.savefig(path + "/rgb_3d_plot.jpg", format='jpeg')

