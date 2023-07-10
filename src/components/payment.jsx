import axios from 'axios';
import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Payment = (props) => {

  const processpayment = () => {

    const payload = {
      phoneNumber: props.paymentDetails.phoneNumber,
      account: props.paymentDetails.fullName,
      amount: props.paymentDetails.amount
    };

    axios
      .post("https://api-dhejomel.azgard.co.ke/api/Payment/LipaNaMpesa", payload)
      .then((response) => {

      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    processpayment()
  }, [props.show])

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" >
            Processing Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex  justify-content-center py-3">
            <div className="d-flex flex-column align-items-center">
              <div style={{ width: '200px', height: '200px' }}>
                <img
                  src="https://i.gifer.com/origin/a1/a1d81f564eeb1468aefbcfd54d1571b8_w200.gif"
                  alt=""
                  srcset=""
                  className='img-fluid'
                />
              </div>
              <p className='mt-3 text-muted'><strong>{props.paymentDetails.fullName}</strong> You will be prompted to enter your <strong>Mpesa PIN</strong> to complete transaction</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" >Confirm</Button>
        </Modal.Footer>
      </Modal></div>
  )
}

export default Payment