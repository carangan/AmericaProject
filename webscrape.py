from bs4 import BeautifulSoup
import requests
import csv

url = 'https://www.numbeo.com/cost-of-living/country_result.jsp?country=United+States'

source = requests.get(url).text

soup = BeautifulSoup(source, 'lxml')
table = soup.find('table', id='t2')
tableBody = table.tbody

with open('webscrape.csv', 'w', newline='') as outfile:
    csv_writer = csv.writer(outfile)

    csv_writer.writerow(
        ['city_name', 'costOfLivingIndex', 'rentIndex',
         'colPlusRentIndex', 'groceriesIndex', 'restaurantIndex',
         'pppIndex'])

    for row in tableBody.find_all('tr'):
        elements = row.find_all('td')

        name = elements[1].text
        costOfLivingIndex = elements[2].text
        rentIndex = elements[3].text
        colPlusRentIndex = elements[4].text
        groceriesIndex = elements[5].text
        restaurantIndex = elements[6].text
        pppIndex = elements[7].text

        csv_writer.writerow([
            name, costOfLivingIndex, rentIndex, colPlusRentIndex,
            groceriesIndex, restaurantIndex, pppIndex
        ])