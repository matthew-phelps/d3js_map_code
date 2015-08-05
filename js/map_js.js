var map = L.map('map').setView([23.886996, 90.408819], 17);

L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',  {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
}).addTo(map);


//Define functions to put in House layer pop-up call
function onEachFeatureHouse(feature, layer){
  if (feature.properties) {
    layer.bindPopup("Household ID: <b>" + feature.properties.Household_ID +"</b>");
  }
}

// define functions for Water-pump layer pop-up call
function onEachFeatureWater(feature, layer){
  if (feature.properties) {
    layer.bindPopup("Name: <b>" + feature.properties.Name + "</b><br /> Pump ID: <b>" + feature.properties.Pump_ID + '</b>');
  }
}

// style house circles
var houseMarkerOptions = {
  radius: 5,
  fillOpacity: 0.7
};

//style water pump circles
var waterMarkerOptions = {
  radius: 10,
  color: 'red',
  fillOpacity: 0.7
};

// add house circles to map
var houses = new L.geoJson(houses_geo, {
  onEachFeature: onEachFeatureHouse,
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, houseMarkerOptions);
  }
})
.addTo(map);

//add water circles to map
var water = new L.geoJson(water_geo, {
  onEachFeature:onEachFeatureWater,
  pointToLayer: function(feature, latlng){
    return L.circleMarker(latlng, waterMarkerOptions);
  }
})
.addTo(map);

//add full-screen support
L.control.fullscreen().addTo(map);