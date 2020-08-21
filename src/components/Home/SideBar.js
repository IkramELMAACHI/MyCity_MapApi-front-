import React, { Component } from 'react'
import Profile from '../Layouts/Profile'
import Nav from '../Layouts/Nav'
import ThemeContext from "../Layouts/ThemeContext";


class SideBar extends Component {

    constructor (props) {

        super(props);
        
        this.state = {
            postion : null,
        };

        // this.getLocation = this.getLocation.bind(this);
        // this.getCoordinates = this.getCoordinates.bind(this);
        

    }


    

    render() {
        return (
            <div>
                <div className="menu-btn" style={{marginTop :'28px'}}>☰</div>
                <nav className="pushy pushy-left">
                    <Profile />
                    <Nav />
                </nav>
            </div>
        )
    }
}

export default SideBar
