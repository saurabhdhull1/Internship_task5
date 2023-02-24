import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='mainlogin'>
    <div className="login-div">
      <div className="logo"><i className="bi bi-airplane"></i></div>
      <div className="title">Yatari</div>
      <div className="subtitle">Made easy!</div>
      <div className="fields">
        <div className="username">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
            />
          </svg>
          <input type="username" className="user-input" placeholder="Username" />
        </div>
        <div className="Password">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
            />
          </svg>
          <input type="Password" className="pass-input" placeholder="Password" />
        </div>
      </div>
      <button className="signin-button">Login</button>
	  <div className="link">
		<a href="#">Forgot password</a> or <a href="#">Sign Up</a>
	  </div>
    </div>
    </div>
  )
}

export default ContactUs