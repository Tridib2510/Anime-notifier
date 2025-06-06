from bs4 import BeautifulSoup

from datetime import datetime
from datetime import date
import pytz
import re

import requests

from datetime import datetime
from zoneinfo import ZoneInfo

from flask import Flask,jsonify

app=Flask(__name__)

url = "https://www.livechart.me/summer-2025/tv"
headers = {'User-Agent': 'Mozilla/5.0'}  # Optional but recommended to avoid being blocked
response = requests.get(url, headers=headers)
response.raise_for_status()  # Raises error if the request failed

html_content = response.text


soup = BeautifulSoup(html_content, 'html.parser')


def convert(date_str):
    try:
        date_str_clean = date_str.replace('at', '').strip()
        date_str_clean = re.sub(' +', ' ', date_str_clean)  # Replace multiple spaces with one
        # Remove timezone abbreviation (last 3 chars, e.g. "PDT")
        date_str_clean = date_str_clean[:-4].strip()
        dt_naive = datetime.strptime(date_str_clean, "%b %d, %Y %I:%M%p")
        pdt = pytz.timezone('US/Pacific')
        dt_pdt = pdt.localize(dt_naive)
        ist = pytz.timezone('Asia/Kolkata')
        dt_ist = dt_pdt.astimezone(ist)
        return str(dt_ist)
    except Exception as e:
        return None
    
def compare_CurrentTime(date_str):
    time=str(date.today())
    year=int(time[0:4])
    month=int(time[5:7])
    day=int(time[8:10])
    current_Date=f"Year: {year}, Month: {month}, Day: {day}"
    return date_str==current_Date


print(compare_CurrentTime("Year: 2025, Month: 6, Day: 6"))

articles = soup.find_all('div', class_='anime-card')
@app.route('/')
def welcome():  
        result=[]  
        for article in articles:
      # print(article.get_text(strip=True))
             classes = article.get('class', [])
             div=article.find_all('div',class_='anime-date')
             title=article.find_all('h3')[0].find_all('a')[0]
             
             for divs in div:
                 time =convert(divs.get_text(strip=True))
                 if time!=None:
                     year=int(time[0:4])
                     month=int(time[5:7])
                     day=int(time[8:10])
                     print(title.get_text(strip=True))                     
                     result.append({
                       "title": title.get_text(strip=True),
                        "Date": f"Year: {year}, Month: {month}, Day: {day}"
                       })
        print(result)
        return jsonify({"List":result})
             
      

    


if __name__=="__main__":
     app.run()