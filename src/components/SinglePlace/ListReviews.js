import React, { Component } from 'react'
import Rating from '../Layouts/Rating';
import { Spinner } from 'react-bootstrap';
// import Review, { review } from './review'
export class ListReviews extends Component {

    state = {
        reviews : [] ,
        show :false
    }

    componentDidUpdate(prevProps) { 
        if (this.props.reviews !== prevProps.reviews) {
            this.setState({
                reviews : this.props.reviews ,
                show :true
            });
        }
        console.log('this.props.reviews' );
        console.log(this.props.reviews );

    }

    render() {

        return (
            <div className="reviews">
         
                  {this.state.show ? 
                  <>
                  <div className="icon_descr_block">
                  <div className="cols">
                    <div className="icons id_orange">
                      <span className="ic">
                        <i className="fa fa-comments-o" />
                      </span>
                      <span className="num">{this.props && this.props.reviews && this.props.reviews.length > 0   ? this.props.reviews.length : 0   }</span>
                    </div>
                    <h1 style = {{  textAlign: 'center' ,marginTop: '40px '}}> Reviews </h1>
                    <div style = {{marginLeft : '200px'}}>
                    <Rating rating = {this.props.rating} />
                    </div>
                   
                  </div>
           
                  {/* rating : {this.props.place.rating} */}
                
             
                
                  </div>
                  <ul>
                 { this.props.reviews ? <>
                  {this.state.reviews.map((rev) => (
                          <div>  
                          <div className="rev">
                            <div className="user">
                              <a href="#" className="user_avatars">
                                <div className="user_go">
                                  <i className="fa fa-link" />
                                </div>
                                <img src={rev.profile_photo_url }/>
                              </a>
                            </div>
                            <div className="texts">
                              <div className="head_rev">
                                <a href="#"> {rev.author_name}</a> <span>{rev.relative_time_description}</span>
                              </div>
                              <div className="text_rev">{rev.text}</div>
                            </div>
                          </div> 
                          </div>
                      // <Review review={rev}/>
                  ))}
                  </>
                  :
                  <h2 className = 'text-center'>No comments</h2>}
              </ul>
                       </>           :
                                  <Spinner animation = 'border' />
                                  }      
           
            </div>
        );
    }
}

export default ListReviews
