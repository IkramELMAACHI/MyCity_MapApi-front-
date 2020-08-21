import React, { Component } from "react";
import Nav from "./Layouts/Nav";
import Profile from "./Layouts/Profile";
import $ from "jquery";
import SideBar from "./Home/SideBar";
import MainPlace from "./SinglePlace/MainPlace";
class SinglePlace extends Component {
  componentDidMount() {}

  render(props) {
    console.log(this.props.match.params.id);
    return (
     <div>
        <MainPlace id={this.props.match.params.id} />
     </div>
    );
  }
}

export default SinglePlace;
