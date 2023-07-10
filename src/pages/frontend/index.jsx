import React from 'react'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import BookingModal from '../../components/bookingModal';
import { format } from 'date-fns';
import FsLightbox from "fslightbox-react";
import Header from '../../components/partials/header';
import Footer from '../../components/partials/footer';
import slideOne from '../../assets/images/sample/slide1.jpeg'
import slideTwo from '../../assets/images/sample/slide2.jpeg'
import conference from '../../assets/images/sample/conference.jpeg'
import drinks from '../../assets/images/sample/drinks.jpeg'
import menu from '../../assets/menu/dhejomel_kitchen_menu.pdf'
import BookConference from '../../components/confModal';
import VIP from '../../assets/images/rooms/VIP Room.jpeg'
import Executive from '../../assets/images/rooms/executive.jpeg'
import Superior from '../../assets/images/rooms/VIP.jpeg'

const Index = () => {
  const [value, setValue] = React.useState(dayjs());
  const [children, setChildren] = React.useState();
  const [adults, setAdults] = React.useState();
  const [rooms, setRooms] = React.useState();
  const [checkinDate, setCheckinDate] = React.useState(dayjs(Date.now()));
  const [checkOutDate, setCheckOutDate] = React.useState(dayjs(Date.now()));
  const [age, setAge] = React.useState('');
  const [bookings, setBookings] = React.useState([])
  const [bookingShow, setBookingShow] = React.useState(false);
  const [showGallery, setShowGallery] = React.useState(false);
  const [toggler, setToggler] = React.useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const bookingDetails = {
    children: children,
    adults: adults,
    rooms: rooms,
    checkOutDate: checkOutDate.toString(),
    checkinDate: checkinDate.toString()
  }

  const handleSubmit = () => {
    console.log();
  }

  return (
    <div>
      <FsLightbox
        toggler={toggler}
        sources={[
          'https://www.boutiques.marriottbonvoy.com/wp-content/uploads/2019/10/whotels-bed.jpg',
          'https://cdn.shopify.com/s/files/1/0042/0626/4384/files/shutterstock_1017013843_large.jpg',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          'https://media.cnn.com/api/v1/images/stellar/prod/180117182508-aka-wall-street.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280',


        ]}
      />

      <Header />
      <main>


        <div class="slider-area ">

          <div class="slider-active dot-style">
            <div class="single-slider  hero-overly slider-height d-flex align-items-center"
              style={{ backgroundImage: `url(${slideTwo})` }}>
              <div class="container">
                <div class="row justify-content-center text-center">
                  <div class="col-xl-9">
                    <div class="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">Pride of Siaya</h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">Welcome</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-slider  hero-overly slider-height d-flex align-items-center"
              style={{ backgroundImage: `url(${slideOne})` }}>
              <div class="container">
                <div class="row justify-content-center text-center">
                  <div class="col-xl-9">
                    <div class="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">top hotel in the city</h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">Hotel & Resourt</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div class="booking-area">
          <div class="container">
            <div class="row ">
              <div class="col-12">
                <form action="#">
                  <div class="booking-wrap d-flex justify-content-between align-items-center">

                    <div class="single-select-box mb-30">

                      <div class="boking-tittle">
                        <span> Check In Date:</span>
                      </div>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                          <DatePicker
                            label="Check In "
                            value={checkinDate}
                            onChange={(e) => {
                              setCheckinDate(e, "yyyy-MM-dd")
                            }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>

                    <div class="single-select-box mb-30">

                      <div class="boking-tittle">
                        <span>Check OutDate:</span>
                      </div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                          <DatePicker
                            label="Check Out"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e, "yyyy-MM-dd")}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>

                    <div class="single-select-box mb-30">
                      <div class="boking-tittle">
                        <span>Adults:</span>
                      </div>
                      <div class="select-this">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">{adults}</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={adults}
                            label="Age"
                            onChange={(e) => setAdults(e.target.value)}
                          >
                            <MenuItem value={1}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={3}>4</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    <div class="single-select-box mb-30">
                      <div class="boking-tittle">
                        <span>Children:</span>
                      </div>
                      <div class="select-this">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">{children}</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={children}
                            label="Age"
                            onChange={(e) => setChildren(e.target.value)}
                          >
                            <MenuItem value={1}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    <div class="single-select-box mb-30">
                      <div class="boking-tittle">
                        <span>Rooms:</span>
                      </div>
                      <div class="select-this">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">{rooms}</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rooms}
                            label="Age"
                            onChange={(e) => setRooms(e.target.value)}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    <div class="single-select-box pt-45 mb-30">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "rgb(128, 0, 0)" }}
                        className='p-3' onClick={() => setBookingShow(true)}>Book Room
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <section class="make-customer-area customar-padding fix">
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-xl-5 col-lg-6">
                  <div class="customer-img mb-120">
                    <img src="assets/img/customer/customar1.png" class="customar-img1" alt="" />
                    <img src="assets/img/customer/customar2.png" class="customar-img2" alt="" />
                    <div class="service-experience heartbeat">
                      <h3>25 Years of Service<br />Experience</h3>
                    </div>
                  </div>
                </div>
                <div class="ms-4 col-xl-4 col-lg-4">
                  <div class="customer-caption">
                    <span>About Dhejomel</span>
                    <h2>Visit us Today</h2>
                    <div class="caption-details">
                      <p class="pera-dtails">Set on an expansive location in Siaya town, Dhe Jomels gives
                        guests a wide range of accommodation options ranging from
                        spacious deluxe, superior deluxe, family rooms to executive rooms
                        all with elegant interiors, internet access and room service.</p>

                      {/* <a href="#" class="btn more-btn1">Learn More <i class="ti-angle-right"></i> </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>



        <section class="room-area">
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

                <div
                  class="single-room mb-50"
                // onClick={() => setToggler(!toggler)}
                >
                  <div class="room-img">
                    <img src={Superior} alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Superior Room</h3>
                    <div class="per-night d-flex flex-column">
                      <span>Ksh.8,500  <span>/ Bed and Breakfast</span> </span>
                      <span>Ksh. 9,500 <span>Half board</span></span>
                      <span>Ksh. 10,000 <span>Full Board</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">

                <div
                  class="single-room mb-50"
                // onClick={() => setToggler(!toggler)}
                >
                  <div class="room-img">
                    <img src={VIP} alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>VIP Room</h3>
                    <div class="per-night d-flex flex-column">
                      <span>Ksh.8,500  <span>/ Bed and Breakfast</span> </span>
                      <span>Ksh. 9,500 <span>Half board</span></span>
                      <span>Ksh. 10,000 <span>Full Board</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">

                <div
                  class="single-room mb-50"
                // onClick={() => setToggler(!toggler)}
                >
                  <div class="room-img">
                    <img src={Executive} alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Executive Room</h3>
                    <div class="per-night">
                      <div class="per-night d-flex flex-column">
                        <span>Ksh.5,500  <span>/ Bed and Breakfast</span> </span>
                        <span>Ksh. 6,500 <span>Half board</span></span>
                        <span>Ksh. 7,000 <span>Full Board</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>





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
              <span>Our restaurant</span>
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
              <a href={menu}
                class="btn py-2"
                style={{ backgroundColor: "rgb(128, 0, 0)", color: "white" }}
              >
                <strong>View Menu <i class="ti-angle-right"></i></strong>
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
              <a href="#" class="btn py-2" style={{ backgroundColor: "rgb(128, 0, 0)", color: "white" }}>
                <strong>Book Facility <i class="ti-angle-right"></i></strong>
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



        <div class="gallery-area fix" style={{ marginTop: "100px" }}>
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-md-12">
                <div class="gallery-active owl-carousel">
                  <div class="gallery-img">
                    <a href="#"><img src={slideOne} alt="" /></a>
                    <h1>One</h1>
                  </div>
                  <div class="gallery-img">
                    <a href="#"><img src="https://cdn.shopify.com/s/files/1/0042/0626/4384/files/shutterstock_1017013843_large.jpg" alt="" /></a>
                    <h1>One</h1>

                  </div>
                  <div class="gallery-img">
                    <a href="#"><img src="https://media.cnn.com/api/v1/images/stellar/prod/180117182508-aka-wall-street.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />

      <BookingModal
        show={bookingShow}
        bookingDetails={bookingDetails}
        onHide={() => {
          setBookingShow(false)
        }}
      />



    </div>
  )
}

export default Index