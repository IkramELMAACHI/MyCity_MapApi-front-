import React, { Component } from 'react';
import axios from 'axios'
import Favorie from './Favorie';
class ListFavories extends Component {

    state = {
        favoris: [],
        token : localStorage.usertoken
      }

      componentDidMount (){
        
        this.getFavoriList();
    }

    componentDidUpdate(prevProps){
        if (prevProps.type !== this.props.type) {

            this.getFavoriList();
        }
    }

    param = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.state.token}`
        }
    }

    getFavoriList = () =>{
        axios.get(`http://127.0.0.1:8000/api/favoris/?type=${this.props.type}`,this.param
        )
        .then(res => res.data).then((data) =>{
          console.log(data.success);
          this.setState({
            favoris : data.success.data
          })
        } ).catch();
    }

    deleteFavori = (id) =>{
        axios.delete(`http://127.0.0.1:8000/api/favoris/${id}`,this.param
        )
        .then(res => res.data).then((data) =>{
          console.log(data);
        } ).catch();

        const filtredFavories = this.state.favoris.filter(favori => favori.id !== id);
        this.setState({
            favoris : filtredFavories
        });
    }


    render() {
        return this.state.favoris.map((favori) => (
            <Favorie key={favori.id} favori={favori} deleteFavori={this.deleteFavori}/>
            )
        );
    }
}

export default ListFavories;
