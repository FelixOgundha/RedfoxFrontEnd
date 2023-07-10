import { Button, Divider, TextField, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import happy from '../assets/images/black.webp'
import AuthService from '../services/auth.service'
import { useHistory } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import mainImage from '../assets/images/main.png'


function Login() {
  const [isLogin, setIsLogin] = React.useState(true)
  const [isVerified, setIsVerified] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [userEmail, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [IdNumber, setIdNumber] = React.useState('')
  const [confirmPass, setConfirmPass] = React.useState('')
  const [role, setRole] = React.useState('standard')
  const [verificationCode, setVerficationCode] = React.useState('standard')


  const history = useHistory();

  const handleSignUp = async () => {
    toast.loading('processing...')
    try {
      await AuthService.signup(userEmail, password, role, firstName,
        lastName, "35497898", confirmPass).then(
          (response) => {
            // check for token and user already exists with 200
            //   console.log("Sign up successfully", response);
            toast.dismiss()
            setIsVerified(true)
          },
          (error) => {
            toast.dismiss()
            console.log(error);
          }
        );
    } catch (err) {
      console.log(err);
    }
  }

  const handleUserLogin = () => {

    toast.loading('processing...')

    setIsLoading(true)
    const user = {
      email: userEmail,
      password: password
    }
    return axios
      .post("https://api-dhejomel.azgard.co.ke/api/Users/Login",
        user
      )
      .then((response) => {
        var userDetails = {
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          id: response.data.id
        }

        localStorage.setItem("DhejomelToken", JSON.stringify(response.data.token));
        localStorage.setItem("DhejomelUser", JSON.stringify(userDetails));
        toast.dismiss()
        window.location = "/home"



      }).catch((e) => {
        toast.dismiss()
        toast.error(e.response?.data)
        console.log(e);
      });
  };

  const handleVerification = async () => {
    toast.loading('processing')

    try {
      await AuthService.verify(verificationCode).then(
        () => {
          toast.dismiss()
          toast.success('Email Verified')
          // navigate("/home");
          window.location = '/login';
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      toast.dismiss()
      toast.error(err)
      console.log(err);
    }
  }

  return (

    <div className="d-flex m-0 p-0" style={{ height: '100vh', width: '100%' }} >
      <Toaster />
      <Row style={{ height: '100vh', width: '100%', margin: 0, padding: 0 }} >
        {
          isLogin ?
            <Col className="login-form  d-flex flex-column h-100 justify-content-center"
              style={{ background: 'white' }}
              md={6}>
              <h2 className="mx-5 mb-0">Dhejomel Hotel Admin </h2>
              <Typography variant='subtitle1' className="mx-5 my-2 text-muted mt-0 pt-0">Please enter your details to login</Typography>
              <TextField id="outlined-basic" label="email" variant="outlined" className='mx-5'
                onChange={(e) => setEmail(e.target.value)}

              />
              <TextField id="outlined-basic" label="Password" variant="outlined" className='my-3 mx-5'
                onChange={(e) => setPassword(e.target.value)}

                type="password" />

              <Button
                variant="contained"
                className=" py-2 text-dark  mx-5"
                style={{ backgroundColor: "#FFD700" }}
                onClick={() => handleUserLogin()}
              >
                Login</Button>

            </Col>
            :
            <>
              {
                isVerified ?
                  <Col className="login-form  d-flex flex-column h-100 justify-content-center">
                    <div className="mx-5">
                      <h4 >Verify your Email Address</h4>
                      <p>Check your email for verification code</p>
                    </div>
                    <TextField
                      id="outlined-basic"
                      label="Enter Verification Code"
                      variant="outlined"
                      className='mx-5 mb-3'
                      onChange={(e) => setVerficationCode(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      className="bg-info py-2 text-white mx-5"
                      onClick={() => handleVerification()}
                    >Verify Email</Button>
                  </Col> :
                  <Col className="login-form  d-flex flex-column h-100 justify-content-center"
                    style={{ background: 'white' }}
                    md={6}>
                    <h2 className="mx-5 mb-1">Create Account</h2>
                    <Divider className='mb-2 mx-5' />
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      className='mx-5 mb-3'
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      className='mx-5 '
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      className='mx-5 mt-3'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="National Id Number"
                      variant="outlined"
                      className='mx-5 mt-3'
                      onChange={(e) => setIdNumber(e.target.value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      className='my-3 mx-5'
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                      className='mb-3 mx-5'
                      type="password"
                      onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      className="bg-info py-2 text-white mx-5"
                      onClick={() => handleSignUp()}
                    >Sign Up</Button>

                    <p className="text-center mt-3">Have an account <Link onClick={() => setIsLogin(true)}> <strong>Login</strong> </Link></p>
                  </Col>
              }
            </>
        }
        <Col className=" m-0 p-0"
          style={{ backgroundColor: "rgb(128, 0, 0,0.9)" }}
          md={6}
        >
          <div className="marketing-image  d-flex flex-column h-100 justify-content-center px-4">
            <img src={mainImage}
              alt=""
              srcset=""
              className="img-fluid "
            />
            <Typography variant='h4' className="text-center text-warning ">Home Away From Home</Typography>
          </div>
        </Col>
      </Row>


    </div >

  )
}

export default Login
