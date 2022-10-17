import React from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";


const Example = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoibmlraGlsYm9yZ2UiLCJhIjoiY2w4Y296eXBwMDR6ajN1bXltb2cxOXoyeCJ9.DgZ7KWKaUNJDltG3weSwEw';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-77.034084, 38.909671],
    zoom: 13,
    scrollZoom: false
});

  return (
    <div>
      <div class="sidebar">
        <div class="heading">
          <h1>Our locations</h1>
        </div>
        <div id="listings" class="listings"></div>
      </div>
      <div id="map" class="map"></div>
    </div>
  );
};

export default Example;
