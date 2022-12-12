import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Col, Form, Row } from 'react-bootstrap';
import { Avatar, Button, Divider } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  border: '1px solid white',
  boxShadow: 24,
  p: 4,
};

const EditUserModal = (props) => {

  const handleUpload = (e) => {
    console.log('handling upload.....');
    toast.loading('processing...')

    e.preventDefault()

    const visa = e.target.visa.files[0];
    const passport = e.target.passport.files[0];
    const flight = e.target.flight.files[0];

    const promise1 = () => {
      // Forming Form Data
      const formData = new FormData()
      formData.append("GetFormFile", visa)
      // formData.append("userId", props.userData.id)
      formData.append("fileType", 1)
      axios
        .post(`https://localhost:7155/api/FileUpload/PostSingleFile?userId=${props.userData.id}`, formData, {
          method: "POST",
          headers: {
            "content-type": "multipart/form-data",

          },
        })
        .then(response => {
          const data = response.data
          // console.log(data)
          // toast.success(data?.message)

        })
        .catch(error => {
          if (error.toJSON().message === 'Network Error') {
            toast.error('Network Error. Check Internet Connection')
          }
          else {
            toast.error(error.response?.data?.message)
          }
        })

    };

    const promise2 = () => {
      // Forming Form Data
      const formData = new FormData()
      formData.append("GetFormFile", passport)
      // formData.append("userId", props.userData.id)
      formData.append("fileType", 2)

      axios
        .post(`https://localhost:7155/api/FileUpload/PostSingleFile?userId=${props.userData.id}`, formData, {
          method: "POST",
          headers: {
            "content-type": "multipart/form-data",

          },
        })
        .then(response => {
          const data = response.data
          // console.log(data)
          // toast.success(data?.message)

        })
        .catch(error => {

          if (error.toJSON().message === 'Network Error') {
            toast.error('Network Error. Check Internet Connection')
          }
          else {
            toast.error(error.response?.data?.message)
          }
        })

    };

    const promise3 = () => {
      // Forming Form Data
      const formData = new FormData()
      formData.append("GetFormFile", flight)
      // formData.append("userId", props.userData.id)
      formData.append("fileType", 3)

      axios
        .post(`https://localhost:7155/api/FileUpload/PostSingleFile?userId=${props.userData.id}`, formData, {
          method: "POST",
          headers: {
            "content-type": "multipart/form-data",

          },
        })
        .then(response => {
          const data = response.data
          // console.log(data)
          // toast.success(data?.message)

        })
        .catch(error => {

          if (error.toJSON().message === 'Network Error') {
            toast.error('Network Error. Check Internet Connection')
          }
          else {
            toast.error(error.response?.data?.message)
          }
        });
    }
    // Async function to perform execution of all promise
    let promiseExecution = async () => {
      toast.dismiss()
      let promise = await Promise.all([
        promise1(),
        promise2(),
        promise3(),

      ]);

    };

    // Function call
    promiseExecution();
    toast.success("posted successfully")
  }


  React.useEffect(() => {
    console.log(props.userData)
  }, [props.open])


  return (
    <div>
      <Toaster />
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload Documents
          </Typography>

          <Row

          >
            <Divider className='mb-2' />
            <Col>
              <div className="mx-1 mt-3 d-flex align-items-center flex-column">
                <Avatar sx={{ width: 204, height: 204 }} />
                <Typography id="modal-modal-title" variant="body2" component="h2" className='mt-2 text-center '>
                  - 35397898
                </Typography>
              </div>
            </Col>
            <Col>
              <Form onSubmit={() => handleUpload()}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Visa</Form.Label>
                  <Form.Control type="file" name="visa" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Passport</Form.Label>
                  <Form.Control type="file" name="passport" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Flight Tickets</Form.Label>
                  <Form.Control type="file" name="flight" />
                </Form.Group>
                <div className="w-100  d-flex justify-content-end ">
                  <Button className='btn btn-success' type='submit'>Submit</Button>
                </div>
              </Form>

            </Col>
          </Row>


        </Box>

      </Modal>
    </div>
  );
}
export default EditUserModal;