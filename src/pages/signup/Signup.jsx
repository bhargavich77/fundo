import React from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';



function Signup() {
  return (
    <div className="topbar1">
       
            <div className="container">
              <div className="section1">
                <div className="google-logo">
                  <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" width="80px" alt="Google"/>
                </div>

                <div className="account">
                  <h3>Create your Google Account</h3>
                </div>
                <div className="Person_Name">
                  <div className="firstName">
                  <TextField id="outlined-basic" label="First name" variant="outlined" size="small"/>
                  </div>
                  <div class="lastName">
                  <TextField id="outlined-basic" label="Last name" variant="outlined" size="small" />
                  </div>
                </div>

                <div className="username">
                <TextField id="outlined-basic" label="Username" variant="outlined" className="username" size="small" />
                <h5>You can use letters,numbers&periods</h5>
                </div>

                <div className="current">
                    <Link href="#" className="current-email-add-text" underline="none">Use my current email address instead</Link>
                </div>
                <div className="password-confirm">
                    <div className="password-text">
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small"/> 
                    </div>
                    <div className="confirm-text">
                    <TextField id="outlined-basic" label="Confirm" variant="outlined" size="small"/>
                    </div> 
                </div>
                <div className="use-8-or-more-characters">
                    <h5>Use 8 or more characters with a mix of letters,numbers and symbols</h5>
                </div>
                <div className="pswd-box">
                    <input type="checkbox" name="box" value="show password"/>
                    <label for="show password">Show Password</label>
                </div>

                <div className="footer">
                    <div className="sign-in-instead">
                        <Link href="#" underline="none">Sign in instead</Link>
                    </div>
                    <div className="next-button">
                    <Button variant="contained">Next</Button>
                    </div>
                </div>
            </div>
              <div className="section2">
                <div className="image_container">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"></img>
                </div>
                <div className="text">
                    <h4>One account. All of Google working <br></br>
                    for you.</h4>
                </div>
              </div>
            </div>
            </div>
    
    
  )
}

export default Signup