import { Button, Rating, TextField, TextareaAutosize, Typography } from '@mui/material';
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

const AddReview = (props) => {
  const [fullName, setFullName] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState('');

  const addReview = () => {
    Swal.fire('Adding Review...!', '', 'info')

    const formattedDateOne = format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

    const payload = {
      fullName: fullName,
      comments: comment,
      rating: rating,
      isEnabled: true,
      updatedOn: formattedDateOne
    };

    axios
      .post("https://localhost:7023/api/Comments/AddComment", payload)
      .then((response) => {
        Swal.fire('Thank you for your Feedback!', '', 'success')
        props.fetchReviews()
        props.onHide()
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Check your Internet connection</a>'
        })
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
            Add Review
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
              id="outlined-multiline-static"
              label="Add Comment"
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <Typography component="legend" className='mt-3'>Rate Service</Typography>

            <div class="testimonial-ratting">
              <Rating
                name="simple-controlled"
                value={rating}
                style={{ fontSize: '100px' }}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </div>


          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            onClick={addReview}
          >Add Review
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddReview

//58K i7
// 46K