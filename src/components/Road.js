import React, { Component } from 'react';
import MainRoad from './Road/MainRoad';

class Road extends Component {

    constructor (props) {
        super(props);
        const oriDes = this.props.match.params.id.split("&");
        const origin = oriDes[0].split(",");
        const destination = oriDes[1].split(",");
        this.state = {
            places: [
                {latitude: parseFloat(origin[0]), longitude: parseFloat(origin[1])},
                {latitude: parseFloat(destination[0]), longitude: parseFloat(destination[1])}
        ]}
    }


    render() {
        return (
            <div id="container" >
                <MainRoad defaultZoom={7} places={this.state.places} />
            </div>
        );
    }
}

export default Road;
