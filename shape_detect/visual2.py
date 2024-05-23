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

# Data plotting
ax.scatter(x_data_pca[:, 0], x_data_pca[:, 1], x_data_pca[:, 2], c='b', marker='o')

# Set axis labels
ax.set_xlabel('PC1')
ax.set_ylabel('PC2')
ax.set_zlabel('PC3')

plt.show()
