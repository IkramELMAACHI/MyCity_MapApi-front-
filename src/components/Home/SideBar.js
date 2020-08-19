import React, { Component } from 'react'
import Profile from '../Layouts/Profile'
import Nav from '../Layouts/Nav'
class SideBar extends Component {
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
