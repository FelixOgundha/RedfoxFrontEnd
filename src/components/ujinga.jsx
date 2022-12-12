import { Avatar, Typography, Divider } from '@mui/material';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Toaster, toast } from 'react-hot-toast';
import axios from "axios";

import Modal from 'react-bootstrap/Modal';

const Example = (props) => {

  React.useEffect(() => {
    console.log('data', props.userData)
  }, [props.show])

  const handleUploa = (e) => {
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
          // if (error.toJSON().message === 'Network Error') {
          //   toast.error('Network Error. Check Internet Connection')
          // }

          toast.error(error.response?.data?.message)

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

          // if (error.toJSON().message === 'Network Error') {
          //   toast.error('Network Error. Check Internet Connection')
          // }

          toast.error(error.response?.data?.message)

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

          // if (error.toJSON().message === 'Network Error') {
          //   toast.error('Network Error. Check Internet Connection')
          // }
          // else {
          toast.error(error.response?.data?.message)

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

  const handleUpload = (e) => {
    e.preventDefault()

    toast.loading('processing...')
    const visa = e.target.visa.files[0];
    console.log(visa)

    // Forming Form Data
    const formData = new FormData()
    formData.append("fileDetail", visa)
    // formData.append("userId", props.userData.id)
    const payload = {
      fileType: 1,
      fileDetail: visa,
    }
    axios
      .post(`https://localhost:7155/api/FileUpload/PostSingleFile?userId=${props.userData.id}`, payload, {
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then(response => {
        const data = response.data
        toast.dismiss()
        toast.success('visa added successfully')

        props.onHide()


      })
      .catch(error => {
        toast.dismiss()
        toast.success('visa added successfully')

        props.onHide()
      })



  }
  return (
    <>


      <Modal
        show={props.show}

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title>Upload Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row

          >

            <Col>
              <div className="mx-1 mt-3 d-flex align-items-center flex-column">
                <Avatar sx={{ width: 204, height: 204 }} />
                <Typography id="modal-modal-title" variant="body2" component="h2" className='mt-2 text-center '>
                  {props.userData?.firstName + " " + props.userData?.lastName} - {props.userData?.nationalId}
                </Typography>
              </div>
            </Col>
            <Col>
              <Form onSubmit={handleUpload}>
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
              {/* 
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Offer Letter</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Medical Report</Form.Label>
                <Form.Control type="file" />
              </Form.Group> 
              
              */}
            </Col>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="bg-info border-0">
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;