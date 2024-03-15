def get_norm(distances):
    #검출한 거리 정규화    
    total_dist = sum(distances)
    distances = [i/total_dist for i in distances]

    return distances

