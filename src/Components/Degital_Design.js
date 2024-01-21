import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Banner from './Banner'
import digital from "../Images/ui-ux-design.jpg"
import banner from "../Images/Frame 42.png"
import arrow from "../Images/arrow.jpeg"
import { useData } from '../Context/Context_Provider'

function Degital_Design() {
    const {imag_url, design, getDesignData } = useData()
    useEffect(() => {
        getDesignData()
    }, [])
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
            <div className='digital p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 p-3 box'>
                            <img src={imag_url+design[0]?.secone_imagetwo} height={"80px"} width={"80px"} />
                            <h1>{design[0]?.secone_head_one}</h1>
                            <p style={{wordWrap:"break-word"}}>
                            {design[0]?.secone_desc}
                            </p>
                            <h4>Key activities</h4>
                            <ul className='ulLists'>
                                <li>{design[0]?.sectwo_cardone_iconone_headone} {design[0]?.sectwo_cardone_iconone_sub_headone}</li>
                                <li>{design[0]?.sectwo_cardtwo_icontwo_headtwo} {design[0]?.sectwo_cardtwo_icontwo_sub_headtwo}</li>
                                <li>{design[0]?.sectwo_cardthree_iconthree_headthree} {design[0]?.sectwo_cardthree_iconthree_sub_headthree}</li>
                                <li>{design[0]?.sectwo_cardfour_iconfour_headfour} {design[0]?.sectwo_cardfour_iconfour_sub_headfour}</li>
                                <li><Link to={"/design"} className='link'><span><img src={arrow}/></span> Our Approch</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-6 box'>
                            <img src={imag_url+design[0]?.secone_imagethree} className='img-fluid h-100' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Degital_Design