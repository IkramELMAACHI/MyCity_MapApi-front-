import React, { Component } from "react";
import Nav from "./Layouts/Nav";
import Profile from "./Layouts/Profile";
import $ from "jquery";
import SideBar from "./Home/SideBar";
class SinglePlace extends Component {
  componentDidMount() {}

  render() {
    return (
      <div id="container">
        
        <div className="container page_info">
          <div className="col_md_12">
            <img src="img/c_logo.jpg" alt />
            <h1>Kafema Coffee Kitchen Rules</h1>
            <ul>
              <li>
                <a href="#">Coffee shop</a>
              </li>
              <li>
                <a href="#">Gourment shop</a>
              </li>
              <li>
                <a href="#">Cafe</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container contant">
          <div className="row cont">
            <div className="col-md-3 mobile_none sidebar">
              <div>
                <div className="address">
                  Mordovceva street, 6 Up on Semenovskaya, 690091, Vladivostok
                  <span />
                </div>
                <div id="map_place" className="map_place" />

                <div className="similar">
                  <h3>Similar places:</h3>
                  <div>
                    <img src="img/avatar/ava_11.jpg" alt="#" />
                    <a href="#">Eataly NYC</a>
                    <i className="fa fa-thumbs-o-up" />
                    34 likes
                  </div>
                  <div>
                    <img src="img/avatar/ava_12.jpg" alt="#" />
                    <a href="#">Cafe "Oki-Doki"</a>
                    <i className="fa fa-thumbs-o-up" />
                    123 likes
                  </div>
                  <div>
                    <img src="img/avatar/ava_13.jpg" alt="#" />
                    <a href="#">Num Pang Sandwich Shop</a>
                    <i className="fa fa-thumbs-o-up" />3 likes
                  </div>
                  <div>
                    <img src="img/avatar/ava_14.jpg" alt="#" />
                    <a href="#">Dream Downtown</a>
                    <i className="fa fa-thumbs-o-up" />
                    456 likes
                  </div>
                  <div>
                    <img src="img/avatar/ava_15.jpg" alt="#" />
                    <a href="#">Central Park</a>
                    <i className="fa fa-thumbs-o-up" />
                    698 likes
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 basic">
              <div className="header_section"></div>

              <div className="phone_email">
                <span>
                  <i className="fa fa-phone" />8 249-96-69
                </span>
                <span>
                  <i className="fa fa-globe" />
                  <a href="http://matart.ru">http://matart.ru</a>
                </span>
              </div>

              <div className="icon_descr_block">
                <div className="cols">
                  <div className="icons id_orange">
                    <span className="ic">
                      <i className="fa fa-comments-o" />
                    </span>
                    <span className="num">1034</span>
                  </div>
                  <div className="icons id_green">
                    <span className="ic">
                      <i className="fa fa-users" />
                    </span>
                    <span className="num">1034</span>
                  </div>
                  <div className="icons id_blue">
                    <span className="ic">
                      <i className="fa fa-globe" />
                    </span>
                    <span className="num">1034</span>
                  </div>
                </div>
                <div className="bubble">
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                    <span />
                  </div>
                </div>
              </div>

              <div className="features_block">
                <div>
                  <ul>
                    <li>
                      Hours: <b>Closed until 8:00am</b>
                    </li>
                    <li>
                      Reservations: <b>No</b>
                    </li>
                    <li>
                      Menus: <b>Brunch</b>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      Credit Cards: <b>Yes (incl. Visa &amp; MasterCard)</b>
                    </li>
                    <li>
                      Wi-Fi: <b>Yes</b>
                    </li>
                    <li>
                      Outdoor Seating: <b>No</b>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="share_block">
                <div>
                  <a href="#" className="btn btn-success">
                    Share this place
                  </a>
                </div>
                <div>
                  <div>
                    <span>Total Visitors</span>
                    419 total
                  </div>
                  <div>
                    <span>Total Visitors</span>
                    419 total
                  </div>
                </div>
              </div>

              <div className="check_in">
                <div>
                  <a href="03.html">Vlad Mickh</a> likes this place. Your Swarm
                  friend <a href="03.html">Mattew</a> has checked in here.
                  <div className="users_group">
                    {/*user*/}
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_3.jpg" alt />
                    </a>

                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_4.jpg" alt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mobile_place">
                <div className="address">
                  Mordovceva street, 6 Up on Semenovskaya, 690091, Vladivostok
                </div>
                <div className="similar">
                  <h3>Similar places:</h3>
                  <div>
                    <img src="img/avatar/ava_11.jpg" alt="#" />
                    <a href="#">Cafe "Oki-Doki"</a>
                    <i className="fa fa-thumbs-o-up" />
                    34 likes
                  </div>
                  <div>
                    <img src="img/avatar/ava_12.jpg" alt="#" />
                    <a href="#">Cafe "Oki-Doki"</a>
                    <i className="fa fa-thumbs-o-up" />
                    123 likes
                  </div>
                  <div>
                    <img src="img/avatar/ava_13.jpg" alt="#" />
                    <a href="#">Cafe "Oki-Doki"</a>
                    <i className="fa fa-thumbs-o-up" />3 likes
                  </div>
                  <div>
                    <img src="img/avatar/ava_14.jpg" alt="#" />
                    <a href="#">Cafe "Oki-Doki"</a>
                    <i className="fa fa-thumbs-o-up" />
                    456 likes
                  </div>
                  <div>
                    <img src="img/avatar/ava_15.jpg" alt="#" />
                    <a href="#">Cafe "Oki-Doki"</a>
                    <i className="fa fa-thumbs-o-up" />
                    698 likes
                  </div>
                </div>
              </div>

             
              <div className="reviews">
                <h4>145 Reviews:</h4>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_3.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">Get a history lesson</div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_4.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">Get a history lesson</div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_5.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">
                      Get a history lesson on possibly the world's most famous
                      beverage -- and sample Coca-Cola products from around the
                      globe! Kids will love it...Get a history lesson on
                      possibly the world's most famous beverage -- and sample
                      Coca-Cola products from around the globe! Kids will love
                      it...Get a history lesson on possibly the world's most
                      famous beverage -- and sample Coca-Cola products from
                      around the globe! Kids will love it...
                    </div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_6.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">
                      Get a history lesson on possibly the world's most famous
                      beverage
                    </div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_7.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">Get a history lesson</div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_8.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">
                      Get a history lesson on possibly the world's most famous
                      beverage -- and sample Coca-Cola products from around the
                      globe!
                    </div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_9.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">
                      Get a history lesson on possibly the world's most famous
                      beverage
                    </div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_10.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">
                      Get a history lesson on possibly the world's most famous
                      beverage -- and sample Coca-Cola products from around the
                      globe! Kids will love it...
                    </div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_11.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">
                      Get a history lesson on possibly
                    </div>
                  </div>
                </div>

                <div className="rev">
                  <div className="user">
                    <a href="03.html" className="user_avatars">
                      <div className="user_go">
                        <i className="fa fa-link" />
                      </div>
                      <img src="img/avatar/ava_12.jpg" alt />
                    </a>
                  </div>
                  <div className="texts">
                    <div className="head_rev">
                      <a href="03.html">Mattew An</a> <span>12.09.2008</span>
                    </div>
                    <div className="text_rev">
                      Get a history lesson on possibly the world's most famous
                      beverage -- and sample Coca-Cola products from around the
                      globe! Kids will love it...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePlace;
