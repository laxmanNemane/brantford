import React from 'react'
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import icon from '../../../Assets/Icons/marker.png'
import L from 'leaflet'

const AdminDashboardMap = () => {

    const position = [24.182842, 78.960916];

    var markericon = L.icon({
      iconUrl: 'https://freepngimg.com/download/symbol/62766-map-symbol-computer-location-icons-free-download-png-hd.png',
      // shadowUrl: 'leaf-shadow.png',
  
      iconSize:     [40, 40], // size of the icon
      iconAnchor:   [22, 40], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -40] // point from which the popup should open relative to the iconAnchor
  });

  return (
    <div>
      <MapContainer style={{height:"500px", width:"700px"}} center={position} zoom={4.5} scrollWheelZoom={true}>
        <TileLayer 
        // icon={icon}
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

          <Marker  position={position} icon={markericon}>
            <Popup>
              This is a new co space Property <br /> In a Pune Location.
            </Popup>
          </Marker>

          <Marker  position={[19.169557, 74.454073]} icon={markericon}>
            <Popup>
              This is a new co space Property <br /> In a Pune Location.
            </Popup>
          </Marker>

          <Marker  position={[17.750518, 74.030523]} icon={markericon}>
            <Popup>
              This is a new co space Property <br /> In a Pune Location.
            </Popup>
          </Marker>

          <Marker  position={[12.851971, 77.595656]} icon={markericon}>
            <Popup>
              Bangolore Property <br /> In a Bangolore Location.
            </Popup>
          </Marker>

          <Marker  position={[13.025431, 80.214825]} icon={markericon}>
            <Popup>
              Chennai Property <br /> In a Chennai Location.
            </Popup>
          </Marker>

          <Marker  position={[23.323090, 72.338389]} icon={markericon}>
            <Popup>
              Gujarat Property <br /> In a Gujarat Location.
            </Popup>
          </Marker>
          
        </MapContainer>
    </div>
  )
}

export default AdminDashboardMap
