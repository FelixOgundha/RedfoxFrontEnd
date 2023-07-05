import React from 'react'

function Footer() {
  return (
    <footer>

      <div class="footer-area black-bg footer-padding">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-footer-caption mb-30">

                <div class="footer-logo">
                  <h2 style={{ color: "white" }}>DheJomel Hotel</h2>
                </div>
                <div class="footer-social footer-social2">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fas fa-globe"></i></a>
                  <a href="#"><i class="fab fa-behance"></i></a>
                </div>
                <div class="footer-pera">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, reprehenderit.</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-5">
              <div class="single-footer-caption mb-30">
                <div class="footer-tittle">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Rooms</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
              <div class="single-footer-caption mb-30">
                <div class="footer-tittle">
                  <h4>Reservations</h4>
                  <ul>
                    <li><a href="#">Tel: +254 718 627 569</a></li>
                    <li><a href="#">Email: booking@dhejomel.co.ke</a></li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4  col-sm-5">
              <div class="single-footer-caption mb-30">
                <div class="footer-tittle">
                  <h4>Our Location</h4>
                  <ul>
                    <li><a href="#">Siaya County,Siaya Town, </a></li>
                    <li><a href="#">Rabango Road,Next to CDF Office Siaya</a></li>
                  </ul>

                  <div class="footer-form">
                    <div id="mc_embed_signup">
                      <form target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get" class="subscribe_form relative mail_part">
                        <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                          class="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                          onblur="this.placeholder = ' Email Address '" />
                        <div class="form-icon">
                          <button type="submit" name="submit" id="newsletter-submit"
                            class="email_icon newsletter-submit button-contactForm"><img
                              src="assets/img/logo/form-iocn.jpg" alt="" /></button>
                        </div>
                        <div class="mt-10 info"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer