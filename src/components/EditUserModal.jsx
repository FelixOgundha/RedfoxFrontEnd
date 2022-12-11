import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Col, Form, Row } from 'react-bootstrap';
import { Avatar, Button, Divider } from '@mui/material';

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

export default function EditUserModal(props) {



  return (
    <div>
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
          <Row>
            <Divider className='mb-2' />
            <Col>
              <div className="mx-1 mt-3 d-flex align-items-center flex-column">
                <Avatar sx={{ width: 204, height: 204 }} />
                <Typography id="modal-modal-title" variant="body2" component="h2" className='mt-2 text-center '>
                  Felix Ogundha - 35397898
                </Typography>
              </div>
            </Col>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Visa</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Passport</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Flight Tickets</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <div className="w-100  d-flex justify-content-end ">
                <Button variant="contained">Submit</Button>
              </div>
              {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Offer Letter</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Medical Report</Form.Label>
                <Form.Control type="file" />
              </Form.Group> */}
            </Col>
          </Row>


        </Box>
      </Modal>
    </div>
  );
}