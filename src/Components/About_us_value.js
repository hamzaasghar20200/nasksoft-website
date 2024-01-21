import React, { useEffect } from 'react'
import img1 from '../Images/Icon (1).png'
import img2 from '../Images/Icon (2).png'
import img3 from '../Images/Icon (3).png'
import img4 from '../Images/Icon (4).png'
import { BiBulb, BiCopy, BiMedal, BiSolidStar, BiUser } from 'react-icons/bi'
import { useData } from '../Context/Context_Provider'
function About_us_value() {
  const { imag_url, about, getAbout } = useData()
  useEffect(() => {
    getAbout()
  }, [])
  return (
    <>
      <div className='about_us_value'>
        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <div className='value-heading'>
                <h6>
                  {about[0]?.secfive_sub_head}
                </h6>
                <h1>{about[0]?.secfive_heading}</h1>
              </div>
            </div>
          </div>
          <div className='row my-3 mb-4'>
            <div className='col-md-6 mb-3'>
              <div className='value-cards h-100 p-3'>
                <div className='img_container'>
                  <img src={imag_url + about[0]?.secfive_iconone} />
                </div>
                <div className='heading' style={{width:"75%"}}>
                  <h4>{about[0]?.secfive_iconone_head}</h4>
                  <p>{about[0]?.secfive_iconone_desc}</p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='value-cards h-100 p-3'>
                <div className='img_container'>
                <img src={imag_url+about[0]?.secfive_icontwo} />
                </div>
                <div className='heading' style={{width:"75%"}}>
                  <h4>{about[0]?.secfive_icontwo_head}</h4>
                  <p>{about[0]?.secfive_icontwo_desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <div className='value-cards h-100 p-3'>
                <div className='img_container'>
                  <img src={imag_url + about[0]?.secfive_iconthree} />
                </div>
                <div className='heading' style={{width:"75%"}}>
                  <h4>{about[0]?.secfive_iconthree_head}</h4>
                  <p>{about[0]?.secfive_iconthree_desc}</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
              <div className='value-cards h-100 p-3'>
                <div className='img_container'>
                <img src={imag_url+about[0]?.secfive_iconfour} />
                </div>
                <div className='heading' style={{width:"75%"}}>
                  <h4>{about[0]?.secfive_iconfour_head}</h4>
                  <p>{about[0]?.secfive_iconfour_desc}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='row mt-2'> */}
          {/* <div className='col-md-6 mb-3'>
              <div className='value-cards d-flex align-items-end h-100'>
                <div className='row mb-3' style={{alignItems:"center"}}>
                  <div className='col-lg-3 mb-3'  style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <div className='img_container'>
                    <img src={imag_url+about[0]?.secfive_iconthree} />
                    </div>
                  </div>
                  <div className='col-lg-9'>
                    <div className='heading'>
                    <h4>{about[0]?.secfive_iconthree_head}</h4>
                      <p>{about[0]?.secfive_iconthree_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* <div className='col-md-6 mb-3'>
              <div className='value-cards d-flex align-items-end h-100'>
                <div className='row mb-3' style={{alignItems:"center"}}>
                  <div className='col-lg-3 mb-3' style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <div className='img_container'>
                    <img src={imag_url+about[0]?.secfive_iconfour} />
                    </div>
                  </div>
                  <div className='col-lg-9'>
                    <div className='heading'>
                    <h4>{about[0]?.secfive_iconfour_head}</h4>
                      <p>{about[0]?.secfive_iconfour_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default About_us_value