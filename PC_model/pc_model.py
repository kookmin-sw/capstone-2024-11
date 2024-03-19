import torch
import numpy as np
import pandas as pd
from xgboost import XGBClassifier, plot_importance
import matplotlib.pyplot as plt

class PersonalColorModel:
    def __init__(self, dataset) -> None:
        self.model = XGBClassifier(silent=1)
        self.df = dataset

    def train(self, train_x, train_y):
        self.model.fit(train_x, train_y)

    def test(self, test_x, test_y):
        pass

    def show_importance_factor(self):
        fig, ax = plt.subplots(figsize=(10, 12))
        plot_importance(self.model, ax = ax)

