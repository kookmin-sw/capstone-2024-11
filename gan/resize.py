from PIL import Image
import os

def resize_img(path):
    image_path = path
    image = Image.open(image_path)
    file_name = os.path.basename(path)

    # 이미지 회전 상태 확인
    orientation = 1  # 기본적으로 회전되지 않은 상태
    if hasattr(image, '_getexif'):  # Exif 정보가 있는지 확인
        exif = image._getexif()  # Exif 정보 가져오기
        if exif is not None:
            orientation = exif.get(0x0112, 1)

    # 이미지 크기 조정
    new_resolution = (1024, 1024)
    resized_image = image.resize(new_resolution)

    # 회전된 이미지 원래대로 돌리기
    if orientation in [3, 6, 8]:
        if orientation == 3:
            resized_image = resized_image.transpose(Image.ROTATE_180)
        elif orientation == 6:
            resized_image = resized_image.transpose(Image.ROTATE_270)
        elif orientation == 8:
            resized_image = resized_image.transpose(Image.ROTATE_90)

    resized_image.save(f"./input/{file_name}")
    print("조정된 이미지 경로:", f"./gan/input/{file_name}" )
    print("조정된 이미지 크기:", resized_image.size)