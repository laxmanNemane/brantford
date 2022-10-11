import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from '../../../Assets/Icons/marker.png'

const BaseUrl="http://bantford.prometteur.in";

const MapInput = (props) => {
  const [coords, setCoords] = useState([]);
  // const [position, setPosition] = useState([18.332627, 73.900590])
  const [lan, setLan] = useState()
  const [lon, setLon] = useState()

    const getCoordinates = () =>{
        axios.get(`${BaseUrl}/admin/get-location?spaceId=${props.id}`)
        .then((res)=> {
          // setCoords(res.data)
          setCoords([{ "lat":res.data.latitude, "lon":res.data.longitude}])
          console.log(res.data)
          setLan(res.data.latitude)
          setLon(res.data.longitude)

          console.log(res.data.latitude,res.data.longitude)
          // setPosition([res.data.latitude,res.data.longitude])
        })
        .catch((err)=> {console.log(err)})
    }


  const defaultposition = [18.332627, 73.900590];
  console.log(coords);

  useEffect(()=>{
    getCoordinates();
  },[])

  return (
    <div>
        <h3>This is a map Input</h3>
      <div >
      {coords && coords.map((item,index)=> (

        <MapContainer style={{height:"500px", width:"700px"}} center={[item.lat, item.lon]} zoom={7} scrollWheelZoom={true}>
        <TileLayer icon={icon}
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />







  <Marker key={index}  position={[item.lat, item.lon]} >
  <Popup>
    This is a new co space Property <br /> In a Pune Maharashtra Location.
  </Popup>
  </Marker>






  

          

        </MapContainer>
        ))}
      </div>
    </div>
  );
};

export default MapInput;
