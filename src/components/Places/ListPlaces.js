import React, { Component } from "react";
import Place from "./Place";
import axios from 'axios'

class ListPlaces extends Component {


    state = {
        places: [],
        favoris: [],
        token: localStorage.usertoken,
        latitude : localStorage.latitude,
        longitude : localStorage.longitude,
        accuracy : localStorage.accuracy
    
      }
    
      param = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.state.token}`
        }
      }
    
    
    
      componentDidMount() {
    

        this.getFavoriList();
    
        this.getPlaceList();
    
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
    
          this.getPlaceList();
        }
      }
    
    
      getFavoriList = () => {
        axios.get(`http://127.0.0.1:8000/api/favoris/`, this.param)
          .then(res => res.data).then((data) => {
           
    
            this.setState({
              favoris: data.success.data
            });
          }).catch();
      }
    
    
      getPlaceList = () => {
    
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.latitude},${this.state.longitude}&radius=3000&type=${this.props.type}&key=AIzaSyDHekEJerPTA-RXrVuFMnw0YooLWfkFKXc&pagetoken=`)
          .then(res => res.data).then((data) => {
    
            console.log(this.state.favoris);
            let favlis = this.state.favoris;
            let upPlaces = data.results;
    
            upPlaces.forEach(function (element) {
    
              if (favlis.find(fav => fav.place_id === element.place_id)) {
                element.active = "true";
              } else {
                element.active = "false";
              }
    
            });
    
            this.setState({
              places: upPlaces
            });
    
            
          }).catch();
    
    
    
      }
    
    
    
      addFavori(data) {
        axios({
          headers: this.param.headers,
          method: 'POST',
          url: 'http://127.0.0.1:8000/api/favoris/',
          data: data
        }).then((res) => {
    
          console.log(res.data);
    
          this.setState({ favoris: [...this.state.favoris, res.data] });
    
    
        }).catch((err) => {
          console.log(err);
        });
    
    
      }
    
      deleteFavori(place_id){
    
        
        const favori = this.state.favoris.find(fav => place_id === fav.place_id);
        const id = favori.id;
        console.log(id);
        axios.delete(`http://127.0.0.1:8000/api/favoris/${id}`, this.param
        )
          .then(res => res.data).then((data) => {
            console.log(data);
          }).catch();
    
        const filtredFavories = this.state.favoris.filter(favori => favori.id !== id);
        this.setState({
          favoris: filtredFavories
        });
      }


  render() {
    return this.state.places.map((place) => (
        <Place key={place.id} place={place} type={this.props.type} addFav={this.addFavori.bind(this)} delFav={this.deleteFavori.bind(this)} coord={'33.5837928,-7.5247012999999985&'+place.geometry.location.lat+','+place.geometry.location.lng} />
      ));
  }
}

export default ListPlaces;
