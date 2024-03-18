from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import pandas as pd


def mlr():
    # Load your dataset
    df = pd.read_csv("./test.csv")

    # Extract features (independent variables) and target (dependent variable)
    x = df.loc[:, "D1":"A3"]
    y = df.loc[:, "shape"]


    X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

    logreg = LogisticRegression(max_iter=3)  # Increase max_iter if needed
    logreg.fit(X_train, y_train)

    predictions = logreg.predict_proba(X_test)[0]

    return predictions