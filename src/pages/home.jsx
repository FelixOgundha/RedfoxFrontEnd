import { Button, Divider } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Table } from 'react-bootstrap'
import BookRoom from '../components/bookRoom'

const Home = () => {
  const [bookings, setBookings] = React.useState([])
  const [bookingShow, setBookingShow] = React.useState(false);
  const [isShowCancelled, setShowCancelled] = React.useState(false);

  const listStyle = {
    backgroundColor: "white",
    color: "white"
  }

  const fetchBookings = () => {

    axios
      .get("https://localhost:7023/api/Booking/GetBookings")
      .then((response) => {

        setBookings(response.data)
        console.log(response.data);
        setShowCancelled(false)

      }).catch((e) => {
        console.log(e)
      });

  }


  const cancelReservation = (id) => {

    axios
      .put(`https://localhost:7023/api/Booking/CancelBooking?id=${id}`)
      .then((response) => {
        fetchBookings()
        setShowCancelled(false)
      })
      .catch((e) => {
        console.log(e);
      });
  };

const fetchReservation = () => {

    axios
      .get("https://localhost:7023/api/Booking/GetReserved")
      .then((response) => {

        setBookings(response.data)
        console.log(response.data);
        setShowCancelled(false)

      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  const fetchCancelled = () => {

    axios
      .get("https://localhost:7023/api/Booking/GetCancelled")
      .then((response) => {

        setBookings(response.data)
        console.log(response.data);
        setShowCancelled(true)

      })
      .catch((e) => {
        console.log(e);
      });
  };


  React.useEffect(() => {

    fetchBookings()

  }, [])


  return (
    <div >

      <div className="d-flex" style={{ height: "100vh" }}>

        <div className=" bg-info pt-5  ">
          <ul style={{ listStyle: "none", }} className=' m-0 p-0 px-2 pt-3'>
            <li className='p-3 my-2 ' style={{ backgroundColor: "white", borderRadius: "10px" }} onClick={()=>fetchBookings()}>
              <div className="d-flex">
                <h4 className='p-0 m-0 '>
                  Bookings
                </h4>
              </div>
            </li>

            <li className='p-3 my-2 ' style={{ backgroundColor: "white", borderRadius: "10px" }} onClick={()=>fetchReservation()}>
              <h4 className='p-0 m-0'>Reservations</h4>
            </li>

            <li className='p-3 ' style={{ backgroundColor: "white", borderRadius: "10px" }} onClick={()=>fetchCancelled()}>
              <h4 className='p-0 m-0'>Cancelled</h4>
            </li>

            <li className='p-3 my-2 ' style={{ backgroundColor: "white", borderRadius: "10px" }} onClick={()=>fetchBookings()}>
              <h4 className='p-0 m-0'>Comments</h4>
            </li>

            
          </ul>
        </div>
        <div className="w-100  p-2">
          <div className="container bg-white">
            <div className="d-flex  justify-content-end">
              <Button variant="outlined" className='my-3' onClick={() => setBookingShow(true)}>Book a Room</Button>
            </div>
            <Divider />
            <Table striped="columns" className='w-100'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Room Type</th>
                  <th>Adults</th>
                  <th>Children</th>
                  <th>No. of Rooms </th>
                  <th>CheckIn </th>
                  <th>CheckOut </th>
                  <th>Payment </th>
                  
                  {
                    isShowCancelled ? <></> : <th>Actions</th>
                  }
                </tr>
              </thead>
              <tbody>
                {
                  bookings.map((item, key) =>
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{item.fullName}</td>
                      <td>{item.roomType}</td>
                      <td>{item.numberOfAdults}</td>
                      <td>{item.numberOfChildren}</td>
                      <td>{item.numberOfRooms}</td>
                      <td>
                        {/* {item.checkInDate} */}
                        today
                      </td>
                      <td>
                        {/* {item.checkOutDate} */}
                        tomorrow
                      </td>
                      <td>{item.isPaid ? "Paid" : "Not Paid"}</td>

                      {
                         isShowCancelled ? <></>:
                        <td>
                          <div 
                          className="btn btn-danger w-100"
                          onClick={() => cancelReservation(item.id)}

                          >
                            Cancel
                          </div>
                      </td>
                      }
                     
                    </tr>
                  )
                }



              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <BookRoom
        show={bookingShow}
        onHide={() => {
          setBookingShow(false)
          fetchBookings()
        }}
      />
    </div>
  )
}

export default Home