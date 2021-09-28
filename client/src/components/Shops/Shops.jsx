import React, {useState} from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';

const libraries = ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '80vh'
}
const center = {
  lat: 43.6532,
  lng: -79.3832
}
const options = {
  disableDefaultUI: true,
  zoomControl: true
}

export default function Shops() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  
  return (
    <div>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={15} 
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  )
}

// export default { React.memo(MyComponent), Shops }
 