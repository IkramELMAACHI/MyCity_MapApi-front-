import React, { Component } from 'react';

class Favorie extends Component {

    hundleDeleteFavori() {
        this.props.deleteFavori(this.props.favori.id);

    }

    render() {
        return (
            <div className="pg style_two" style={{ border: '1px solid #fff' }}>
                <div className="p_cont ">

                    <h2>{this.props.favori.name}<span></span></h2>
                    
                    <h4>
                        Adress: {this.props.favori.vicinity}
                    </h4>
                    <h4>
                        Rating: {this.props.favori.rating}
                    </h4>
                    <h4>
                        open_now: {this.props.favori.open_now ==  0 ? 'close' : ''}{this.props.favori.open_now == 1 ? 'open' : ''}
                    </h4>
                    <button className='btn btn-danger' onClick={this.hundleDeleteFavori.bind(this)}>
                        Delete
                    </button>
                </div>

            </div>
        );
    }
}

export default Favorie;
