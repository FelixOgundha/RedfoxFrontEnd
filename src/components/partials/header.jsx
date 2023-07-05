import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Header() {
  return (
    <header>

      <marquee width="100%" direction="left" style={{ backgroundColor: "#800000", color: "white" }}>
        <p style={{ padding: 0, margin: 0, color: "white" }} className='py-1'>
          <strong>
            Welcome to Dhe Jomel Hotel, Your Home away from Home. Call 0718 627 569 to talk to our customer service representative or  0774 627 569
          </strong>
        </p>
      </marquee>

      <div class="header-area header-sticky">
        <div class="main-header ">
          <div class="container">
            <div class="row align-items-center">

              <div class="col-xl-2 col-lg-2">
                <div class="logo">
                  {/* <!-- <a href="#"><img src="assets/img/logo/logo.png" alt=""></a> --> */}
                  <h2>DheJomel</h2>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8">

                <div class="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        {/* <NavLink exact to="/front" activeClassName="active">
                          Home
                        </NavLink> */}
                        <a href="/front">Home</a>
                      </li>
                      <li>
                        <NavLink exact to="/rooms" activeClassName="active">
                          Rooms
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/services" activeClassName="active">
                          Our Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/contact" activeClassName="active">
                          Contacts
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2">

                <div class="header-btn">
                  <a href="#" class="btn btn1 d-none d-lg-block " style={{ backgroundColor: "rgb(128, 0, 0)", color: "white", fontWeight: "" }}>Book Online</a>
                </div>
              </div>

              <div class="col-12">
                {/* <!-- <div class="mobile_menu d-block d-lg-none">
                  </div> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header