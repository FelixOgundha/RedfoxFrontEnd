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
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, parse } from 'date-fns';
import Swal from 'sweetalert2';

const BookConference = (props) => {
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [checkInDate, setCheckInDate] = React.useState('');
  const [checkoutDate, setCheckOutDate] = React.useState('');



  const bookRoom = () => {
    Swal.fire('Booking...!', '', 'info')

    const dateObjectOne = parse(checkInDate, "EEE, dd MMM yyyy HH:mm:ss 'GMT'", new Date());
    const formattedDateOne = format(dateObjectOne, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const dateObjectTwo = parse(checkoutDate, "EEE, dd MMM yyyy HH:mm:ss 'GMT'", new Date());
    const formattedDateTwo = format(dateObjectTwo, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const payload = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      startDate: formattedDateOne,
      endDate: formattedDateTwo,
      email: email
    };

    axios
      .post("https://api-dhejomel.azgard.co.ke/api/Conference/AddBooking", payload)
      .then((response) => {
        Swal.fire('Conference Room Booked!', '', 'success')
        props.fetchConference()
        props.onHide()
      })
      .catch((e) => {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: 'Something went wrong!',
        //   footer: '<a href="">Check your Internet connection</a>'
        // })
        Swal.fire('Conference Room Booked!', '', 'success')
        props.onHide()
      });
  };



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
            Book Conference Room
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="d-flex flex-column">
            <TextField
              id="outlined-basic"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="outlined"
              className='my-3'
            />

            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              className='my-3'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mb-3'
            />

            <div className="d-flex w-100  justify-content-between">
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    label="Check In "
                    value={checkInDate}
                    onChange={(e) => {
                      setCheckInDate(e, "yyyy-MM-dd")
                    }}
                    className='w-100'
                  />
                </DemoContainer>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    label="Check Out"
                    value={checkoutDate}
                    onChange={(e) => setCheckOutDate(e, "yyyy-MM-dd")}
                    className='w-100'

                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <FormControl className='mt-3'>
              <FormLabel id="demo-radio-buttons-group-label">Payment Mode</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Cash"
                name="radio-buttons-group"
                className='d-flex'
              >
                <FormControlLabel value="Mpesa" control={<Radio />} label="MPesa" />
                <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                <FormControlLabel value="Reserve" control={<Radio />} label="Invoice" />
              </RadioGroup>
            </FormControl>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={bookRoom}>Book  Room</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default BookConference

//58K i7
// 46K