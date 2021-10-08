import React from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

import Search from "./Search";
import Navbar from "../Navbar";
import useApplicationData from "../../useApplicationData";
import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";

const libraries = ["places"];

const mapContainerStyle = {
  width: "90vw",
  height: "80vh",
  marginLeft: "6.5em",
  marginTop: "3em",
  border: "1px solid white"
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Shops() {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));

  //login
  const { auth, user, logout } = useContext(authContext);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCOyqdA8P_YF6V0Kvfkn_XURrQoR5xT5bM",
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <Navbar auth={auth} user={user} logout={logout} />
      <Search panTo={panTo} />

        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          options={options}
          onClick={(event) => {
            setMarkers((current) => [
              ...current,
              {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
              },
            ]);
          }}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
        </GoogleMap>

    </div>
  );
}
