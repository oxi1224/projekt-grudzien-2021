
// Initialize and add the map
function initMap() {
    const loc = { lat: -37.822857, lng: 144.968412 };
    // Center the map at given coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: loc,
    });
    // Set the marker
    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
  }
  
