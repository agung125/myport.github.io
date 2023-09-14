function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: -6.890469, lng: 109.187726 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Desa Babakan, Kramat, Tegal' // Title Location
    });
}