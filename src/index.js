const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
// const iconURLs = require("./marker");

mapboxgl.accessToken =
"pk.eyJ1IjoicnhldCIsImEiOiJjamQxdmxyMjkyaTd3MnhvMTJtYm1haWptIn0.Li6AR9rxPNrk4BBNHIDdww";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker1 = buildMarker("Activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
const marker2 = buildMarker("Hotel", [-74.008596, 40.7409294]);
const marker3 = buildMarker("Restaurant", [-74.0021673, 40.7309287]);
marker1.addTo(map);
marker2.addTo(map);
marker3.addTo(map);
