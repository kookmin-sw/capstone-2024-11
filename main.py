#%%
from shape_detect import shape_detect
from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

train_path = "./train"
test_path = "./test"

#%%
test_mask = get_mask("./test/seulgi.jpeg")
test_img = cv2.imread("./test/seulgi.jpeg")

img = cv2.cvtColor(test_img, cv2.COLOR_BGR2RGB)

face_nose_mask = combine_feature(test_mask[:, :, 1], test_mask[:, :, 6])

binary_mask = (face_nose_mask >= 0.5).astype(int)

indices = np.argwhere(binary_mask)

rgb_codes = img[indices[:, 0], indices[:, 1], :]

# %%
# kmeans 알고리즘을 통한 rgb값 검출
km = KMeans(n_clusters=20, random_state=0)
km.fit(rgb_codes)
#%%
kmean_rgb_codes = km.cluster_centers_
kmean_rgb_codes.round().astype(int)

# %%
# 랜덤으로 rgb값 추출
random_index = np.random.randint(0, rgb_codes.shape[0], 40) #randomly visualize 40 colors
random_rgb_codes = rgb_codes[random_index]

# %%
def plot_rgb(rgb_codes, n_rows, n_cols):
    fig, axes = plt.subplots(n_rows, n_cols, figsize=(10, 5))
    for i, kmean_rgb_code in enumerate(kmean_rgb_codes):
        img = np.zeros((50, 50, 3), dtype=np.uint8)
        img[:,:] = kmean_rgb_code
        row = i // n_cols
        col = i % n_cols
        axes[row, col].imshow(img)
        axes[row, col].axis('off')
        axes[row, col].set_xticks([])
        axes[row, col].set_yticks([])
    plt.tight_layout()
    plt.show()

# %%
def draw_3d_rgb(rgb_codes, colors):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    ax.scatter(rgb_codes[:, 0], rgb_codes[:, 1], rgb_codes[:, 2], c=colors, marker='o')
    ax.set_xlabel('Red')
    ax.set_ylabel('Green')
    ax.set_zlabel('Blue')
    plt.show()

#%%
new_labels = km.labels_

draw_3d_rgb(rgb_codes, new_labels)

# %%
df = pd.read_csv("./personal_color_dataset/train/data.csv")

# %%

rgb_df = make_rgb_data("./personal_color_dataset/train/data.csv", "personal_color_dataset")
# %%

# %%
