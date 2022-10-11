import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import axios from "axios";
import { Form, Field } from "formik";
import { Formik } from "formik";

const MapUpdate = (props) => {
  const [latlng, setLatlng] = useState();
  const [longitude, setLongitude] = useState();
  const [position, setPosition] = useState(["19.157622", "74.517776"]);
  // const position = [latlng, longitude];
  const [map, setMap] = useState(null);

  const [coords, setCoords] = useState({});

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        console.log(e.latlng.lat);
        setLatlng(e.latlng.lat);
        setLongitude(e.latlng.lng);
        console.log(e.latlng.lng);
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return false;
  };
console.log(position);

//   location add api 
const addLocationSubmit = (values, resetForm) => {
    // axios
    //   .post(`http://bantford.prometteur.in/admin/add-location`, values, {
    //     headers: { Authorization: localStorage.getItem("token") },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    console.log(values);
    resetForm();
  };


  useEffect(() => {

    if (!map) return;

    map.on("click", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
    MapEvents();
  }, [map]);

  const { lat, lng } = coords;
  console.log(lat, lng);
  console.log(map);

  return (
    <>
      <div className="col-12 bg-light px-3 py-4  my-2">
        <h3 className="fw-bold">Location</h3>
        {/* ===============================Add Location =========================== */}
        {/* <button
          className="btn"
          onClick={() => setRecreational_Zone(!Recreational_Zone)}
          aria-controls="example-collapse-text"
          aria-expanded={Recreational_Zone}
        >
          Recreational_Zone<span className="text-danger ms-1">*</span>
        </button> */}
        <br />
        {/* <Collapse in={Recreational_Zone}> */}
        <div id="example-collapse-text ">
          <div className="px-3 ">
            <div className="row">
              <div className="col-4 py-2">
                <Formik
                  initialValues={{
                    latitude: position[0],
                    longitude: position[1],
                    spaceId: props.id,
                  }}
                  validate={(values) => {
                    let errors = {};

                    return errors;
                  }}
                  onSubmit={(values, { resetForm }) => {
                    addLocationSubmit(values, resetForm);
                  }}
                >
                  {({ values, errors }) => (
                    <Form className="">
                      <div className="formGroup">
                        <div className="row">
                          <div className="col-12">
                            <label htmlFor="Space Name" className="label">
                              Lattitude :{" "}
                            </label>
                            <Field
                              type="text"
                              name="latitude"
                              placeholder="latitude"
                              className="form-control  mb-3   "
                              value={position[0]}
                            />
                            <label htmlFor="manager_email" className="label">
                              Longitude:{" "}
                            </label>
                            <Field
                              type="text"
                              name="longitude"
                              placeholder="longitude"
                              className="form-control  mb-3 m "
                              value={position[1]}
                            />
                            

                            <button
                              type="submit "
                              className="btn-first pt-2 my-3"
                            >
                              Add New Location
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>

              <div className="col-8 py-2">
                {/* <MapInput /> */}

                <MapContainer
                  center={position}
                  zoom={7}
                  style={{ height: "90vh" }}
                  whenCreated={(map) => setMap(map)}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      This is a new co space Property <br /> In a Pune Location.
                    </Popup>
                  </Marker>

                  <MapEvents />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
        {/* </Collapse> */}
      </div>
    </>
  );
};

export default MapUpdate;
