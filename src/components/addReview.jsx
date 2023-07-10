import { Button, Rating, TextField, Typography } from '@mui/material';
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { format } from 'date-fns';
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
      .post("https://api-dhejomel.azgard.co.ke/api/Comments/AddComment", payload)
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