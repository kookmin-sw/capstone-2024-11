#%%
from shape_detect import shape_detect
from Color_extract.color import *
from Skin_detect.skin_detect_v2 import *
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

train_path = "./train"
test_path = "./test"


# random_index = np.random.randint(0, rgb_codes.shape[0], 40) #randomly visualize 40 colors
# random_rgb_codes = rgb_codes[random_index]

# n_cols = 8
# n_rows = (len(random_rgb_codes) + n_cols - 1) // n_cols

# fig, axes = plt.subplots(n_rows, n_cols, figsize=(10, 5))
# for i, random_rgb_code in enumerate(random_rgb_codes):
#     img = np.zeros((50, 50, 3), dtype=np.uint8)
#     img[:,:] = random_rgb_code
#     row = i // n_cols
#     col = i % n_cols
#     axes[row, col].imshow(img)
#     axes[row, col].axis('off')
#     axes[row, col].set_xticks([])
#     axes[row, col].set_yticks([])
# plt.tight_layout()
# plt.show()

# %%
