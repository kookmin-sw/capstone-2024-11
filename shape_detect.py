import controller
import pandas

train_path = "./train"
test_path = "./test"

data_set_directory = controller.list_files(test_path)

vectors = []
for path in data_set_directory:
    norm_distances, angles, rations = controller.get_vector(path)
    vectors.append(norm_distances + rations + angles)

controller.init_label(vectors)
