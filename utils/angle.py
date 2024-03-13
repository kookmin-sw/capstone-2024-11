import math

def get_angle(vector1, vector2):
    angle_rad = math.atan2(vector2[1], vector2[0]) - math.atan2(vector1[1], vector1[0])
    angle_deg = math.degrees(angle_rad)

    # Ensure the angle is between 0 and 360 degrees
    angle_deg = (angle_deg + 360) % 360

    return angle_deg