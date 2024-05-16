import pandas as pd
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from sklearn.decomposition import PCA

# Load data from CSV file
data = pd.read_csv('./train.csv')

# Separate feature columns (excluding the 'shape' column)
x_data = data.drop('shape', axis=1)

# Perform PCA transformation
pca = PCA(n_components=3)
x_data_pca = pca.fit_transform(x_data)

# 3D visualization
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Define colors based on the 'shape' column
colors = {'0': 'r', '1': 'g', '2': 'b'}

# Data plotting with different colors based on 'shape'
for shape, color in colors.items():
    indices = data['shape'] == int(shape)
    ax.scatter(x_data_pca[indices, 0], x_data_pca[indices, 1], x_data_pca[indices, 2], c=color, label=f'Shape {shape}', marker='o')

# Set axis labels
ax.set_xlabel('PC1')
ax.set_ylabel('PC2')
ax.set_zlabel('PC3')

# Add legend
ax.legend()

plt.show()



# import pandas as pd
# import matplotlib.pyplot as plt
# from sklearn.manifold import TSNE

# data = pd.read_csv('train.csv')
# print(data.head())

# # 20차원 데이터를 2차원으로 축소
# tsne = TSNE(n_components=2, random_state=42)
# tsne_data = tsne.fit_transform(data.drop('shape', axis=1))

# # 2차원 시각화
# plt.figure(figsize=(8, 6))

# # 각 shape 값에 따라 다른 색상 사용하여 시각화
# shapes = data['shape'].unique()
# colors = ['r','g','b']
# for shape, color in zip(shapes, colors):
#     indices = data['shape'] == shape
#     plt.scatter(tsne_data[indices, 0], tsne_data[indices, 1], c=color, label=shape, marker='o')

# plt.xlabel('Dimension 1')
# plt.ylabel('Dimension 2')
# plt.title('t-SNE Visualization of 20-Dimensional Data')
# plt.legend()
# plt.show()
