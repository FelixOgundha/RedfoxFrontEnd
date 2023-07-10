import React from 'react'
import Header from '../../components/partials/header'
import Footer from '../../components/partials/footer'
import conference from '../../assets/images/sample/conference.jpeg'
import drinks from '../../assets/images/sample/drinks.jpeg'
import BookConference from '../../components/confModal'
import axios from 'axios'
import { Rating } from '@mui/material'
import { Carousel } from 'react-bootstrap'
import AddReview from '../../components/addReview'

const Services = () => {
  const [conferenceBookingShow, setConferenceShow] = React.useState(false);
  const [reviewsShow, setReviewsShow] = React.useState(false);
  const [reviews, setReviews] = React.useState([])

  const fetchReviews = () => {
    axios
      .get("https://api-dhejomel.azgard.co.ke/api/Comments/GetComments")
      .then((response) => {
        setReviews(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {

    fetchReviews()

  }, [])

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
              <p>For a delicious culinary experience,
                dine at the Dhe Jomels Restaurant.
                Sample our wide range of cuisine
                done well by our
                Executive chef at our indoor restaurant. </p>
              <p>
                We have special consideration
                for different clients thus offer
                vegetarian and non vegetarian
              </p>
              <p>
                our restaurant is known for
                its mouth-watering cuisine,
                with the famous
                sizzling Nyama Choma
                a must-taste.
              </p>
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
              <p>Meeting Simplified. Make your next meeting a Success. For a truly
                seamless experience, Dhe Jomels now offers the choice of different
                meeting packages specifically developed for meting up to 150
                people. </p>
              <p>
                The hotel has hosted a myriad of top level conferences and guests at
                its state of the art banqueting and conferencing facilities. Among
                notable events include high profile local and international seminars
                among others.
              </p>
              <p>
                With free Wi-Fi, aerated and well-lit spaces, our conference rooms
                allow for a variety of set-ups for meetings, break-out sessions,
                workshops or retreats.
              </p>
              <a
                class="btn py-2"
                onClick={() => setConferenceShow(true)}
                style={{
                  backgroundColor: "rgb(128, 0, 0)",
                  color: "white"
                }}>
                <strong>Book Online <i class="ti-angle-right"></i></strong>
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




        <div
          class="testimonial-area t-padding"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-9 col-lg-9 col-md-9">
                <div class="h1-testimonial-active">

                  <div class="single-testimonial pt-65">

                    <div class="font-back-tittle mb-105">
                      <div class="archivment-front">
                        <h3>Customer Reviews</h3>
                      </div>
                      <h3 class="archivment-back">Testimonial</h3>
                    </div>
                    <Carousel
                      indicators={false}
                      controls={true}
                      className='custom-carousel'
                    >
                      {
                        reviews?.map((item, key) =>
                          <Carousel.Item>

                            <div class="testimonial-caption text-center">
                              <p>"{item.comments}"
                              </p>

                              <div class="testimonial-ratting">
                                <Rating name="read-only" value={item.rating} readOnly />
                              </div>
                              <div class="rattiong-caption">
                                <span>{item.fullName} <span>Client</span> </span>
                              </div>
                            </div>
                          </Carousel.Item>

                        )

                      }

                    </Carousel>
                    <div className="d-flex  justify-content-center pt-4">
                      <a
                        class="btn py-2 text-center"
                        onClick={() => setReviewsShow(true)}
                        style={{
                          backgroundColor: "rgb(128, 0, 0)",
                          color: "white"
                        }}>
                        <strong>Add Review <i class="ti-angle-right"></i></strong>
                      </a>
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

      <BookConference
        show={conferenceBookingShow}
        onHide={() => {
          setConferenceShow(false)
        }}
      />
      <AddReview
        show={reviewsShow}
        fetchReviews={() => fetchReviews()}
        onHide={() => {
          setReviewsShow(false)
        }}
      />
    </div>
  )
}

export default Services