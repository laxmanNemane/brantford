import React from 'react'
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import icon from '../../../Assets/Icons/marker.png'

const AdminDashboardMap = () => {

    const position = [24.182842, 78.960916];
  return (
    <div>
      <MapContainer style={{height:"500px", width:"700px"}} center={position} zoom={4.5} scrollWheelZoom={true}>
        <TileLayer 
        // icon={icon}
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

          <Marker  position={position} >
            <Popup>
              This is a new co space Property <br /> In a Pune Location.
            </Popup>
          </Marker>

          <Marker  position={[19.169557, 74.454073]} >
            <Popup>
              This is a new co space Property <br /> In a Pune Location.
            </Popup>
          </Marker>

          <Marker  position={[17.750518, 74.030523]} >
            <Popup>
              This is a new co space Property <br /> In a Pune Location.
            </Popup>
          </Marker>

          <Marker  position={[12.851971, 77.595656]} >
            <Popup>
              Bangolore Property <br /> In a Bangolore Location.
            </Popup>
          </Marker>

          <Marker  position={[13.025431, 80.214825]} >
            <Popup>
              Chennai Property <br /> In a Chennai Location.
            </Popup>
          </Marker>

          <Marker  position={[23.323090, 72.338389]} >
            <Popup>
              Gujarat Property <br /> In a Gujarat Location.
            </Popup>
          </Marker>
          
        </MapContainer>
    </div>
  )
}

export default AdminDashboardMap
