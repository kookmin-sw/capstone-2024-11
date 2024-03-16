from sklearn import datasets
import pandas as pd

#다중 로지스틱 회귀
iris = datasets.load_iris()
iris

df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['class'] = iris.target

df.columns=['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'class']
df.head(5)

print(df)

df.isnull().any()
df.drop_duplicates(inplace=True)

from sklearn.model_selection import train_test_split
from tensorflow.keras.utils import to_categorical

x_data=df.loc[:, 'sepal_length':'petal_width'] #설명변수 범위로 지정
y_data=df.loc[:, 'class'] #종속변수

#전체 중 20%를 테스트용으로 분할,나머지 80%는 훈련용
(x_train, x_valid, y_train, y_valid) = train_test_split(x_data, y_data, train_size=0.8, random_state=1)

#원-핫 인코딩(one-hot encoding)
y_train = to_categorical(y_train)
y_valid = to_categorical(y_valid)

#5개씩만 출력
print(y_train[:5])
print(y_valid[:5])

from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Activation

# 모델을 준비한다.
model = Sequential()

# 입력 변수의 개수가 4이고 출력 개수가 3
model.add(Dense(3, input_dim=4, activation='softmax'))

# Loss funtion과 Optimizer를 선택한다.
model.compile(loss='categorical_crossentropy', optimizer='adam',metrics=['accuracy']) 

# epochs만큼 반복
hist=model.fit(x_train, y_train, epochs=500, batch_size=20,validation_data=(x_valid, y_valid))

import matplotlib.pyplot as plt
fig, loss_ax = plt.subplots()
acc_ax = loss_ax.twinx()

loss_ax.plot(hist.history['loss'], 'y', label = 'train loss')
loss_ax.plot(hist.history['val_loss'], 'r', label = 'val loss')

acc_ax.plot(hist.history['accuracy'], 'b', label = 'train accuracy')
acc_ax.plot(hist.history['val_accuracy'], 'g', label = 'valid accuracy')

loss_ax.set_xlabel('epoch')
loss_ax.set_ylabel('loss')
acc_ax.set_ylabel('accuracy')

loss_ax.legend(loc='upper left')
acc_ax.legend(loc='lower left')

plt.show()