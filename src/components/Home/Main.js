import React from "react";

class main extends React.Component {
  render() {
    return (
      <div className="start_descrition" style = {{vh : '60%'}}>
        <h1>
          welcome to my city guide!
          <span />
        </h1>
        <span>
          See and visit interesting places. Share experiences with your friends.
          Simply.
        </span>
        <div className="search_promo">
          <div className="input-group">
            <input type="text" className="form-control" aria-label="..." />
            <div className="input-group-btn btn_cat">
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <i className="fa fa-shopping-cart" />
                  Market
                  <span className="caret" />
                </span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-right place_dd"
                role="menu"
              >
                <li>
                  <a href="01.html" className="cinema">
                    <i className="fa fa-film" />
                    Cinema
                  </a>
                </li>
                <li>
                  <a href="01.html" className="club">
                    <i className="fa fa-beer" />
                    Club
                  </a>
                </li>
                <li>
                  <a href="01.html" className="cafe">
                    <i className="fa fa-cutlery" />
                    Cafe
                  </a>
                </li>
                <li>
                  <a href="01.html" className="sport">
                    <i className="fa fa-futbol-o" />
                    Sport
                  </a>
                </li>
                <li>
                  <a href="01.html" className="port">
                    <i className="fa fa-life-ring" />
                    Port
                  </a>
                </li>
                <li>
                  <a href="01.html" className="bank">
                    <i className="fa fa-university" />
                    Bank
                  </a>
                </li>
                <li>
                  <a href="01.html" className="post">
                    <i className="fa fa-envelope-o" />
                    Post
                  </a>
                </li>
                <li>
                  <a href="01.html" className="showplace">
                    <i className="fa fa-eye" />
                    Showplace
                  </a>
                </li>
                <li>
                  <a href="01.html" className="park">
                    <i className="fa fa-leaf" />
                    Park
                  </a>
                </li>
              </ul>
            </div>
            <div className="input-group-btn btn_promo_search">
              <button type="button" className="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default main;
