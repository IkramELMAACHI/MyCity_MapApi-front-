import React, { useState } from 'react';
import RoadMap from './MapRoad'
import NavServices from '../Map/NavServices'
const googleMapsApiKey = "AIzaSyDHekEJerPTA-RXrVuFMnw0YooLWfkFKXc";

const MainRoad = props => {
  const {places} = props;
// const [type_service, setType] = useState('cafe')
  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;

  const mapstyle = {
      height : '90vh',
      paddingTop : '20vh'
  }
 
  

 
  return (
    <>
    <RoadMap
      googleMapURL={
        'https://maps.googleapis.com/maps/api/js?key=' +
        googleMapsApiKey +
        '&libraries=geometry,drawing,places'
      }
      markers={places}
      loadingElement={loadingElement || <div style={{height: `100%`}}/>}
      containerElement={containerElement || <div style={mapstyle}/>}
      mapElement={mapElement || <div style={{height: `100%`}}/>}
      defaultCenter={defaultCenter || {lat: 25.798939, lng: -80.291409}}
      defaultZoom={defaultZoom || 11}
    />
      <NavServices 
      // setType={ () => setType(type_service) } 
      />
</>
  );
};

export default MainRoad;
