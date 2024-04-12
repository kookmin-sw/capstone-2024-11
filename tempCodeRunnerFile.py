import glob
import matplotlib.pyplot as plt
import os
from PIL import Image
# 이미지까지의 경로
pth_to_imgs = "./gan/train/kazuha"
imgs = glob.glob(os.path.join(pth_to_imgs, "*"))
# 9개의 이미지를 보여줌
for i in range(9):
   plt.subplot(3, 3, i+1)
   img = Image.open(imgs[i])
   plt.imshow(img)
plt.show()