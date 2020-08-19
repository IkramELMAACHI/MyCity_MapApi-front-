import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (

            <ul className="side_menu">

              <li>
                <Link to={'/'}>
                  <i className="fa fa-bookmark-o" />
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/map'}>
                  <i className="fa fa-map-marker" />
                  Map
                </Link>
              </li>
              <li>
                <Link to={'/services'}>
                  <i className="fa fa-list" />
                  Services
                </Link>
              </li>
              <li>
                <Link to={'/place'}>
                  <i className="fa fa-list" />
                Place
                </Link>
              </li>
              <li>
                <Link to={'/favorites'}>
                  <i className="fa fa-th" />
                  Favoris
                </Link>
              </li>
              
            </ul>
        )
    }
}

export default Nav
