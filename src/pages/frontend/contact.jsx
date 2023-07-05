import React from 'react'
import Header from '../../components/partials/header'
import Footer from '../../components/partials/footer'

const Contact = () => {
  return (
    <div>
      <Header />
      <div class="slider-area">
        <div class="single-slider hero-overly slider-height2 d-flex align-items-center"
          style={{ backgroundImage: "url('https://www.agrifoodeconomics.com/wp-content/uploads/2015/10/contact_us_turkey_tours.jpg')" }}
          data-background="">
          <div class=" container">
            <div class="row ">
              <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                <div class="hero-caption">
                  <span>Contact</span>
                  <h2>Contact</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section class="contact-section">
        <div class="container">

          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Visit Dhe Jomels Today</h2>
            </div>
            <div class="col-lg-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.264243703094!2d34.277281680936575!3d0.060976054871298854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177fe30c09cc3f9d%3A0x163f0cf601111d47!2sDhe%20Jomels%20Hotel%20Siaya!5e0!3m2!1sen!2ske!4v1688120278558!5m2!1sen!2ske"
                width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>


            </div>
            <div class="col-lg-3 offset-lg-1">
              <div class="media contact-info">
                <span class="contact-info__icon"><i class="ti-home"></i></span>
                <div class="media-body">
                  <h3>Siaya County,Siaya Town,</h3>
                  <p>along Rabango Road, Next to CDF office</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                <div class="media-body">
                  <h3>+254 718 627 569</h3>
                  <p>Open 24/7</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon"><i class="ti-email"></i></span>
                <div class="media-body">
                  <h3>booking@dhejomel.co.ke
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact