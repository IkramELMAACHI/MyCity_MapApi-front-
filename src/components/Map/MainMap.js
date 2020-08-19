import React, { Component } from 'react'
import Map from './Map'
import NavServices from './NavServices'

export class MainMap extends Component {

    state = {
        type_service : 'cafe'
    }

    setType(type){
        this.setState ({
            type_service : type
        })
        
    }

    render() {
        return (
            <div >
                <Map type={this.state.type_service}/>
                <NavServices setType={this.setType.bind(this)} />
            </div>
        )
    }
}

export default MainMap
