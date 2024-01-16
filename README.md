##  Module 15 Challenge
* Project Name: Leaflet_challenge
* Submitted by:  Michael Jardinico
* Date Submitted: Jan 15, 2024

### Project Overview
`The primary objective of this project is to create a visualization map of the earthquake data from the United States Geological Survey (USGS) using the coordinates (longitute, latitude) of the geoJSON dataset that updates every 5 minutes. `

![USGS Map of Earthquake](https://github.com/mjardinico/leaflet-challenge/blob/main/Leaflet-Part-1/Images/BasicMap2.png) 


### Working Files
1. `/Leaflet-Part-1/index.html`
2. `/Leaflet-Part-1/static/css/style.css`
3. `/Leaflet-Part-1/static/js/logic.js`
    
### Instructions
1. GitHub Repository Setup:
    - Create a GitHub repository called `leaflet-challenge`.
    - Clone the repository to your local computer using Git.

2. File Organization: 
    - Create a directory called `Leaflet-Part-1` in your local repository.
    - Download the starter files from [Starter_Code](https://github.com/mjardinico/leaflet-challenge/tree/main/Resources) and copy them into the `Leaflet-Part-1` directory.

3. HTML Setup:
    - In the Leaflet-Part-1 directory, create an index.html file.
    - Edit the index.html file to include the necessary HTML structure.
    - Include the Leaflet CSS file in the `<head>` section, and add the Leaflet JavaScript file after the CSS file. You can refer to the [Leaflet.js quick startup guide](https://leafletjs.com/examples/quick-start/) for guidance.

4. Data Retrieval:
    - Visit the [USGS GeoJSON Feed page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to choose a dataset for visualization.
    - Use the selected dataset's URL as input to the D3.js library to pull the data. This data retrieval and parsing can be handled in a JavaScript file, e.g., `logic.js`, which should be placed in the `/static/js` directory.

5. Mapping Data:
    - Create a Leaflet map instance in your JavaScript file, and set its initial view coordinates.
    - Loop through the GeoJSON data and extract latitude and longitude information from `feature.geometry.coordinates[1]` and `feature.geometry.coordinates[0]`.
    - Create circle markers on the map using Leaflet's `L.circleMarker` function. The radius of the circles can be determined based on the earthquake magnitude from `var magnitude = feature.properties.mag`.

6. Popups:
    - For each circle marker, create a popup that displays place information. You can use Leaflet's `bindPopup` method.
    - Implement mouseover and mouseout event functions to control when the popups appear and disappear.

7. Color Coding by Depth:
    - Create a function called `getColor(depth)` that assigns a color based on the depth of the earthquake. The depth information can be obtained from `var depth = feature.geometry.coordinates[2]`.
    - You can define a color scale or range based on preset values and use this function to assign colors to the circle markers.

8. Depth Legend:
    - Create a legend for the earthquake depths with their preset values.
    - This legend can be created as an HTML element, and you can style it as needed.
    - Add the legend to the map using Leaflet's `L.control()` or by directly appending it to the HTML document. In this code, it was added to the HTML using CSS. Refer to `/static/style.css`
    
    ![Depth Legend](https://github.com/mjardinico/leaflet-challenge/blob/main/Leaflet-Part-1/Images/depth_legend.png).


### Reference
1. [USGS GeoJSON Feed page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)


