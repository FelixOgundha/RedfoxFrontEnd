import { Button, Divider } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Table } from 'react-bootstrap'
import BookRoom from '../components/bookRoom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const Home = () => {
  const [bookings, setBookings] = React.useState([])
  const [bookingShow, setBookingShow] = React.useState(false);
  const [isShowCancelled, setShowCancelled] = React.useState(false);
  const pages = ['', '',];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('bookings');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const listStyle = {
    backgroundColor: "white",
    color: "white"
  }

  const activeTabStyle = {
    backgroundColor: 'yellow', // Change this to the desired color
    color: 'white', // Change this to the desired color
  };

  const fetchBookings = () => {

    axios
      .get("https://localhost:7023/api/Booking/GetBookings")
      .then((response) => {

        setBookings(response.data)
        console.log(response.data);
        setShowCancelled(false)
        setActiveTab('bookings');
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
        setActiveTab('reservations');
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
        setActiveTab('cancelled');
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

        <div className=" bg-dark   tabs" style={{ paddingTop: "130px" }}>
          <ul style={{ listStyle: "none", }} className=' m-0 p-0 px-2 '>
            <li
              className={`p-2 my-2 ${activeTab === 'bookings' ? 'active' : ''}`}
              style={{
                backgroundColor: activeTab === 'bookings' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px',
                cursor: 'pointer',
              }}
              onClick={() => {
                fetchBookings();
              }}
            >
              <div className="d-flex">
                <h4 className="p-0 m-0 text-center">Bookings</h4>
              </div>
            </li>

            <li
              className={`p-2 my-2 ${activeTab === 'reservations' ? activeTabStyle : ''}`}
              style={{ backgroundColor: activeTab === 'reservations' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px', cursor: 'pointer', }}
              onClick={() => {
                fetchReservation();
              }}
            >
              <h4 className="p-0 m-0">Reservations</h4>
            </li>

            <li
              className={`p-2 ${activeTab === 'cancelled' ? activeTabStyle : ''}`}
              style={{ backgroundColor: activeTab === 'cancelled' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px', cursor: 'pointer', }}
              onClick={() => {
                fetchCancelled();
              }}
            >
              <h4 className="p-0 m-0">Cancelled</h4>
            </li>

            <li className={`p-2  mt-2 ${activeTab === 'comments' ? activeTabStyle : ''}`}
              style={{ backgroundColor: activeTab === 'comments' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px', cursor: 'pointer', }}>
              <h4 className="p-0 m-0">Comments</h4>
            </li>



          </ul>
        </div>
        <div className="w-100  ">
          <AppBar position="static" style={{ margin: 0, backgroundColor: "black" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Dhejomel Admin
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
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
                        isShowCancelled ? <></> :
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