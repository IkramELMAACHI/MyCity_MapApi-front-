import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Place extends Component {

    state = {
        favori : {
            place_id : this.props.place.place_id,
            name : this.props.place.name === undefined ? '-' : this.props.place.name,
            type : this.props.type,
            vicinity : this.props.place.vicinity === undefined ? '-' : this.props.place.vicinity,
            rating : this.props.place.rating === undefined ? '-' : this.props.place.rating,
            open_now : this.props.place.opening_hours  === undefined ? '-' : this.props.place.opening_hours.open_now
        },
        active : 'false'
    }

    componentDidMount(){
        this.setState({
            active : this.props.place.active
        })
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
              <img src="img/pl3.jpg" alt />
              <div className="content_li">
              <Link to={`/services/${this.props.place.place_id}`}><h2 >Title : {this.props.place.name}</h2></Link>
              <span></span>
                <span>
                Adress : {this.props.place.vicinity}
                </span>
                <span>
                rating : {this.props.place.rating}
                </span>
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
