import React, { useEffect } from 'react'
import "./Footer.css"
import axios from '../../api/axios'
import images from '../../assets'
export const Footer = () => {
  const getInfo= async()=>{
    try {
      const response = await axios.get("/api/settings", {
        headers: {
          Accept: 'application/json',
        },
      })
      console.log(response);
      
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with an error status code
        console.error('Server Error:', error.response.status);
        console.error('Server Response Data:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('Network Error:', error.message);
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
      }
    }
  }
  useEffect(() => {
    getInfo()
  }, [])
  
  return (
    <div className='app__footer' id='footer'>
      <div className="app__footer-copyright">
     <p> Copyright @ATHER2023. All Rights Reserved.</p>
      </div>
      <div className="app__footer-brands">
        <a href="#">
        <img src={images.footer1} alt="footerimages1" />
        </a>
        <a href="#">
        <img src={images.footer2} alt="footerimages2" />
        </a>
        <a href="#">
        <img src={images.footer3} alt="footerimages3" />
        </a>
      </div>
    </div>
  )
}
