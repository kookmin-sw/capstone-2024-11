import cv2
from utils import distance

def get_line(display_image, pos):
    D_LIST = [(2,14),(76,79),(71,8),(8, 12),(4,12),(6,10),(7,9)] #선분을 만들 주요 점 관계
    distances = []

    for i in range(7):
        start, end = D_LIST[i]
        cv2.line(display_image, (pos[start][0], pos[start][1]), (pos[end][0], pos[end][1]), (0, 0, 255))
        cv2.putText(display_image, "D{}".format(i + 1), (pos[start][0], pos[start][1] - 2), cv2.FONT_HERSHEY_SIMPLEX, 0.4, (0, 0, 255), 1)

        dist = distance.get_distance( (pos[start][0], pos[start][1]), (pos[end][0], pos[end][1]))
        print("D{}".format(i + 1),"'s distances is {}".format(dist), "\n" )

        distances.append(dist)
    
    return distances