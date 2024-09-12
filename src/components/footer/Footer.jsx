import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href="https://www.instagram.com/"><InstagramIcon /></a>
          <a href="https://www.facebook.com/"><FacebookIcon /></a>    

        </div>
        <p>Copyright &copy; 2024</p>
      
    </div>
  )
}

export default Footer
