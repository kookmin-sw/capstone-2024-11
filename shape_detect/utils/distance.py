def get_distance(start, end):
    x1, x2 = start[0], end[0]
    y1, y2 = start[1], end[1]

    X = (x1 - x2) ** 2 
    Y = (y1 - y2) ** 2

    return round((X+Y) ** (1/2), 2)