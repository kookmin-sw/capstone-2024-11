from shape_detect.classifier.classifier import classifier

cls = classifier()
a = cls.get_knn()
b = cls.get_mlr()
c = cls.get_svm()

print(a)
print(b)
print(c)
cls.soft_vote(a, b, c)