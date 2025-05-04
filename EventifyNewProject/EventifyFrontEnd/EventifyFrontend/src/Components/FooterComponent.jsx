import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {
  return (
    <div>
          <footer className='footer'>
          <div className="foot-dev">
            <h5>Follow Us</h5>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/SatyaPrakash2023" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
       <p className="mb-0">&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p> 
      </footer>
    </div>
  )
}

export default FooterComponent
