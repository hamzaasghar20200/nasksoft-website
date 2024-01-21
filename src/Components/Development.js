import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import banner1 from "../Images/Frame 38.png"
import arrow from "../Images/arrow.jpeg"
import digital from "../Images/banner.jpg"
import { useData } from '../Context/Context_Provider'
function Development() {
    const params = useParams()
    const {imag_url, developmentData, getDevelopmentData, getIndividualService, individualService, singleService,fistService,getFirstServiceData } = useData()
    useEffect(() => {
        getIndividualService(params.id)
        getFirstServiceData()
    }, [params.id])
    const boxes = document.querySelectorAll('.box')

    window.addEventListener('scroll', checkBoxes)

    checkBoxes()

    function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
          box.classList.add('showDiv')
        } else {
          box.classList.remove('showDiv')
        }
      })
    } 
    return (
        <>
            <div className='development p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 box'>
                            <img src={imag_url+fistService?.secone_imagethree} className='img-fluid h-100' />
                        </div>
                        <div className='col-md-6 p-3 box'>
                            <img src={imag_url+fistService?.secone_imagetwo} height={"80px"} width={"80px"} />
                            <h1>{fistService?.secone_head_one}</h1>
                            <p style={{ wordWrap: "break-word" }}>
                                {fistService?.secone_desc}
                            </p>
                            <h4>Key activities</h4>
                            <ul>
                                <li>{fistService?.sectwo_cardone_iconone_headone}</li>
                                <li>{fistService?.sectwo_cardtwo_icontwo_headtwo}</li>
                                <li>{fistService?.sectwo_cardthree_iconthree_headthree}</li>
                                <li>{fistService?.sectwo_cardfour_iconfour_headfour}</li>
                                <li><Link to={"/services/3"} className='link'><span><img src={arrow} /></span> Our Approch</Link></li>                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Development