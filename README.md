##  Module 15 Challenge
* Project Name: Leaflet_challenge
* Submitted by:  Michael Jardinico
* Date Submitted: Jan 15, 2024

### Project Overview
`The primary objective of this project is to create a visualization map of the earthquake data from the United States Geological Survey (USGS) using the coordinates (longitute, latitude) of the geoJSON dataset that updates every 5 minutes. `

![USGS Map of Earthquake](https://github.com/mjardinico/leaflet-challenge/blob/main/Leaflet-Part-1/Images/BasicMap2.png) 

### Methodology
`The study utilized a comprehensive approach, incorporating a mix of quantitative and qualitative data. This included analysis of global pollution data, ecological studies, wildlife impact assessments, and socio-economic impacts of plastic waste. Furthermore, expert opinions, historical data trends, and future projections were also considered.`

### Working Files
1. Flask app - https://github.com/mjardinico/plastic-pollution/blob/main/app.py
2. HTML files - https://github.com/mjardinico/plastic-pollution/tree/main/templates
3. JavaScript / CSS files - https://github.com/mjardinico/plastic-pollution/tree/main/static
4. Jupyter Notebook files: 
    - https://github.com/mjardinico/plastic-pollution/blob/main/Resources/project_3_Teresa_mismanaged_waste.ipynb 
    - https://github.com/mjardinico/plastic-pollution/blob/main/folium_heatmap_marker.ipynb 
    - https://github.com/mjardinico/plastic-pollution/blob/main/Global%20Response/%23Project_3_Global%20Response_Policies_and_Analysis-Final%20copy.ipynb  


### Presentation Slides
[Link to Presentation Slides in PDF](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/Plastic_Pollution.pdf)



### Site Deployed and Hosted on Heroku:  https://plastic-pollution-1b0465c24684.herokuapp.com/ 


### Instructions
1. Open the following code to analyze about Plastic Waster being mismanaged in the Ocean using the following: [project_3_Teresa_mismanaged_waster.ipynb](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/project_3_Teresa_mismanaged_waste.ipynb) 

    ![Mismanaged Plastic Waste in Ocean Per Capita](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/mismanaged_plastic_waste_to_ocean_per_capita.png)

2. Using the above code, create a heatmap using the Python library called Folium, where the Latitude, Longitude, Measurement are the fields to be considered in the dataset `MarineMicroplastics_oceanwater.csv`.

    ![Marine Microplast in Oceanwater](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/marine_microplastics_img.png)

3. In this project, we used Google map API geocode library called GoogleV3. Refer to [geocoordinates.ipynb](https://github.com/mjardinico/plastic-pollution/blob/main/geo_coordinates.ipynb). The code's purpose is to extract the actual geolocation names of the coordinates provided in the raw dataset /`Resources/coordinates_test2.csv`. The result is used as an input dataset in the following step #4. (Note: Google Map Geocoding API is a paid service. We have disabled our API key on this code after we have extracted the desired data.)

4. Create map with markers to identify the top 1,000 locations that contribute to the plastic pollutions of river inputs around the world using Folium:  
[folium_heatmap_marker.ipynb](https://github.com/mjardinico/plastic-pollution/blob/main/folium_heatmap_marker.ipynb)
    
    <!-- ![Plastic Pollution River Input Heatmap](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/40000_locations_river_inputs.png) -->

     ![Top 1000 locations that contribute to Plastic Pollution in oceans](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/top_1000_river_inputs.png)

5. Starting here, we will create the actual Flask app and will host in Heroku: 
Create interactive charts that display years, location from a dropdown menu using JavaScript and D3.js. Refer to codes inside `/static`, `/templates` folders
    ![](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/Flask_app_img.png)


6. Enhance visualization of page using CSS file in `/static` folder. Insert JavaScript file and CSS file into HTML. 

7. Render HTML within the Flask app file `app.py`. JS and CSS files must be in static folder and HTML file must be in templates folder.

8. Using the `counter.css` in `static/` and `counter.html` in `templates/` add `<iframe>` to create the plastic bag counter being produced worldwide. 
    [Plastic Bag Counter Produced Worldwide](https://plastic-pollution-1b0465c24684.herokuapp.com/bagcounter) 

9. Using the code, `Project_3_Global Response_Policies_and_Analysis-Final copy.ipynb` to see if determine if there is a relationship between legislation types implemented and plastic waste generated. The code also includes comparison of Global Laws Database and more information of global action on plastic pollution. 
    ![Plastic Waste Global Legislation](https://github.com/mjardinico/plastic-pollution/blob/main/Resources/global_plastic_legislation.png)


### References / Credits
1. [MarineMicroplastics.geojson, MarineMicroplastics_beaches.geojson](https://www.ncei.noaa.gov/products/microplastics).
`Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. – processed by Our World in Data. “Plastic waste emitted to the ocean per capita” [plastic-pollution- Mismanaged plastic waste to ocean per capita (kg per year)]. Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. [original data].`

2. Biography: Gibson, Lydia (2020), “Country-level plastic bag legislation against plastic waste and select Human Development Indices”, Mendeley Data, V1, doi: 10.17632/wtvnv9fv44.1. 
“From Birth to Ban: A History of the Plastic Shopping Bag.” UNEP, UN Environment Programme, 20Dec.2021,www.unep.org/news-and-stories/story/birth-ban-history-plastic-shopping-bag#:~:text=2002%20%E2%80%93%20Bangladesh%20is%20the%20first,countries%20begin%20to%20follow%20suit.

3. “Global Plastic Laws.” Global Plastic Laws, 14 Oct. 2023, 
www.globalplasticlaws.org/. 
Hannah Ritchie, Veronika Samborska and Max Roser (2023) - “Plastic Pollution” Published online at OurWorldInData.org. Retrieved from: 'https://ourworldindata.org/plastic-pollution' [Online Resource]

4. Gregli-Msft. “Color Enumeration and Colorfade, ColorValue, and RGBA Functions - Power Platform.” Power Platform | Microsoft Learn, learn.microsoft.com/en-us/power-platform/power-fx/reference/function-colors. Accessed Dec. 2023. 

5. Initial Considerations Inc-1 - United Nations Environment Programme, 2023, apps1.unep.org/resolutions/uploads/briefing_-_initial_considerations_for_inc-1_2022.pdf. 

6. Jahan, A R Tahseen. “What Happened to Bangladesh’s Polythene Ban?” The Confluence, 8 Oct. 2023, theConfluence.blog/what-happened-to-bangladeshs-polythene-ban/#:~:text=However%2C%20legal%20ban%20on%20polythene,According%20to%20the%20World%20Bank. 

7. “Plastic Pollution Facts.” Plastic Pollution Coalition, 31 Aug. 2023, www.plasticpollutioncoalition.org/learn/plastic-pollution-facts. 

8. Principal Technical Advisor and Global Lead on Plastics Offer. “A Global Treaty to End Plastic Pollution Is in Sight.” UNDP, 22 Nov. 2023, www.undp.org/blog/global-treaty-end-plastic-pollution-sight. 

9. Sahoo, Soumendra Kumar. “Usage of Forward Slash (/) in Python.” DEV Community, DEV Community, 6 Dec. 2022, dev.to/soumendrak/usage-of-forward-slash-in-python-41no. 
Stoel, Geoffrey. “Why Can’t Pandas Handle Decimals for Plotting?” Stack Overflow, 1 Nov.1961,stackoverflow.com/questions/33488542/why-cant-pandas-handle-decimals-for-plotting


[def]: https://github.com/mjardinico/leaflet-challenge/blob/main/Leaflet-Part-1/Images/BasicMap2.png