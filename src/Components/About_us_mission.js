import React, { useEffect } from 'react'
import imag1 from '../Images/Image (1).png'
import { useData } from '../Context/Context_Provider'

function About_us_mission() {
  const { imag_url, about, getAbout } = useData()
  useEffect(() => {
    getAbout()
  }, [])
  return (
    <>
      <div className='about_us_mission'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='content'>
                <h3 style={{fontWeight:"bold"}}>{about[0]?.secfour_heading}</h3>
                <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: about[0]?.secfour_desc }}></p>
              </div>
            </div>
            <div className='col-md-6 p-0' style={{display:"flex",alignItems:"center"}}>
              <div className='image'>
                <img src={imag_url + about[0]?.secfour_image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About_us_mission