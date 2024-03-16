from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
import pandas as pd

df = pd.read_csv("./test.csv") 

x_data=df.loc[:, "D1":"A3"]
y_data=df.loc[:, 'shape']

#전체 중 20%를 테스트용으로 분할,나머지 80%는 훈련용
(x_train, x_valid, y_train, y_valid) = train_test_split(x_data, y_data, train_size=0.5, random_state=1)

knn = KNeighborsClassifier(n_neighbors=2, weights="distance", metric="euclidean")
knn.fit(x_train, y_train)

print(knn.predict_proba(x_valid))







