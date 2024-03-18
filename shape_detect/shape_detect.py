import shape_detect.controller as controller

def run_label(path):
    data_set_directory = controller.list_files(path)
    vectors = []
    for path in data_set_directory:
        norm_distances, angles, rations = controller.get_vector(path)
        vectors.append(norm_distances + rations + angles)

    controller.make_label(vectors)

