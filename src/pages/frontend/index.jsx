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

const Index = () => {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  const [children, setChildren] = React.useState('');
  const [adults, setAdults] = React.useState('');
  const [rooms, setRooms] = React.useState('');
  const [checkinDate, setCheckinDate] = React.useState('');
  const [checkOutDate, setCheckOutDate] = React.useState('');
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
              style={{ backgroundImage: "url('https://mostuniquehotels.com/uploads/xwatamutreehousekenya.jpg.pagespeed.ic.3olY1hv6DS.jpg')" }}>
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
              style={{ backgroundImage: "url('https://mostuniquehotels.com/uploads/xwatamutreehousekenya.jpg.pagespeed.ic.3olY1hv6DS.jpg')" }}>
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
            <div class="single-slider  hero-overly slider-height d-flex align-items-center"
              style={{ backgroundImage: "url('https://mostuniquehotels.com/uploads/xwatamutreehousekenya.jpg.pagespeed.ic.3olY1hv6DS.jpg')" }}>
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
                      <Button variant="contained" className='p-3' onClick={() => setBookingShow(true)}>Book Room</Button>
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
                    <span>About our company</span>
                    <h2>Make the customer the hero of your story</h2>
                    <div class="caption-details">
                      <p class="pera-dtails">Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed do eiusmod
                        tempor inc. </p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
                      <a href="#" class="btn more-btn1">Learn More <i class="ti-angle-right"></i> </a>
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
              <div class="col-xl-3 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room1.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>VIP Room</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room2.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Executive Room</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room3.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Executive Family Room</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">

                <div class="single-room mb-50" onClick={() => setToggler(!toggler)}>
                  <div class="room-img">
                    <img src="assets/img/rooms/room4.jpg" alt="" />
                  </div>
                  <div class="room-caption">
                    <h3>Day Rest Room</h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>




        <div class="dining-area dining-padding-top d-none">

          <div class="single-dining-area left-img">
            <div class="container">
              <div class="row justify-content-end">
                <div class="col-lg-8 col-md-8 ps-5">
                  <div class="dining-caption">
                    <span>Our resturent</span>
                    <h3>Dining & Drinks</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
                    <a href="#" class="btn border-btn">Learn More <i class="ti-angle-right"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="single-dining-area right-img">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-lg-8 col-md-8">
                  <div class="dining-caption text-right">
                    <span>Our Conference Room</span>
                    <h3>Conference Facility</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
                    <a href="#" class="btn border-btn">Learn More <i class="ti-angle-right"></i></a>
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
              backgroundImage: "url('https://mostuniquehotels.com/uploads/xwatamutreehousekenya.jpg.pagespeed.ic.3olY1hv6DS.jpg')",
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
              <span>Our resturent</span>
              <h3>Dining & Drinks</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
              <a href="#" class="btn py-2" style={{ backgroundColor: "rgb(128, 0, 0)", color: "white" }}>
                <strong>Learn More <i class="ti-angle-right"></i></strong>
              </a>
            </div>
          </div>

          <div className="illustration bg-success w-50 "
            style={{
              backgroundImage: "url('https://mostuniquehotels.com/uploads/xwatamutreehousekenya.jpg.pagespeed.ic.3olY1hv6DS.jpg')",
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
                    <a href="#"><img src="https://www.boutiques.marriottbonvoy.com/wp-content/uploads/2019/10/whotels-bed.jpg" alt="" /></a>
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