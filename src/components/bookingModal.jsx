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
import VIP from '../assets/images/rooms/VIP Room.jpeg'
import Executive from '../assets/images/rooms/executive.jpeg'
import Superior from '../assets/images/rooms/VIP.jpeg'

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
  const [paymentMode, setPaymentMode] = React.useState('Cash');
  const [loading, setLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [paymentShow, setPaymentShow] = React.useState(false);
  const [processpayment, setProcessPayment] = React.useState(false);

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

  const rooms = [
    {
      type: 'VIP Room (Bed and Breakfast)',
      price: 'KES 8,500',
      images: [VIP]
    }, {
      type: 'VIP Room (Full Board)',
      price: 'KES 10,000',
      images: [VIP]
    },
    {
      type: 'VIP Room (Half Board)',
      price: 'KES 9,500',
      images: [VIP]
    },

    {
      type: 'Executive Room (Bed and breakfast)',
      price: 'KES 5,500',
      images: [Executive]
    }, {
      type: 'Executive Room (Full Board)',
      price: 'KES 7,000',
      images: [Executive]
    },
    {
      type: 'Executive Room (Half Board)',
      price: 'KES 6,500',
      images: [Executive]
    }, {
      type: 'Executive Family Room ',
      price: 'KES 11,500',
      images: [Executive]
    },
    {
      type: 'Day Rest Room ',
      price: 'KES 3,000',
      images: [Superior]
    },

  ]

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
      .post("https://api-dhejomel.azgard.co.ke/api/Booking/AddBooking", payload)
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
                          label="Room Type"

                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>


                          {
                            rooms.map((item, key) =>
                              <MenuItem
                                value={{
                                  type: item.type,
                                  price: item.price,
                                  images: item.images
                                }}
                                selected={roomType.type === item.type}>
                                {
                                  item.type + " - " + item.price
                                }
                              </MenuItem>
                            )
                          }

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
                          {/* <FormControlLabel value="Mpesa" control={<Radio />} label="MPesa" onClick={() => setProcessPayment(true)} /> */}
                          <FormControlLabel value="Cash" control={<Radio />} onClick={() => setProcessPayment(false)} label="Cash on Arrival" />
                          <FormControlLabel value="Reserve" control={<Radio />} onClick={() => setProcessPayment(false)} label="Make Reservation" />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col ">
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
                      {
                        roomType === '' ?
                          <>
                          </>
                          :
                          <h5 className='py-3'><strong>Room Type: {roomNumber} {roomType.type + " - " + "KES " + roomType.price}</strong></h5>
                      }
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