import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './Signin.css'

function Signin() {
  return (
    
          <div className="topbar">
            <div className="container">
              <div className="section1">
                <div className="google-logo">
                  <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" width="80px" alt="Google"/>
                </div>

                <div className="title">
                  <h3>Sign in</h3>
                </div>
                <div className="hint">
                  <h2>Use your Google Account</h2>
                </div>
              </div>
              <div className="section2">
                <div className="email_field">
                <TextField id="outlined-basic" label="Email or phone" variant="outlined" className="email"/>
                <div className="forgot"><Link href="#" underline="none">Forgot email?</Link></div>
                </div>

                <div className="text">
                  <p>Not your computer? Use Guest mode to sign in privately.</p>
                  <div className="link">
                  <Link href="#" underline="none">Learn more</Link></div>
                </div>

                <div className="footer">
                  <div className="create">
                    <Link href="#" underline="none">Create Account</Link>
                  </div>
                  <div className="button">
                  <Button variant="contained">Next</Button>
                  </div>
                </div>



              </div>


            </div>
          </div>
    
  )
}

export default Signin