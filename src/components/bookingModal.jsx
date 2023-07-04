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

const BookingModal = (props) => {
  const [fullName, setFullName] = React.useState('');
  const [roomType, setRoomType] = React.useState('');
  const [roomNumber, setRoomNumber] = React.useState('');
  const [adults, setAdults] = React.useState('');
  const [children, setChildren] = React.useState('');
  const [checkInDate, setCheckInDate] = React.useState('');
  const [checkoutDate, setCheckOutDate] = React.useState('');
  const [showSummary, setShowSummary] = React.useState(false);

  const handleChange = (event) => {
    // setAge(event.target.value);
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
          {
            showSummary ?
              <>

              </>
              :
              <div className="row d-flex">

                <div className="d-flex flex-column">

                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    className='mb-3'
                  />

                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    // value={roomNumber}
                    // onChange={(e) => setRoomNumber(e.target.value)}
                    className='mb-3'
                  />

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
                      <MenuItem value={"Single"}>Single - KES 8,000</MenuItem>
                      <MenuItem value={"Double"}>Double - KES 9,000</MenuItem>
                      <MenuItem value={"Executive"}>Executive - KES 10,000</MenuItem>
                    </Select>
                  </FormControl>


                  <FormControl className='mt-3'>
                    <FormLabel id="demo-radio-buttons-group-label">Payment Mode</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Cash"
                      name="radio-buttons-group"
                      className='d-flex'
                    >
                      <FormControlLabel value="Mpesa" control={<Radio />} label="MPesa" />
                      <FormControlLabel value="Cash" control={<Radio />} label="Cash on Arrival" />
                      <FormControlLabel value="Reserve" control={<Radio />} label="Make Reservation" />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
          }

        </Modal.Body>
        {
          showSummary ? <Modal.Footer>
            <Button variant="contained" onClick={() => setShowSummary(false)}>Submit</Button>
          </Modal.Footer>
            :
            <Modal.Footer>
              <Button variant="contained" onClick={() => setShowSummary(true)}>Confirm</Button>
            </Modal.Footer>

        }

      </Modal>
    </div>
  )
}

export default BookingModal