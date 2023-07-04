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
                        <li><a href="/">Home</a></li>
                        <li><a href="/rooms.html">Rooms</a></li>
                        <li><a href="services.html">Our Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
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
                <div class=" col-xl-4 col-lg-4">
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

                <div class="single-room mb-50">
                  <div class="room-img">
                    <a href="#"><img src="assets/img/rooms/room1.jpg" alt="" /></a>
                  </div>
                  <div class="room-caption">
                    <h3><a href="#">VIP Room</a></h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">

                <div class="single-room mb-50">
                  <div class="room-img">
                    <a href="#"><img src="assets/img/rooms/room2.jpg" alt="" /></a>
                  </div>
                  <div class="room-caption">
                    <h3><a href="#">Executive Room</a></h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">

                <div class="single-room mb-50">
                  <div class="room-img">
                    <a href="#"> <img src="assets/img/rooms/room3.jpg" alt="" /></a>
                  </div>
                  <div class="room-caption">
                    <h3><a href="#">Executive Family Room</a></h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">

                <div class="single-room mb-50">
                  <div class="room-img">
                    <a href="#"><img src="assets/img/rooms/room4.jpg" alt="" /></a>
                  </div>
                  <div class="room-caption">
                    <h3><a href="#">Day Rest Room</a></h3>
                    <div class="per-night">
                      <span><u>$</u>150 <span>/ par night</span></span>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>




        <div class="dining-area dining-padding-top">

          <div class="single-dining-area left-img">
            <div class="container">
              <div class="row justify-content-end">
                <div class="col-lg-8 col-md-8">
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




        <div class="gallery-area fix" style={{ marginTop: "100px" }}>
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