import torch
import numpy as np
import pandas as pd
from xgboost import XGBClassifier

class PersonalColorModel:
    def __init__(self, dataset) -> None:
        self.model = XGBClassifier(silent=1)
        self.df = dataset

    def train(self, train_x, train_y):
        self.model.fit(train_x, train_y)

    def test(self, test_x, test_y):
        pass

