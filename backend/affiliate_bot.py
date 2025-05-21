import time, json, os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

data_dir = os.path.join(os.getcwd(), 'data')
os.makedirs(data_dir, exist_ok=True)

opts = Options()
opts.add_argument("--headless")
opts.add_argument("--disable-gpu")

driver = webdriver.Chrome(service=Service(), options=opts)
driver.get("https://example.com")
time.sleep(2)

with open(os.path.join(data_dir, 'log.json'), 'w') as f:
    json.dump({"status": "ran", "time": time.time()}, f)

driver.quit()
