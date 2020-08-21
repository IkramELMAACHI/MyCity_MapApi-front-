import React, { Component } from 'react'

export class review extends Component {

  render() {
    return (
      // <li><img src={this.props.review.profile_photo_url} width='80px'/> <h3> Name: {this.props.review.author_name}</h3>
      // <p>Date review: {this.props.review.relative_time_description}</p>
      // <p>Review : {this.props.review.text}</p>
      //  </li>
    <div>
      
      <h4>145 Reviews:</h4>

      <div className="rev">
        <div className="user">
          <a href="03.html" className="user_avatars">
            <div className="user_go">
              <i className="fa fa-link" />
            </div>
            <img src={this.props.review.profile_photo_url }/>
          </a>
        </div>
        <div className="texts">
          <div className="head_rev">
            <a href="03.html"> {this.props.review.author_name}</a> <span>{this.props.review.relative_time_description}</span>
          </div>
          <div className="text_rev">{this.props.review.text}</div>
        </div>
      </div>

      

      </div>
      
      

     
   
                
        )
    }
}

export default review
