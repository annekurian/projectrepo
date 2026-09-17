import requests
import numpy as np

url = "http://127.0.0.1:5001/invocations"
headers = {"Content-Type": "application/json"}

payload = {
    "dataframe_split": {
        "columns": ["0", "1", "2", "3"],
        "data": [[-0.9, 1.0, -1.3, -1.3]]
    }
}

response = requests.post(url, json=payload, headers=headers)

if response.status_code == 200:
    result = response.json()
    predictions = result["predictions"][0]
    predicted_class = np.argmax(predictions)
    class_names = ["setosa", "versicolor", "virginica"]
    print("Raw probabilities:", predictions)
    print("Predicted class:", class_names[predicted_class])
else:
    print(f"Error {response.status_code}: {response.text}")