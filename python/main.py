import json
from datetime import datetime

data = {
    "message": "Hello from Python!",
    "timestamp": datetime.now().isoformat()
}

with open("python/output.json", "w") as f:
    json.dump(data, f, indent=2)

print("Python script executed and data saved to output.json")
