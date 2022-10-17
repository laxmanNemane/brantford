import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import icon from '../../../Assets/Icons/marker.png'
import L, { marker } from "leaflet";

const BaseUrl = "http://bantford.prometteur.in";

const AdminDashboardMap = () => {
  const [markers, setMarkers] = useState([]);

  const position = [24.182842, 78.960916];

  const showMarker = () => {
    axios
      .get(`${BaseUrl}/endUser/get-all-locations-spaces`)
      .then((res) => {
        console.log(res.data);
        setMarkers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var markericon = L.icon({
    iconUrl:
      "https://freepngimg.com/download/symbol/62766-map-symbol-computer-location-icons-free-download-png-hd.png",
    // shadowUrl: 'leaf-shadow.png',

    iconSize: [40, 40], // size of the icon
    iconAnchor: [22, 40], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -40], // point from which the popup should open relative to the iconAnchor
  });

  useEffect(() => {
    showMarker();
  }, []);

  return (
    <div>
      <MapContainer
        style={{ height: "500px", width: "700px" }}
        center={position}
        zoom={4.5}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {markers &&
          markers.map((item, index) => (
            <Marker key={index} position={item.location} icon={markericon}>
              <Popup>{item.space_name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default AdminDashboardMap;
