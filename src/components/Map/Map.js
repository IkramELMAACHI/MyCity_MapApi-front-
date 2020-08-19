import React, { Component, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import axios from 'axios';
import {Link} from 'react-router-dom'
const API_KEY = "AIzaSyDHekEJerPTA-RXrVuFMnw0YooLWfkFKXc"

class Map extends Component {

    constructor (props) {
        super(props);
        this.state = {
            postion : null,
            latitude: null,
            longitude: null,
            accuracy: null,
            places: []
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.Map = this.Map.bind(this);

        this.getLocation();
    }


    getLocation() {
        navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocatioError);
    }

    componentDidUpdate(prevProps){
        if (prevProps.type !== this.props.type) {
            this.getCoordinates(this.state.position);
            console.log(prevProps.type +' --> '+this.props.type);
        }
    }

    getCoordinates (position) {
        // console.log(position.coords);
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=5000&type=${this.props.type}&key=${API_KEY}`)
            .then(res => this.setState({
                position : position,
                accuracy: position.coords.accuracy,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                places: res.data.results
            }))
    }

    // getCurrentState () {
    //     return this.state.latitude
    // }

    handleLocatioError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.")
              break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
              break;
          }
    }

    Map() {
        const [selectedPlace, setSelectedPlace] = useState(null);
        return (
        <GoogleMap 
            defaultZoom={14}
            defaultCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
        >
            {
                <Marker 
                key={this.state.accuracy} 
                position={{ lat: this.state.latitude, lng: this.state.longitude }}
                icon={{
                    url: process.env.PUBLIC_URL+"/img/icon/gps.png",
                    scaledSize: new window.google.maps.Size(40, 40)
                }}
                />
            }

            {
                this.state.places.map((place) => (
                    <Marker 
                        key={place.id} 
                        position={place.geometry.location} 
                        icon={{
                            url: process.env.PUBLIC_URL+`/img/icon/${this.props.type}.svg`,
                            scaledSize: new window.google.maps.Size(35, 35)
                        }}
                        onClick={() => {
                            setSelectedPlace(place);
                        }}
                    />
                ))
            }

            {selectedPlace && (
                <InfoWindow 
                    position={selectedPlace.geometry.location} 
                    onCloseClick={() => {
                        setSelectedPlace(null);
                    }} 
                >
                    <div>
                    <Link to={`/services/${selectedPlace.place_id}`}><h2>{selectedPlace.name}</h2></Link>
                    <Link to={`/map/${this.state.latitude},${this.state.longitude}&${selectedPlace.geometry.location.lat},${selectedPlace.geometry.location.lng}`}><p className='btn btn-primary ml-2'>Navigate</p></Link>
                    
                    </div>
                </InfoWindow>
            )}
            
        </GoogleMap>
        );
    }

    render() {
        const WrappedMap = withScriptjs(withGoogleMap(this.Map));
        return (
            <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `620px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default Map;