import { Avatar, Button, ListItem, ListItemAvatar, ListItemText, TextField } from '@mui/material';
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
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WorkIcon from '@mui/icons-material/Work';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { format, parse } from 'date-fns';

const BookRoom = (props) => {
  const [age, setAge] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [roomType, setRoomType] = React.useState('');
  const [roomNumber, setRoomNumber] = React.useState('');
  const [adults, setAdults] = React.useState('');
  const [children, setChildren] = React.useState('');
  const [checkInDate, setCheckInDate] = React.useState('');
  const [checkoutDate, setCheckOutDate] = React.useState('');



  const bookRoom = () => {
    const dateObjectOne = parse(checkInDate, "EEE, dd MMM yyyy HH:mm:ss 'GMT'", new Date());
    const formattedDateOne = format(dateObjectOne, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const dateObjectTwo = parse(checkoutDate, "EEE, dd MMM yyyy HH:mm:ss 'GMT'", new Date());
    const formattedDateTwo = format(dateObjectTwo, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const payload = {
      fullName: fullName,
      checkInDate: formattedDateOne,
      checkOutDate: formattedDateTwo,
      roomType: roomType,
      numberOfRooms: parseInt(roomNumber),
      numberOfAdults: parseInt(adults),
      numberOfChildren: parseInt(children),
      isReserved: true,
      isPaid: true,
      isCancelled: false
    };

    axios
      .post("https://api-dhejomel.azgard.co.ke/api/Booking/AddBooking", payload)
      .then((response) => {
        props.onHide()
      })
      .catch((e) => {
        console.log(e);
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
            Book A Room
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="d-flex flex-column">
            <TextField id="outlined-basic" label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} variant="outlined" className='my-3' />
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Room Type</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={roomType}
                label="Room Type"
                onChange={(e) => setRoomType(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Single"}>Single</MenuItem>
                <MenuItem value={"Double"}>Double</MenuItem>
                <MenuItem value={"Executive"}>Executive</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Adults"
              variant="outlined"
              className='my-3'
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Children"
              variant="outlined"
              className='mb-3'
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Number of rooms"
              variant="outlined"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
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
                <FormControlLabel value="Reserve" control={<Radio />} label="Reserve" />
              </RadioGroup>
            </FormControl>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={bookRoom}>Book Room</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default BookRoom

//58K i7
// 46K