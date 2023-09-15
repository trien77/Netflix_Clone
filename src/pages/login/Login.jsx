import React from 'react'
import "./login.scss"
const Login = () => {


  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="logo" />
            </div>
        </div>
       <div className="container">
           <form action="">
              <h1>Sign in</h1>
              <input type="email" placeholder='Email or phone number' />
              <input type="password" placeholder='Password ' />
              <button className="loginButton">Sign In</button>
              <span>New to Netflix? <b>Sign up now.</b></span>
              <small>This page is protected by Google reCATCHA to ensure you're not bot <b>Learn more</b></small>
           </form>
       </div>
    </div>
  )
}

export default Login
