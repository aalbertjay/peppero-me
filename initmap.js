/*Creates the map using the Google Maps API*/
function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.8977, lng: 77.0365},
      zoom: 18,
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
      },
      streetViewControl: false,
    });
	map.setOptions({minZoom:6});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(pos);

      }, function() {
        handleLocationError(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false);
    }

      document.getElementById('submit').addEventListener('click', function() {
         findStores(map, davidHsu);
      });

}

function getPizzaLocations(allPizzas) {
   allPizzas.foreach(function(entry) {
      dropPizza(entry);
   });
}

//*Drops a pizza marker on the map at the specified location*/
function dropPizza(pos) {
  var pizza = 'images/pizza.png';
  var timestamp = new Date().getTime();
  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    timestamp: timestamp,
    animation: google.maps.Animation.DROP,
    title: 'Itza Pizza!',
    icon: pizzza,
  });
}
