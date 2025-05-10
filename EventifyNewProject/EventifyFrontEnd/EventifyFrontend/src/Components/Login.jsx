import React from 'react';
import '../StyleFile/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons'


const Login = () => {
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Login Here</h3>
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user" aria-hidden="true"></i>
              <input type="text" className="login__input" placeholder="User name / Email" aria-label="Username or Email" />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" aria-hidden="true"></i>
              <input type="password" className="login__input" placeholder="Password" aria-label="Password" />
            </div>
            <button className="button login__submit">
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
  );
};

export default Login;
