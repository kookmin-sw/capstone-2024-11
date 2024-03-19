import numpy as np
import cv2
import torch
import facer


def get_skin_mask(img_path):
    img = cv2.imread(img_path)
    
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    image = facer.hwc2bchw(facer.read_hwc(img_path)).to(device=device)

    face_detector = facer.face_detector('retinafce/mobilenet', device=device)

    with torch.inference_mode():
        faces = face_detector(image)

    face_parser = facer.face_parser('farl/lapa/448', device=device)

    with torch.inference_mode():
        faces = face_parser(image, faces)

    seg_logits = faces['seg']['logits']
    seg_probs = seg_logits.softmax(dim=1)

    seg_probs = seg_probs.cpu()
    tensor = seg_probs.permute(0, 2, 3, 1)
    tensor = tensor.squeeze().numpy()
    face_skin = tensor[:, :, 1]

    third_channel = tensor[:, :, 6]
    face_skin = cv2.add(face_skin, third_channel)

    binary_mask = (face_skin >= 0.5).astype(int)

    x, y = np.nonzero(binary_mask > 0)

    masked_image = np.zeros_like(img)
    masked_image[binary_mask == 1] = img[binary_mask == 1] #visualize
    
    return masked_image
