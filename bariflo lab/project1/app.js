// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13); // Default coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Check if the browser supports geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    alert("Geolocation is not supported by your browser.");
}

// Success callback
function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // Set map view to the user's location
    map.setView([lat, lng], 13);

    // Add a marker at the user's location
    L.marker([lat, lng]).addTo(map)
        .bindPopup("You are here!")
        .openPopup();
}

// Error callback
function error() {
    alert("Unable to retrieve your location.");
}
