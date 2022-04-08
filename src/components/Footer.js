import VulcanIcon from './VulcanIcon';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

// @material-ui/icons/


import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <VulcanIcon style={{width: '100px'}} />
      <div className="footer-info">
        <div className="links">
          <FacebookRoundedIcon />
          <LinkedInIcon />
          <div className="type-box">
            <LocalPhoneRoundedIcon />
            <p>+1 712-642-2755</p>
          </div>
          <div className="type-box">
            <EmailRoundedIcon />
            <p>Contact Us</p>
          </div>
        </div>   
        <h3>Copyright 2017. All rights reserved</h3>
      </div>
    </footer>
  )
}

export default Footer