// setup map
L.mapbox.accessToken = 'pk.eyJ1IjoiaGsyMyIsImEiOiJjaWg2dDRmOXAwNmNpdWtrdDRvdW1xdzI2In0.F9uULd8DhCkRGltilPPZbg';
var map = L.mapbox.map('map', 'hk23.nbo25l5e');
var hash = L.hash(map);

var CONFIG = {
  baseURL: window.location.protocol + '//' + window.location.host
};
