// Create the map object
let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
});

// Add the tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Use the link to get the GeoJSON data
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"


// Create a function to normalize the intensity of color according to the value of 
// `feature.geometry.coordinates[2]` of the geoJSON dataset
function getColor(depth) {
    if (depth >= -10 && depth <= 10) {
        return '#80FF00';
    } else if (depth > 10 && depth <= 30) {
        return '#DBE579';
    } else if (depth > 30 && depth <= 50) {
        return '#FAE640';
    } else if (depth > 50 && depth <= 70) {
        return '#F6BD2F';
    } else if (depth > 70 && depth <= 90) {
        return '#F17E1A';
    } else {
        return '#F15220';
    }
};


// Getting GeoJSON data
d3.json(link).then(function(data){
    var features = data.features;

    //Creating a GeoJSON layer with the retrieved data
    features.forEach(function (feature) {
        var magnitude = feature.properties.mag;
        var radius = magnitude * 3;  //5 is just a random number. Adjust accordingly
        var depth = feature.geometry.coordinates[2];

        var circle = L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            color:'#2D4E2D',
            // fillColor: '#80FF00',
            fillColor: getColor(depth),
            opacity: 1,
            weight: 1,
            fillOpacity: 0.5,
            radius: radius,
        });
        
        // Create a popup for the place information
        var popup = L.popup().setContent(feature.properties.place);

        //Include a popup on mouseover 
        circle.on('mouseover', function (){
            this.bindPopup(popup).openPopup();
        });

        //Remove the popup on mouseout
        circle.on('mouseout', function (){
            this.closePopup();
        });

        circle.addTo(myMap);
    });
});