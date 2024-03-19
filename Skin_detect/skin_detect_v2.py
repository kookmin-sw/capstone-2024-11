from enum import Enum
import numpy as np
import cv2
import torch
import facer

class FaceFeature(Enum):
    BACKGROUND = 0
    FACE = 1
    LEFT_EYEBROW = 2
    RIGHT_EYEBROW = 3
    LEFT_EYE = 4
    RIGHT_EYE = 5
    NOSE = 6
    TOP_LIP = 7
    TEETH = 8
    BOTTOM_LIP = 9
    HAIR = 10

def get_mask(img_path):
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    image = facer.hwc2bchw(facer.read_hwc(img_path)).to(device=device)

    face_detector = facer.face_detector('retinaface/mobilenet', device=device)

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

    return tensor

def get_feature_mask(mask, feature : FaceFeature):
    return mask[:, :, feature]

def combine_feature(channel_one, channel_two):
    return cv2.add(channel_one, channel_two)

def extract_feature(origin_img, mask):
    binary_mask = (mask >= 0.5).astype(int)

    masked_image = np.zeros_like(origin_img)
    masked_image[binary_mask == 1] = origin_img[binary_mask == 1] #visualize

    return masked_image

