import { Button, TextField } from '@mui/material';
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { Carousel } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { format, parse } from 'date-fns';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Payment from './payment';

const BookingModal = (props) => {
  const [fullName, setFullName] = React.useState('');
  const [roomType, setRoomType] = React.useState('');
  const [roomNumber, setRoomNumber] = React.useState('');
  const [adults, setAdults] = React.useState('');
  const [children, setChildren] = React.useState('');
  const [checkInDate, setCheckInDate] = React.useState('');
  const [checkoutDate, setCheckOutDate] = React.useState('');
  const [showSummary, setShowSummary] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [paymentMode, setPaymentMode] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [paymentShow, setPaymentShow] = React.useState(false);
  const [processpayment, setProcessPayment] = React.useState(true);

  const success = () => {
    Swal.fire(
      'Success!',
      'Room Booked Successfully!',
      'success'
    )
  }

  const paymentDetails = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    amount: roomType.price
  };


  const bookRoom = () => {
    setLoading(true)
    const dateObjectOne = parse(checkInDate, "EEE, dd MMM yyyy HH:mm:ss 'GMT'", new Date());
    const formattedDateOne = format(dateObjectOne, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const dateObjectTwo = parse(checkoutDate, "EEE, dd MMM yyyy HH:mm:ss 'GMT'", new Date());
    const formattedDateTwo = format(dateObjectTwo, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const payload = {
      fullName: fullName,
      checkInDate: formattedDateOne,
      checkOutDate: formattedDateTwo,
      roomType: roomType.type,
      numberOfRooms: parseInt(roomNumber),
      numberOfAdults: parseInt(adults),
      numberOfChildren: parseInt(children),
      isReserved: true,
      isPaid: false,
      isCancelled: false
    };

    axios
      .post("https://localhost:7023/api/Booking/AddBooking", payload)
      .then((response) => {
        success()
        setLoading(false)
        setIsSubmitted(true)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    console.log(props.bookingDetails.checkinDate);
    setShowSummary(false)
    setAdults(props.bookingDetails.adults)
    setCheckInDate(props.bookingDetails.checkinDate)
    setCheckOutDate(props.bookingDetails.checkOutDate)
    setChildren(props.bookingDetails.children)
    setRoomNumber(props.bookingDetails.rooms)
    setIsSubmitted(false)
    setLoading(false)

  }, [props.show])



  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" >
            Book A Room
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            showSummary ?
              <>
                <div className="d-flex">
                  <div className="w-50">
                    <List
                      sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Full Name" secondary={fullName} />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <WorkIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Check In Date" secondary={checkInDate.slice(0, 16)} />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="CheckOut Date" secondary={checkoutDate.slice(0, 16)} />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Payment Mode" secondary={paymentMode} />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <BeachAccessIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Visitors" secondary={adults} />
                      </ListItem>
                    </List>
                  </div>
                  <div className="room-details ms-3 w-50">

                    <div className="w-100 bg-info">
                      <Carousel>
                        {
                          roomType.images?.map((item, key) =>
                            <Carousel.Item>
                              <img
                                className="d-block  img-fluid"
                                src={item}
                                alt="First slide"
                              />
                            </Carousel.Item>
                          )
                        }

                      </Carousel>
                    </div>
                    <h5 className='py-3'><strong>Room Type: {roomNumber} {roomType.type + " - " + "KES " + roomType.price}</strong></h5>
                    {/* <p>Click submit to book the room</p> */}
                  </div>
                </div>
              </>
              :
              <div className="row d-flex  ">

                <div className="row">
                  <div className="col w-100">
                    <div className="d-flex flex-column w-100">

                      <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className='mb-3'
                      />

                      <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='mb-3'
                      />

                      <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Room Type</InputLabel>
                        <Select
                          style={{ color: "red" }}
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          label={roomType.type}

                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem
                            value={{
                              type: 'Single',
                              price: '8000',
                              images: ['https://www.cvent.com/sites/default/files/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg', 'https://i.pinimg.com/originals/a5/25/86/a52586ab1561ad8e9a9f6f7b7b159002.jpg']
                            }}
                            selected={roomType.type === 'Single'}>
                            Single - KES 8,000
                          </MenuItem>
                          <MenuItem
                            value={{
                              type: 'Double',
                              price: '9000',
                              images: ['https://thehollandhotel.com/wp-content/uploads/2019/07/Double-bed-image-1024x576.jpg', 'https://res.cloudinary.com/traveltripperweb/image/upload/c_limit,f_auto,h_2500,q_auto,w_2500/v1580455406/vahre6fc9gt8ygcdmkuu.jpg']
                            }}
                            selected={roomType.type === 'Double'}>
                            Double - KES 9,000
                          </MenuItem>
                          <MenuItem
                            value={{
                              type: 'Executive',
                              price: '10,000',
                              images: ['https://www.peninsula.com/en/-/media/images/new-york/03roomssuites/suitetype_03_executibe/executive-suite-bedroom2_p.jpg?mw=905&hash=2F8C917B0429702E273E9212FDAD4FDE', 'https://www.sarova-bullhotel.com/wp-content/uploads/Club-Room-6.jpg']
                            }}
                            selected={roomType.type === 'Executive'}>
                            Executive - KES 10,000
                          </MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl className='mt-3'>
                        <FormLabel id="demo-radio-buttons-group-label">Payment Mode</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="Cash"
                          name="radio-buttons-group"
                          value={paymentMode}
                          onChange={(e) => setPaymentMode(e.target.value)}
                          className='d-flex'
                        >
                          <FormControlLabel value="Mpesa" control={<Radio />} label="MPesa" onClick={() => setProcessPayment(true)} />
                          <FormControlLabel value="Cash" control={<Radio />} onClick={() => setProcessPayment(false)} label="Cash on Arrival" />
                          <FormControlLabel value="Reserve" control={<Radio />} onClick={() => setProcessPayment(false)} label="Make Reservation" />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col">
                    <div className="room-details ms-3 w-100">

                      <div className="w-100 bg-info">
                        <Carousel>
                          {
                            roomType.images?.map((item, key) =>
                              <Carousel.Item>
                                <img
                                  className="d-block  img-fluid"
                                  src={item}
                                  alt="First slide"
                                />
                              </Carousel.Item>
                            )
                          }

                        </Carousel>
                      </div>
                      <h5 className='py-3'><strong>Room Type: {roomNumber} {roomType.type + " - " + "KES " + roomType.price}</strong></h5>
                      {/* <p>Click submit to book the room</p> */}
                    </div>
                  </div>
                </div>


              </div>
          }

        </Modal.Body>
        {
          showSummary ?

            <>
              {
                isSubmitted ?
                  <>
                    <Modal.Footer>
                      <Button variant="contained" onClick={() => props.onHide()}>Exit</Button>
                    </Modal.Footer>
                  </>
                  :
                  <>
                    {
                      loading ?
                        <Modal.Footer >
                          <LoadingButton
                            color="secondary"
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                            disabled
                          >
                            <span>Processing..</span>
                          </LoadingButton>
                        </Modal.Footer>
                        :
                        <Modal.Footer >
                          <Button variant="contained" onClick={() => bookRoom()}>Submit</Button>
                        </Modal.Footer>
                    }
                  </>
              }
            </>

            :
            <>
              {
                processpayment ?
                  <Modal.Footer>
                    <Button variant="contained" onClick={() => setPaymentShow(true)} className='bg-success'>Process Payment</Button>
                  </Modal.Footer>
                  :
                  <Modal.Footer>
                    <Button variant="contained" onClick={() => setShowSummary(true)}>Confirm</Button>
                  </Modal.Footer>
              }
            </>

        }

      </Modal>

      <Payment
        show={paymentShow}
        onHide={() => {
          setPaymentShow(false)
        }}
        paymentDetails={paymentDetails}
      />
    </div>
  )
}

export default BookingModal