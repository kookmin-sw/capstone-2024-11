import pandas as pd
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from sklearn.manifold import TSNE

data = pd.read_csv('train.csv')
print(data.head())

# 20차원 데이터를 3차원으로 축소
tsne = TSNE(n_components=3, random_state=42)
tsne_data = tsne.fit_transform(data.drop('shape', axis=1))

# 3차원 시각화
fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')

# 각 shape 값에 따라 다른 색상 사용하여 시각화
shapes = data['shape'].unique()
colors = ['r','g','b']
for shape, color in zip(shapes, colors):
    indices = data['shape'] == shape
    ax.scatter(tsne_data[indices, 0], tsne_data[indices, 1], tsne_data[indices, 2], c=color, label=shape, marker='o')

ax.set_xlabel('Dimension 1')
ax.set_ylabel('Dimension 2')
ax.set_zlabel('Dimension 3')
plt.title('t-SNE Visualization of 20-Dimensional Data')
plt.legend()
plt.show()
