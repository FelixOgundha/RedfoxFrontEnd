import { Button, Divider, TextField } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import happy from '../assets/images/black.webp'
import AuthService from '../services/auth.service'
import { useHistory } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'
function Login() {
  const [isLogin, setIsLogin] = React.useState(true)
  const [isVerified, setIsVerified] = React.useState(false)
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

  const handleLogin = async () => {
    toast.loading('processing')

    try {
      await AuthService.login(userEmail, password).then(
        () => {
          toast.dismiss()
          toast.success('Login Successfull')
          // navigate("/home");
          history.push('/home')
        },
        (error) => {
          console.log(userEmail, password)
          console.log(error);
        }
      );
    } catch (err) {
      toast.dismiss()
      toast.error(err)
      console.log(err);
    }
  }

  const handleVerification = async () => {
    toast.loading('processing')

    try {
      await AuthService.verify(verificationCode).then(
        () => {
          toast.dismiss()
          toast.success('Login Successfull')
          // navigate("/home");
          history.push('/home')
        },
        (error) => {
          console.log(userEmail, password)
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
              <h2 className="mx-5 mb-0">Welcome </h2>
              <p className="mx-5 text-muted mt-0 pt-0">Please enter your details to login</p>
              <TextField id="outlined-basic" label="email" variant="outlined" className='mx-5'
                onChange={(e) => setEmail(e.target.value)}

              />
              <TextField id="outlined-basic" label="Password" variant="outlined" className='my-3 mx-5'
                onChange={(e) => setPassword(e.target.value)}

                type="password" />

              <Button variant="contained" className="bg-info py-2 text-white  mx-5" onClick={() => {
                handleLogin()
              }}>
                Login</Button>



              <p className="text-center mt-3">Don't have an account <Link onClick={() => setIsLogin(false)}

              >SignUp</Link> click <Link
                onClick={
                  () => {
                    setIsLogin(false);
                    setIsVerified(true);
                  }}>here</Link> to verify account</p>
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

                    <p className="text-center mt-3">Have an account <Link onClick={() => setIsLogin(true)}>Login</Link></p>
                  </Col>
              }
            </>
        }
        <Col className=" m-0 p-0"
          style={{ background: '#CEFDFF' }}
          md={6}
        >
          <div className="marketing-image  d-flex flex-column h-100 justify-content-center px-4">
            <img src={happy}
              alt=""
              srcset=""
              className="img-fluid "
            />
            <h3 className="text-center mt-2">Start Your Journey with us</h3>
          </div>
        </Col>
      </Row>


    </div >

  )
}

export default Login
