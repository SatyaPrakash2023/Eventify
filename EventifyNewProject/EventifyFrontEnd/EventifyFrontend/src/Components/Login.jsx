import React, { useState } from 'react';
import '../StyleFile/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from '../EventifyImages/Logo.png';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../Services/UserServics';

const Login = () => {
  const [userName, setUserName] = useState('');
    const [passwordFst, setPasswordFst] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    async function Login() {
      try {
        // Make sure userName and passwordFst are defined
        const response = await LoginUser(userName, passwordFst); 
        setMessage(response.data);  // Assuming the response contains the message in response.data
        setShowPopup(true); // Show the pop-up
        console.log('Login successful:', response);
        console.log(response.data);
        // Hide the pop-up after 2 seconds and navigate to home
       setTimeout(() => {
        setShowPopup(false);
        navigate('/Home');
       }, 2000);
      } catch (error) {
        setMessage(error.response?.data || 'Invalid username or password');
        setShowPopup(true); // Show the error pop-up
        console.error('Login failed:', error);

        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      }
    }





  return (
   <>
    <nav className="navbar navbar-light bg-dark">
          <div className="container-fluid">
           <a className="navbar-brand" href="http://localhost:3000" style={{ color: '#fff', marginLeft: '0.1cm' }}>
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            Eventify
          </a>
          </div>
        </nav>

    <div className="container" style={{
      background: 'linear-gradient(90deg, #C7C5F4, #776BCC)', 
      height: '100vh', 
      width: '250vw', 
      margin: '0',
      padding:'0',
      overflow: 'hidden',
      position: 'absolute', // Ensure it's positioned absolutely for full screen
      minWidth: '100%', // Ensures the container expands to at least 100%
      minHeight: '100%'
      }}>
      <div className="screen">
        {showPopup && (
            <div className="popup-message">
              <p>{message}</p>
            </div>
        )}
        <div className="screen__content">
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Login Here</h3>
          <form className="login" onSubmit={(e) => e.preventDefault()}>
            <div className="login__field">
              <i className="login__icon fas fa-user" aria-hidden="true"></i>
                <input type="text" className="login__input" placeholder="User name / Email" aria-label="Username or Email"
                name='userName' value={userName} onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" aria-hidden="true"></i>
                <input type="password" className="login__input" placeholder="Password" aria-label="Password"
                 name='passwordFst' value={passwordFst} onChange={(e) => setPasswordFst(e.target.value)}
                />
            </div>
            <button className="button login__submit" onClick={Login}>
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" aria-hidden="true"></i>
            </button>        
          </form>
          <div className="social-login">
            <h3 style={{ marginTop: '20px' }}>Log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="social-login__icon fab fa-facebook" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="social-login__icon fab fa-twitter" aria-label="Twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
    </>  
  );
};

export default Login;
