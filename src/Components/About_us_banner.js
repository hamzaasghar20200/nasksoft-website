import React, { useEffect } from 'react'
import img1 from '../Images/Photo.jpg'
import img2 from '../Images/Photo1.png'
import { useData } from '../Context/Context_Provider'
function About_us_banner() {
  const {imag_url, about, getAbout } = useData()
  useEffect(() => {
    getAbout()
  }, [])
  return (
    <>
      <div className='about_us_banner mt-5 my-3'>
        <div className='container mt-3 pt-5'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='banner-text text-center'>
                <h1 style={{color:"#003854",fontWeight:"bold"}}>{about[0]?.secone_heading}</h1>
                <p style={{color:"#727272"}}>
                  {about[0]?.secone_sub_head}
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-7 mb-3'>
              <div className='about_img'>
                <img src={imag_url+about[0]?.secone_imageone} style={{ width: '100%', height: '450px' }} />
              </div>
            </div>
            <div className='col-md-5'>
              <div className='about_img'>
                <img  src={imag_url+about[0]?.secone_imagetwo} style={{ width: '100%', height: '450px', objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About_us_banner