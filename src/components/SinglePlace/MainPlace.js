import React, { Component } from 'react'
import Detail from './Detail'
import ListReviews from './ListReviews'
import axios from 'axios'


export class MainPlace extends Component {


    state = {
        place: {},
        reviews: [],
        image : ''
    }



    componentDidMount() {
        
        console.log(this.props.id);
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.props.id}&key=AIzaSyDHekEJerPTA-RXrVuFMnw0YooLWfkFKXc`)
            .then(res => res.data).then((data) => {
                console.log(data);
                this.setState({
                    place: data.result,
                    reviews: data.result.reviews
                });

            }).catch();

    }

    render() {

        return (
            <div id="container">
                <div className="container page_info">
                <div className="col_md_12">
                    <img src="img/c_logo.jpg" alt />
                    <h1>{this.state.place.name}</h1>
                    <ul>
                        <li>
                            <a href="#">Coffee shop</a>
                        </li>
                        <li>
                            <a href="#">Gourment shop</a>
                        </li>
                        <li>
                            <a href="#">Cafe</a>
                        </li>
                    </ul>
                </div>
            </div>
                <div className="container contant">
                    <div className="row cont">


                        <div className="col-md-9 basic">

                            <Detail key={this.state.place.place_id} place={this.state.place} />
                            <div className="reviews">
                                <h1>- Reviews -</h1>
                                <ListReviews reviews={this.state.place.reviews} />
                            </div>
                        </div>
                    </div>

                </div>
                </div>
        )
    }
}

export default MainPlace
