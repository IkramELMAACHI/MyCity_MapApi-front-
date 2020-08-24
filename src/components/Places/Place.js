import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Rating from '../Layouts/Rating';

class Place extends Component {

    state = {
        favori : {
            place_id : this.props.place.place_id,
            name : this.props.place.name === undefined ? '-' : this.props.place.name,
            type : this.props.type,
            vicinity : this.props.place.vicinity === undefined ? '-' : this.props.place.vicinity,
            rating : this.props.place.rating === undefined ? '-' : this.props.place.rating,
            open_now : this.props.place.opening_hours  === undefined ? '-' : this.props.place.opening_hours.open_now,
            // photo :  this.props.place.photos === undefined ?   this.props.place.icon  :  ''
            //  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${200}&photoreference=${this.props.place.photos[0].photo_reference}&key=AIzaSyDHekEJerPTA-RXrVuFMnw0YooLWfkFKXc` ,

        },
        active : 'false'
    }

    componentDidMount(){
        this.setState({
            active : this.props.place.active
        })
        console.log('this.props.place.photos[0].photo_reference');
        // console.log(this.props.place.photos[0] )
        console.log('this.props.place' )
        console.log(this.props.photo)


    }

    handleAddFavori(){
       
        this.props.addFav(this.state.favori);
        console.log('add time');
        this.setState({
            active : !this.state.active
        })
    }

    hundleDeleteFavori(){
        this.props.delFav(this.state.favori.place_id);
        console.log('delete time');
        this.setState({
            active : 'false'
        })
    }


    render() {
        return (
            <div className="pg style_list">
            <div className="con">
                
              <img src={`${this.props.photo}`} alt />
              <div className="content_li">
              <Link to={`/services/${this.props.place.place_id}`}><h2 >  {this.props.place.name}</h2></Link>
              <span></span>
                <span>
                Adress : {this.props.place.vicinity}
                </span>
                
                <Rating rating = {this.props.place.rating} />
                 
                <button 
                    className={"m-2 btn "+ (this.state.active == 'false' ? 'btn-success' : 'btn-danger')}
                     onClick={this.state.active == 'false' ? this.handleAddFavori.bind(this) : this.hundleDeleteFavori.bind(this)}>
                        {this.state.active == 'false' ? 'Add' : 'Delete'}
                    </button>  <Link to={`/map/${this.props.coord}`}><p className='btn btn-primary ml-2'>Navigate</p></Link>
                
              </div>
            </div>
          </div>
        );
    }
}

export default Place;
