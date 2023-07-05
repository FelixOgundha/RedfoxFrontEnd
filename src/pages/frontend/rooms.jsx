import React from 'react'
import Header from '../../components/partials/header'
import Footer from '../../components/partials/footer'
import FsLightbox from 'fslightbox-react'

const Rooms = () => {
  const [toggler, setToggler] = React.useState(false);


  return (
    <div>
      <Header />
      <main>
        <FsLightbox
          toggler={toggler}
          sources={[
            'https://www.boutiques.marriottbonvoy.com/wp-content/uploads/2019/10/whotels-bed.jpg',
            'https://cdn.shopify.com/s/files/1/0042/0626/4384/files/shutterstock_1017013843_large.jpg',
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            'https://media.cnn.com/api/v1/images/stellar/prod/180117182508-aka-wall-street.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280',


          ]}
        />
        <div class="slider-area">
          <div class="single-slider hero-overly slider-height2 d-flex align-items-center"
            style={{ backgroundImage: "url('https://new-hls.s3.amazonaws.com/hls/data/1608/website/general/bn/banner3.jpg')" }}
          >
            <div class="container">
              <div class="row ">
                <div class="col-md-11 offset-xl-1 offset-lg-1 offset-md-1">
                  <div class="hero-caption">
                    <span>Rooms</span>
                    <h2>Our Rooms</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section class="room-area r-padding1">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8">

                <div class="font-back-tittle mb-45">
                  <div class="archivment-front">
                    <h3>Our Rooms</h3>
                  </div>
                  <h3 class="archivment-back">Our Rooms</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">

                    <img src="assets/img/rooms/room1.jpg" alt="" />

                  </div>
                  <div class="room-caption">
                    <h3>Classic Double Bed</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room2.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Classic Double Bed</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room3.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Classic Double Bed</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room4.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Classic Double Bed</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room5.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Classic Double Bed</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room6.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Classic Double Bed</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


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

export default Rooms