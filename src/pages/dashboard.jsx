import { Avatar, Button, Paper } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast';
import Header from '../components/Header'
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const history = useHistory();
  const [isDownloaded, setisDownloaded] = React.useState(false)

  const profile = JSON.parse(localStorage.getItem("authCustomer"))
  const handleDownload = (x) => {
    toast.loading('processing')
    axios
      .get(`https://localhost:7155/api/FileUpload/DownloadFile?id=${x}`, {
        method: "GET",
      })
      .then(response => {
        const data = response.data
        toast.dismiss()
        toast.success('visa downloaded')
        setisDownloaded(true)
        // window.location.replace(`file:///C:/Users/USER/source/repos/ARA.API/ARA/FileDownloaded/${y}`)

      })
      .catch(error => {
        setisDownloaded(true)
        toast.dismiss()
        toast.success('visa downloaded')

      })
  }
  React.useEffect(() => {
    console.log(profile.fileDetails);
  }, [])

  return (
    <div>
      <Toaster />
      <Header />
      <div className="mt-5">
        <div className="container">
          <Paper>
            <div className="d-flex flex-column">
              <div className="first-row bg-info"
                style={
                  {
                    height: '15vh',
                    background: "#007991", /* fallback for old browsers */
                    background: "-webkit - linear - gradient(to right, #78ffd6, #007991)",  /* Chrome 10-25, Safari 5.1-6 */
                    background: "linear - gradient(to right, #78ffd6, #007991)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

                  }
                }
              >

              </div>
              <Avatar
                sx={{
                  width: "150px",
                  height: "150px",
                  marginTop: '-8vh',
                  marginLeft: '50px',
                  marginBottom: '-8vh'
                }} />
              <div
                className="last-row"
                style={
                  {
                    height: '15vh',
                    background: "whitesmoke"

                  }
                }
              >
                <div className="data " style={{ marginTop: '8vh', marginLeft: '55px', }} >
                  <Row>
                    <Col>
                      <p className='p-0 m-1'><strong>Full Name:</strong> {profile.firstName + " " + profile.lastName} </p>
                      <p className='p-0 m-1'><strong>Id Number:</strong> {profile.nationalId}</p>
                    </Col>
                    <Col>
                      <p className='p-0 m-1'><strong>Email Address:</strong> {profile.email}</p>

                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Paper>

          <Paper className='mt-5' elevation={3}>
            <div className="mx-5 py-4 ">
              <h2>My Documents</h2>
              {

                profile.fileDetails.map((item, key) =>
                  <div className="visa p-2 d-flex justify-content-between align-items-center" style={{ background: "whitesmoke" }} key={key}>
                    <p className='p-0 m-0'><strong>Visa</strong></p>
                    {/* <p className='p-0 m-0'>Pending</p> */}
                    <div className='d-flex'>
                      <img src="https://www.freeiconspng.com/thumbs/pdf-icon-png/pdf-icon-4.png"
                        className='me-2'
                        width="30px"
                        alt=""
                        srcset="" />





                      {
                        isDownloaded ?

                          <Button
                            className='px-5 bg-success'
                            variant='contained'

                          >  <a href={`${process.env.PUBLIC_URL}/Downloads/${item.fileName}`}
                            style={{
                              textDecoration: "none",
                              color: "white"
                            }}
                            target="_blank" rel="noopener noreferrer"
                            download>Save  </a></Button>

                          :
                          <Button
                            className='pe-2 me-2' variant='contained'
                            onClick={() => {
                              handleDownload(item.id)
                            }}
                          >Download </Button>
                      }




                    </div>
                  </div>
                )
              }

              <div className="passport p-2 d-flex justify-content-between align-items-center">
                <p className='p-0 m-0'><strong>PassPort</strong></p>
                {/* <p className='p-0 m-0'>Pending</p> */}
                <div className='d-flex'>
                  <img src="https://www.freeiconspng.com/thumbs/pdf-icon-png/pdf-icon-4.png"
                    className='me-2'
                    width="30px"
                    alt=""
                    srcset="" />
                  <Button
                    className='pe-2' variant='contained'
                    disabled
                  >Download</Button>

                </div>
              </div>
              <div className="ticket p-2 p-2 d-flex justify-content-between align-items-center" style={{ background: "whitesmoke" }}>
                <p className='p-0 m-0'><strong>Flight Tickets</strong></p>
                <div className='d-flex'>
                  <img src="https://www.freeiconspng.com/thumbs/pdf-icon-png/pdf-icon-4.png"
                    className='me-2'
                    width="30px"
                    alt=""
                    srcset="" />
                  <Button className='pe-2' variant='contained' disabled>Download</Button>

                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  )
}

export default Dashboard