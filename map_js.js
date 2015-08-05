var map = L.map('map').setView([23.886996, 90.408819], 17);

    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',  {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
    }).addTo(map);


    //Define functions to put in pop-up call
    function onEachFeatureHouse(feature, layer){
      if (feature.properties) {
        layer.bindPopup("Household ID: <b>" + feature.properties.Household_ID +"</b>");
      }
    }

     function onEachFeatureWater(feature, layer){
      if (feature.properties) {
        layer.bindPopup("Name: <b>" + feature.properties.Name + "</b><br /> Pump ID: <b>" + feature.properties.Pump_ID + '</b>');
      }
    }

    var houseMarkerOptions = {
      radius: 5,
      fillOpacity: 0.7
    };
    var waterMarkerOptions = {
      radius: 10,
      color: 'red',
      fillOpacity: 0.7
    };

    var houses = new L.geoJson(houses_geo, {
      onEachFeature: onEachFeatureHouse,
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, houseMarkerOptions);
      }
    })
    .addTo(map);

    var water = new L.geoJson(water_geo, {
      onEachFeature:onEachFeatureWater,
      pointToLayer: function(feature, latlng){
        return L.circleMarker(latlng, waterMarkerOptions);
      }
    })
    .addTo(map);

    L.control.fullscreen().addTo(map);