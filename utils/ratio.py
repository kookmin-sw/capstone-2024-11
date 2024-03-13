def get_ratio(distances):
    rations = []

    #Ratio R(i)검출
    rations.append(distances[1] /distances[0])
    rations.append(distances[0] / distances[2])
    rations.append(distances[1] / distances[2])
    rations.append(distances[0] / distances[4])
    rations.append(distances[5] / distances[4])
    rations.append(distances[3] / distances[5])
    rations.append(distances[5] / distances[0])
    rations.append(distances[4] / distances[1])
    rations.append(distances[3] / distances[4])
    rations.append(distances[6] / distances[5])
    print("distances: ", distances, "\n")
    print("Ratio: ", rations, "\n")

    return rations