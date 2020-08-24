import React, { Component } from 'react'
// import Detail from './Detail'
import ListReviews from './ListReviews'
import axios from 'axios'
import Parser from 'html-react-parser';
import { Spinner } from 'react-bootstrap';
import Images from './Images';
const RenderHTML = (props) => (<span dangerouslySetInnerHTML={{ __html: props.HTML }}></span>)

export class MainPlace extends Component {

    constructor(props) {
        super(props);
        try {
            this.day = this.state.periods.days
        }
        catch (e) {
            this.day = 'Toute la semaine';
        }
        try {
            this.opening = this.state.place.opening_hours.periods[0].open.time;
            this.closing = this.state.place.opening_hours.periods[0].close.time;

        }
        catch (e) {
            this.opening = 'No work time';
            this.closing = ' ';

        }

    }
    state = {
        place: {},
        reviews: [],
        images: [],
        types: [],
        show: false
        
    }



    componentDidMount() {

        console.log(this.props.id);
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.props.id}&key=AIzaSyDHekEJerPTA-RXrVuFMnw0YooLWfkFKXc`)
            .then(res => res.data).then((data) => {
                console.log(data);

                this.setState({
                    place: data.result,
                    reviews: data.result.reviews,
                    types: data.result.types,
                    // opening_hours : data.result.opening_hours.periods
                    show: true
                });
              
                if (data.result.opening_hours) { 
                    if (data.result.opening_hours.periods.length == 5) {
                        this.setState({
                            periods: {
                                week: false,
                                days: "lundi-vendredi",
                                hours_open: data.result.opening_hours.periods[0].open,
                                hours_close: data.result.opening_hours.periods[0].close
                            }
                        })
                        console.log('5');
                    } else if (data.result.opening_hours.periods.length == 7) {
                        this.setState({
                            periods: {
                                week: false,
                                days: "lundi-dimanche",
                                hours_open: data.result.opening_hours.periods[0].open,
                                hours_close: data.result.opening_hours.periods[0].close
                            }
                        })
                        console.log('7');


                    } else if (data.result.opening_hours.periods.length == 6) {
                        console.log('6');

                        if (data.result.opening_hours.periods[0].close == data.result.opening_hours.periods[5].close) {
                            this.setState({
                                periods: {
                                    week: false,
                                    days: "lundi-samedi",
                                    hours_open: data.result.opening_hours.periods[0].open,
                                    hours_close: data.result.opening_hours.periods[0].close
                                }
                            });
                        } else {

                            this.setState({
                                periods: {
                                    week: true,
                                    days: "lundi-vendredi",
                                    hours_open: data.result.opening_hours.periods[0].open,
                                    hours_close: data.result.opening_hours.periods[0].close,
                                    week: 'samedi',
                                    week_open: data.result.opening_hours.periods[5].open,
                                    week_close: data.result.opening_hours.periods[5].close,
                                }
                            });
                        }
                    }
                }
                console.log(this.state.place);
                console.log('data.result.photos')
                console.log(data.result.photos);

                        this.setState({ 
                            images : data.result.photos
                //  "height" : data.result.photos[1].height,
                //  "width" :  data.result.photos[1].width,
                //  "photo_reference" : data.result.photos[1].photo_reference  
                        });
            }).catch();

        var doc = new DOMParser().parseFromString(this.state.photo, "text/html")
        console.log(doc);
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(this.state.photo, 'text/xml');
        console.log(htmlDoc);
    }
 
    render() {

        return (
            <div id="container">
                <div className="container page_info">
                    <div className="col_md_12 pt-5">
                        {/* <img src={ `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${this.state.width}&photoreference=${this.state.photo_reference}`} alt />  */}
 
                        {this.state.show &&
                        <>
                                <img src={`${this.state.place.icon}`} alt />
                                <h1>{this.state.place.name}</h1>
                                {/* 
                 <RenderHTML  HTML={this.state.photo} />      
                <td>{Parser(`${this.state.photo}`)}</td>   */}
                                <ul>
                                    {this.state.types.map(type =>
                                        <li>
                                            <a href="#">{type}</a>
                                        </li>
                                    )}
                                </ul>
                            </>   
                            // <Spinner animation='grow' />
                        }

                    </div>
                </div>
                <div className="container contant">
                    <div className="row cont">
                        <div className="col-md-9 basic">
                            {this.state.show ?
                                <>
                                    <div> 
                                        <div className="icon_descr_block   ">
                                            <div className="phone_email mt-5 ">
                                                <span>
                                                    <i className="fa fa-phone" /> {this.state.place.formatted_phone_number ? this.state.place.formatted_phone_number : '0522222698'}
                                                </span>
                                                <span>
                                                    <i className="fa fa-globe" />
                                                    <a href="http://matart.ru">http://matart.ru</a>
                                                </span>
                                            </div>
                                            <div className="bubble">
                                                <div>
                                                    {this.state.place.formatted_address}
                                                </div>
                                            </div>
                                            <div className="features_block  ">
                                                <div style={{ width: '100%' }}>
                                                    <ul>
                                                        {this.state.periods ?
                                                            <>
                                                                <li>
                                                                    Ouvert: <b>{this.day}</b>
                                                                </li>
                                                                <li>
                                                                    Hours: <b> {`${this.opening}` + ' - ' + this.closing} </b>
                                                                </li>
                                                            </>
                                                            :
                                                            <>
                                                                <li>
                                                                    Ouvert: <b> lundi-vendredi </b>
                                                                </li>
                                                                <li>
                                                                    Hours: <b>  08:00-18:00 </b>
                                                                </li>
                                                            </>

                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <Detail key={this.state.place.place_id} place={this.state.place} periods = {this.state.periods} /> */}
                                    {/* <div className="reviews"> */}
                                </>
                                :
                                <div className = ' text-center p-5'>
                                    
                                     <h2> Loading Details ..... </h2>
                                </div>
                                // 
                            }
                            <Images photos = {this.state.images} />
                            <ListReviews reviews={this.state.reviews} rating={this.state.place.rating} /> 
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MainPlace
