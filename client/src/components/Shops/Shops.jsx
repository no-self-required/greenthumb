import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';

import Search from './Search';

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

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(15);
  }, [])

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  
  return (
    <div>

      <Search panTo={panTo}/>

      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={15} 
        center={center}
        options={options}
        onLoad={onMapLoad}
      ></GoogleMap>
    </div>
  )
}
