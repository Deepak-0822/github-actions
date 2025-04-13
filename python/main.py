import requests
import pandas as pd
from datetime import datetime

response = requests.get("https://jsonplaceholder.typicode.com/posts")
posts = response.json()

df = pd.DataFrame(posts)
df['fetched_at'] = datetime.now().isoformat()

df.to_csv("python/posts.csv", index=False)
print("Data saved to posts.csv")
