// Initialize map
const map = L.map('map').setView([20, 0], 2);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

// Icon factory
function icon(file) {
  return L.icon({
    iconUrl: `icons/${file}`,
    iconSize: [32,32],
    iconAnchor: [16,32]
  });
}

// Example markers
const markers = [
  { lat: 51, lng: 0, type: 'drone', icon: 'red_drone.png', popup: 'Drone over UK' },
  { lat: 40, lng: -74, type: 'jet', icon: 'red_jet.png', popup: 'Jet intercept USA' },
  { lat: 35, lng: 139, type: 'balloon', icon: 'red_balloon.png', popup: 'Balloon Japan' }
];

// Add markers
markers.forEach(m => {
  L.marker([m.lat, m.lng], { icon: icon(m.icon) })
    .bindPopup(m.popup)
    .addTo(map);
});
