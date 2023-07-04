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

const BookRoom = (props) => {
  const [age, setAge] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [roomType, setRoomType] = React.useState('');
  const [roomNumber, setRoomNumber] = React.useState('');
  const [adults, setAdults] = React.useState('');
  const [children, setChildren] = React.useState('');
  const [checkInDate, setCheckInDate] = React.useState('');
  const [checkoutDate, setCheckOutDate] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const bookRoom = () => {
    const payload = {
      fullName: fullName,
      checkInDate: "2023-07-02T19:22:02.252Z",
      checkOutDate: "2023-07-02T19:22:02.252Z",
      roomType: roomType,
      numberOfRooms: parseInt(roomNumber),
      numberOfAdults: parseInt(adults),
      numberOfChildren: parseInt(children),
      isReserved: true,
      isPaid: true,
      isCancelled: false
    };

    axios
      .post("https://localhost:7023/api/Booking/AddBooking", payload)
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

            <TextField
              id="outlined-basic"
              label="Checkin Date"
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              label="Checkout Date"
              variant="outlined"
              className='my-3'
            />

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
                <FormControlLabel value="Reserve" control={<Radio />} label="Cash" />
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