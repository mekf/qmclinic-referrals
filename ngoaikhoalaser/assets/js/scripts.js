var map;
var marker;
var infoWindow = new google.maps.InfoWindow();

function initialise() {
  loadMap();
  loadMarker();
}

function loadMap() {
  var locationsLatLng = new google.maps.LatLng(10.809501, 106.678448);

  var mapOptions = {
    center: locationsLatLng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function loadMarker() {
  var markerLocation = new google.maps.LatLng(10.807783, 106.678684, true);
  var markerOptions = {
    map: map,
    position: markerLocation
  };

  marker = new google.maps.Marker(markerOptions);

  var infoContent = '<b>' + 'Quang Minh Clinic - Trung Tâm Laser Y Học' + '</b>' +
    '<br/>' + '736A Nguyễn Kiệm' +
    '<br/>' + 'Phường 4' +
    '<br/>' + 'Quận Phú Nhuận - TP. Hồ Chí Minh' +
    '<br/>' + '(08) 3-997-4945' +
    '<br/>' + '<a href="mailto:info@quangminhclinic.com">info@quangminhclinic.com</a>';

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(infoContent);
    infoWindow.open(map, marker);
  });
}