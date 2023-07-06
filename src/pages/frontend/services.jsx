import React from 'react'
import Header from '../../components/partials/header'
import Footer from '../../components/partials/footer'
import conference from '../../assets/images/sample/conference.jpeg'
import drinks from '../../assets/images/sample/drinks.jpeg'

const Services = () => {
  return (
    <div>
      <Header />

      <main>

        <div class="slider-area">
          <div class="single-slider hero-overly slider-height2 d-flex align-items-center"
            style={{ backgroundImage: "url('https://czech-kiosk.cz/wp-content/uploads/2020/05/CPI-Comfort-vestavena-recepce-z-boku-scaled.jpg')" }}
          >
            <div class="container">
              <div class="row ">
                <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                  <div class="hero-caption">
                    <span>Services</span>
                    <h2>Services</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center pt-5">
          <div class="col-xl-8">

            <div class="font-back-tittle mb-45">
              <div class="archivment-front">
                <h3>Our Facilities</h3>
              </div>
              <h3 class="archivment-back">Our Facilities</h3>
            </div>
          </div>
        </div>

        <div
          className="d-flex w-100"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <div className="illustration bg-success w-50 "
            style={{
              backgroundImage: `url(${drinks})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '650px',
            }}
          >

          </div>
          <div className="statement p-5  d-flex align-items-center w-50">
            <div class="dining-caption">
              <span>Our resturent</span>
              <h3>Dining & Drinks</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
              <a href="#" class="btn py-2" style={{ backgroundColor: "rgb(128, 0, 0)", color: "white" }}>
                <strong>Learn More <i class="ti-angle-right"></i></strong>
              </a>
            </div>
          </div>
        </div>

        <div
          className="d-flex w-100"
          style={{ backgroundColor: "white" }}
        >

          <div className="statement  d-flex align-items-center w-50">
            <div class="dining-caption p-5">
              <span>Our Conference Rooms</span>
              <h3>Conference Facility</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
              <a href="#" class="btn py-2" style={{ backgroundColor: "rgb(128, 0, 0)", color: "white" }}>
                <strong>Learn More <i class="ti-angle-right"></i></strong>
              </a>
            </div>
          </div>

          <div className="illustration bg-success w-50 "
            style={{
              backgroundImage: `url(${conference})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '650px',
            }}
          >

          </div>
        </div>




        <div class="testimonial-area t-padding">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-9 col-lg-9 col-md-9">
                <div class="h1-testimonial-active">

                  <div class="single-testimonial pt-65">

                    <div class="font-back-tittle mb-105">
                      <div class="archivment-front">
                        <img src="assets/img/logo/testimonial.png" alt="" />
                      </div>
                      <h3 class="archivment-back">Testimonial</h3>
                    </div>

                    <div class="testimonial-caption text-center">
                      <p>Yorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi.
                      </p>

                      <div class="testimonial-ratting">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="rattiong-caption">
                        <span>Clifford Frazier, <span>Regular Client</span> </span>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="gallery-area fix">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-md-12">
                <div class="gallery-active owl-carousel">
                  <div class="gallery-img">
                    <a href="#"><img src="assets/img/gallery/gallery1.jpg" alt="" /></a>
                  </div>
                  <div class="gallery-img">
                    <a href="#"><img src="assets/img/gallery/gallery2.jpg" alt="" /></a>
                  </div>
                  <div class="gallery-img">
                    <a href="#"><img src="assets/img/gallery/gallery3.jpg" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default Services