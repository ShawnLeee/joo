import requests
import json
payload = {'some': 'data'}
r = requests.post('http://127.0.0.1:8080/api/v1.0/register/', data=json.dumps(payload))