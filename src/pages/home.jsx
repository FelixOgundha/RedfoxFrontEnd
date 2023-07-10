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
import DataSetUp from '../components/Datalist/dataSetUp'
import BookConference from '../components/confModal'
import ConferenceDataSetup from '../components/Datalist/conferenceDataSetup'
import CommentSetup from '../components/Datalist/comentSetups'
import Dashboard from '../components/Dashboard/dashboard'
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EventIcon from '@mui/icons-material/Event';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';

const Home = () => {
  const [bookings, setBookings] = React.useState([])
  const [bookingShow, setBookingShow] = React.useState(false);
  const [conferenceBookingShow, setConferenceShow] = React.useState(false);
  const [isShowCancelled, setShowCancelled] = React.useState(false);
  const pages = ['', '',];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('bookings');
  const [selectedSection, setSelectedSection] = React.useState('booking');


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

  const handleLogout = () => {
    localStorage.removeItem("DhejomelToken")
    localStorage.removeItem("DhejomelUser")

    window.location = "/"
  }

  const listStyle = {
    backgroundColor: "rgb(255, 255, 255,0.9)",
    color: "white"
  }

  const activeTabStyle = {
    backgroundColor: '#FFD700', // Change this to the desired color
    color: 'white', // Change this to the desired color
  };

  const fetchBookings = () => {

    axios
      .get("https://api-dhejomel.azgard.co.ke/api/Booking/GetBookings")
      .then((response) => {
        setBookings(response.data)
        setShowCancelled(false)
        setActiveTab('bookings');
      }).catch((e) => {
        console.log(e)
      });

  }

  const fetchReservation = () => {
    axios
      .get("https://api-dhejomel.azgard.co.ke/api/Booking/GetReserved")
      .then((response) => {

        setBookings(response.data)
        setActiveTab('reservations');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchComments = () => {
    axios
      .get("https://api-dhejomel.azgard.co.ke/api/Comments/GetComments")
      .then((response) => {
        setBookings(response.data)
        setActiveTab('comments');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchConference = () => {
    axios
      .get("https://api-dhejomel.azgard.co.ke/api/Conference/ConferenceBookings")
      .then((response) => {

        setBookings(response.data)
        setActiveTab('conference');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchCancelled = () => {

    axios
      .get("https://api-dhejomel.azgard.co.ke/api/Booking/GetCancelled")
      .then((response) => {

        setBookings(response.data)
        setActiveTab('cancelled');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSelection = (selection) => {
    switch (selection) {
      case 'comments':
        return <CommentSetup data={bookings} fetchBookings={() => fetchBookings()} />

        break;
      case 'dashboard':
        return <Dashboard />

        break;
      case 'conference':
        return <ConferenceDataSetup data={bookings} fetchBookings={() => fetchConference()} />

        break;
      case 'booking':
        return <DataSetUp data={bookings} fetchBookings={() => fetchBookings()} />

        break;

      default:
        return <DataSetUp data={bookings} fetchBookings={() => fetchBookings()} />

        break;
    }
  }

  React.useEffect(() => {

    fetchBookings()

  }, [])


  return (
    <div style={{ backgroundColor: "whitesmoke", height: "100vh" }}>
      <AppBar position="static" style={{ margin: 0, backgroundColor: "rgb(128, 0, 0)" }}>
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
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Dhejomel  Admin
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
              <Tooltip title="Open settings" className=''>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar style={{ backgroundColor: '#FFD700' }}> <PersonOutlineSharpIcon
                    className='text-dark'
                    sx={{ Backgroundcolor: 'rgb(128, 0, 0' }}
                  /></Avatar>
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
            <div className="d-flex flex-column ms-3">
              <Typography
                variant='subtitle2'
                style={{ color: '#FFD700', margin: 0, padding: 0 }}
                className='p-0 m-0'>
                Administrator
              </Typography>
              <Typography
                variant='caption'
                className='p-0 m-0'
                sx={{ margin: 0, padding: 0 }}>
                Felix Ogundha
              </Typography>
            </div>
            {/* <Button
              variant="outlined"
              className='my-3 ms-3'
              onClick={() => handleLogout()}
              style={{
                backgroundColor: "#FFD700",
                color: "rgb(128, 0, 0)",
                border: "0px"
              }}
            >
              <div className="d-flex align-items-center">
                <div className="me-2">Logout <LogoutIcon /></div>
              </div>
            </Button> */}
          </Toolbar>
        </Container>
      </AppBar>
      <div className="d-flex" style={{ height: "100%" }}>

        <div
          className=" d-flex flex-column justify-content-between  tabs"
          style={{
            paddingTop: "60px",
            backgroundColor: "rgb(128, 0, 0,0.9)"
          }}>
          <ul style={{ listStyle: "none", }} className=' m-0 p-0 px-2 '>
            <li
              className={`p-2 my-2 ${activeTab === 'dashboard' ? 'active' : ''}`}
              style={{
                backgroundColor: activeTab === 'dashboard' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px',
                cursor: 'pointer',
              }}
              onClick={() => {
                setSelectedSection('dashboard');
                setActiveTab('dashboard');

              }}
            >
              <div className="d-flex align-items-center">
                <DashboardIcon className='me-1' /><h4 className=" p-0 m-0 text-center">Dashboard</h4>
              </div>
            </li>

            <li
              className={`p-2 my-2 ${activeTab === 'bookings' ? 'active' : ''}`}
              style={{
                backgroundColor: activeTab === 'bookings' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px',
                cursor: 'pointer',
              }}
              onClick={() => {
                setSelectedSection('booking');
                fetchBookings();
              }}
            >
              <div className="d-flex align-items-center">
                <EventAvailableIcon className='me-1' />
                <h4 className="p-0 m-0 text-center">Bookings</h4>
              </div>
            </li>

            <li
              className={`p-2 my-2 ${activeTab === 'reservations' ? activeTabStyle : ''}`}
              style={{ backgroundColor: activeTab === 'reservations' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px', cursor: 'pointer', }}
              onClick={() => {
                setSelectedSection('booking');
                fetchReservation();
              }}
            >
              <div className="d-flex align-items-center">
                <EventIcon className='me-1' />
                <h4 className="p-0 m-0">Reservations</h4>
              </div>

            </li>

            <li
              className={`p-2 ${activeTab === 'cancelled' ? activeTabStyle : ''}`}
              style={{ backgroundColor: activeTab === 'cancelled' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px', cursor: 'pointer', }}
              onClick={() => {
                setSelectedSection('booking');
                fetchCancelled();
              }}
            >
              <div className="d-flex align-items-center">
                <EventBusyIcon className='me-1' />
                <h4 className="p-0 m-0">Cancelled</h4>
              </div>
            </li>

            <li className={`p-2  mt-2 ${activeTab === 'conference' ? activeTabStyle : ''}`}
              style={{ backgroundColor: activeTab === 'conference' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px', cursor: 'pointer', }}
              onClick={() => {
                setSelectedSection('conference');
                fetchConference()
              }}
            > <div className="d-flex align-items-center">
                <GroupsIcon className='me-1' />
                <h4 className="p-0 m-0">Conference</h4>
              </div>

            </li>

            <li className={`p-2  mt-2 ${activeTab === 'comments' ? activeTabStyle : ''}`}
              style={{ backgroundColor: activeTab === 'comments' ? activeTabStyle.backgroundColor : listStyle.backgroundColor, borderRadius: '10px', cursor: 'pointer', }}
              onClick={() => { setSelectedSection('comments'); fetchComments() }}
            >
              <div className="d-flex align-items-center">
                <QuestionAnswerIcon className='me-1' />
                <h4 className="p-0 m-0">Comments</h4>
              </div>

            </li>



          </ul>
          <Button
            variant="outlined"
            className=' mx-2 '
            onClick={() => handleLogout()}
            style={{
              backgroundColor: "#FFD700",
              color: 'black',
              border: "0px",
              marginBottom: '100px'
            }}
          >
            <div className="d-flex align-items-center">
              <div className="me-2 py-1">Logout <LogoutIcon /></div>
            </div>
          </Button>
        </div>
        <div className="w-100  ">

          <div className="px-2 ">
            <div className="d-flex  justify-content-end">
              <Button
                variant="outlined"
                className='my-3 me-3'
                onClick={() => setConferenceShow(true)}
                style={{
                  borderColor: "rgb(128, 0, 0)",
                  color: "rgb(128, 0, 0)"
                }}
              >
                <div className="d-flex align-items-center">
                  <div className="me-2">Book Conference</div> <BorderColorIcon />
                </div>
              </Button>
              <Button
                variant="outlined"
                className='my-3'
                onClick={() => setBookingShow(true)}
                style={{
                  borderColor: "rgb(128, 0, 0,0.8)",
                  color: "rgb(128, 0, 0)"
                }}
              >
                <div className="d-flex align-items-center">
                  <div className="me-2">Book a Room</div> <BorderColorIcon />
                </div>
              </Button>
            </div>
            <Divider />


            {
              handleSelection(selectedSection)
            }
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

      <BookConference
        show={conferenceBookingShow}
        fetchConference={() => fetchConference()}
        onHide={() => {
          setConferenceShow(false)
        }}
      />
    </div>
  )
}

export default Home