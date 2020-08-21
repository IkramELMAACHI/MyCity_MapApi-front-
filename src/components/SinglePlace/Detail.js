import React, { Component } from 'react'
import axios from 'axios'

export class Detail extends Component {

    state = {
        image: ''
    }

    // componentDidUpdate(prevProps){
    //     if(this.props.place !== prevProps.place){
    //         console.log(this.props.place);
    //     }
    // }


    componentDidMount() {

        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyDHekEJerPTA-RXrVuFMnw0YooLWfkFKXc`)
            .then(res => res.data).then((data) => {


                this.setState({
                    image: data
                });
                
            }).catch();
            

    }

    render() {
        
        return (
            <div>
                {/* <div><img src={`data:image/jpeg;base64,${this.state.image}`}/></div>
                <img src={this.state.image} />
                <h1>Name : {this.props.place.name}</h1>
                <h3>Type : waiting for</h3>
                <h3>Adress : {this.props.place.formatted_address}</h3>
                <h3>Phone : {this.props.place.formatted_phone_number}</h3>
                <h3>Rating : {this.props.place.rating}</h3> */}
              <div className="phone_email">
                <span>
                  <i className="fa fa-phone" />8{this.props.place.formatted_phone_number}
                </span>
                <span>
                  <i className="fa fa-globe" />
                  <a href="http://matart.ru">http://matart.ru</a>
                </span>
              </div>
                <div className="icon_descr_block">
                <div className="cols">
                  <div className="icons id_orange">
                    <span className="ic">
                      <i className="fa fa-comments-o" />
                    </span>
                    <span className="num">1034</span>
                  </div>
                  <div className="icons id_green">
                    <span className="ic">
                      <i className="fa fa-users" />
                    </span>
                    <span className="num">1034</span>
                  </div>
                  <div className="icons id_blue">
                    <span className="ic">
                      <i className="fa fa-globe" />
                    </span>
                    <span className="num">1034</span>
                  </div>
                </div>
                <div className="bubble">
                  <div>
                  {this.props.place.formatted_address}
                    
                  </div>
                </div>
              </div>
                     <div className="features_block">
                     <div>
                       <ul>
                         <li>
                           Hours: <b>Closed until 8:00am</b>
                         </li>
                         <li>
                           Reservations: <b>No</b>
                         </li>
                         <li>
                           Menus: <b>Brunch</b>
                         </li>
                       </ul>
                     </div>
                     <div>
                       <ul>
                         <li>
                           Credit Cards: <b>Yes (incl. Visa &amp; MasterCard)</b>
                         </li>
                         <li>
                           Wi-Fi: <b>Yes</b>
                         </li>
                         <li>
                           Outdoor Seating: <b>No</b>
                         </li>
                       </ul>
                     </div>
                   </div>
                   <div className="share_block">
                   <div>
                     <a href="#" className="btn btn-success">
                       Share this place
                     </a>
                   </div>
                   <div>
                     <div>
                       <span>Total Visitors</span>
                       419 total
                     </div>
                     <div>
                       <span>Total Visitors</span>
                       419 total
                     </div>
                   </div>
                 </div>
                 <div className="check_in">
                 <div>
                   <a href="03.html">Vlad Mickh</a> likes this place. Your Swarm
                   friend <a href="03.html">Mattew</a> has checked in here.
                   <div className="users_group">
                     {/* {/user/} */}
                     <a href="03.html" className="user_avatars">
                       <div className="user_go">
                         <i className="fa fa-link" />
                       </div>
                       <img src="img/avatar/ava_3.jpg" alt />
                     </a>
 
                     <a href="03.html" className="user_avatars">
                       <div className="user_go">
                         <i className="fa fa-link" />
                       </div>
                       <img src="img/avatar/ava_4.jpg" alt />
                     </a>
                   </div>
                 </div>
               </div>
                <div className="mobile_place">
                <div className="address">
                  Mordovceva street, 6 Up on Semenovskaya, 690091, Vladivostok
                </div>
               
              </div>
              
              </div>
           
            

                
            
        )
    }
}

export default Detail
