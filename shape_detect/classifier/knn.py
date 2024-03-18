from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
from sklearn.model_selection import train_test_split

def get_knn():
    # 데이터 불러오기
    df = pd.read_csv("./test.csv")
    x_data = df.loc[:, "D1":"A3"]
    y_data = df.loc[:, "shape"]

    (x_train, x_valid, y_train, y_valid) = train_test_split(x_data, y_data, train_size=0.8, random_state=1)

    knn = KNeighborsClassifier(n_neighbors=3, weights="distance", metric="euclidean")
    knn.fit(x_train, y_train)
    print(knn.predict_proba(x_valid))
