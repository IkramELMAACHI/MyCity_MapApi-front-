import React, { Component } from 'react'

export default class Images extends Component {

    constructor(props) {
        super(props);
       
    }
  state = {
            photos : [] ,
            show :false
        }
        componentDidUpdate(prevProps) { 
            if (this.props.photos!== prevProps.photos) {
                this.setState({
                    photos : this.props.photos ,
                  
                });
                console.log(this.state.photos);
            // } 
    
        }
        // if (this.props.photos !== prevProps.photos) {
         
    }

    render() {
        return (
            <div>
        
  
<div className="top-content">
    <div className="container-fluid">
        <div className = '  d-flex justify-centent-between'  >
         
              
                {this.state.photos.slice(0, 4).map(photo =>
              <div className=" col-3  p-3"> 
            <img   style = {{width : '200px' , height : '200px', padding : '10px'}} src= {`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyDHekEJerPTA-RXrVuFMnw0YooLWfkFKXc`} alt=""/>
            </div>
            )}
              
                
            </div>
         
    </div>
</div>
                
            </div>
        )
    }
}
