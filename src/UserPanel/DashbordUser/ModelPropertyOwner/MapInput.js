import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from "../../../Assets/Icons/marker.png";
import L from "leaflet"

const BaseUrl = "http://bantford.prometteur.in";

const MapInput = (props) => {
  const [coords, setCoords] = useState([]);
  // const [position, setPosition] = useState([18.332627, 73.900590])
  const [lan, setLan] = useState();
  const [lon, setLon] = useState();

  const getCoordinates = () => {
    axios
      .get(`${BaseUrl}/admin/get-location?spaceId=${props.id}`)
      .then((res) => {
        // setCoords(res.data)
        setCoords([{ lat: res.data.latitude, lon: res.data.longitude,"data":props.data}]);
        console.log(res.data);
        setLan(res.data.latitude);
        setLon(res.data.longitude);

        console.log(res.data.latitude, res.data.longitude);
        // setPosition([res.data.latitude,res.data.longitude])
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const defaultposition = [18.332627, 73.90059];
  console.log(coords);


  var markericon = L.icon({
    iconUrl: 'https://freepngimg.com/download/symbol/62766-map-symbol-computer-location-icons-free-download-png-hd.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [22, 40], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -40] // point from which the popup should open relative to the iconAnchor
});


  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <div className="features-setion-offices">
      <h5 className="office-sub-heading me-4">Property Location</h5>
      <hr></hr>
      <div className="d-flex align-items-center justify-content-center">
        {coords &&
          coords.map((item, index) => (
            <MapContainer
              style={{ height: "500px", width: "700px" }}
              center={[item.lat, item.lon]}
              zoom={7}
              scrollWheelZoom={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              <Marker key={index} icon={markericon} position={[item.lat, item.lon]}>
                <Popup>
                 {item.data}
                </Popup>
              </Marker>
            </MapContainer>
          ))}
      </div>
    </div>
  );
};

export default MapInput;
