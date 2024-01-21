import React, { useEffect } from 'react'
// import img1 from '../Images/cas3 (1).png'
// import img2 from '../Images/cas3 (2).png'
import { useData } from '../Context/Context_Provider'

function Header() {
  const { caseBanner, getcasebanner, imag_url } = useData()
  useEffect(() => {
    getcasebanner()
  }, [])
  return (
    <>
      <div className='caseStudy-header'>
        <div className='container-fluid p-0'>
          <div className='header-bg'>
            <img src={imag_url + caseBanner[0]?.background_image} className='casemask2' />
            <div className='header-heading text-center mx-auto'>
              <h1>{caseBanner[0]?.heading}</h1>
              <h4>{caseBanner[0]?.description}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
