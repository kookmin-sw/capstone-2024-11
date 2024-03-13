from utils import angle

def get_vector(pos):
    #각도를 구하기위한 벡터
    V = []
    V.append( (pos[71][0] - pos[8][0], pos[71][1] - pos[8][1]) ) #D3
    V.append( (pos[12][0] - pos[8][0], pos[12][1] - pos[8][1]) ) #D4
    V.append( (pos[12][0] - pos[4][0], pos[12][1] - pos[4][1]) ) #D5
    V.append( (pos[10][0] - pos[8][0], pos[10][1] - pos[8][1]) ) #8-10
    print("Vector: ", V, "\n")
    return V

def get_angles(V):
    #벡터를 이용해 각도 검출
    A = []
    A.append(angle.get_angle(V[0], V[1]))
    A.append(angle.get_angle(V[0], V[3]))
    A.append(angle.get_angle(V[1], V[2]))
    print("A:", A, "\n")

    return A