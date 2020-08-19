import React, { Component } from "react";
import ListServices from "../ListServices";
import ListPlaces from "./ListPlaces";

class MainServices extends Component {
  state = {
    type_place: "cafe",
  };

  setType = (type) => {
    this.setState({
      type_place: type,
    });
  };

  render() {
    return (
      <div id="container">
        <div className="container page_info">
          <div className="col_md_12">
            <h1 style={{ textTransform: "uppercase" }}>
              {this.state.type_place == "" ? "All" : this.state.type_place}
            </h1>
            <p className="lead">
              You can use all Bootstrap plugins purely through the markup API
              without writing a single line of JavaScript. This is Bootstrap's
              first-class API and should be your first consideration when using
              a plugin.
            </p>
          </div>
        </div>

        <div className="container contant">
          <div className="row cont">
            <ListServices setType={this.setType} />
            <div className="col-md-9 basic">
              <div className="place_li_cont">
                <ListPlaces type={this.state.type_place} />
              </div>

              <a href="#" className="more_btn">
                Load more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainServices;
