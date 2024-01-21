import React from 'react'
import image from '../Images/wow.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Development_feature() {
    return (
        <>
            <div className='growth' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1 className='mb-4' style={{wordWrap:"break-word"}}>There's a lot that NaskSoft can do for you.</h1>
                            <p>Enhance Your Brand's Growth With Improved US/UX </p>
                        </div>
                    </div>
                    <div className='row mb-4 mt-3'>
                        <div className='col-md-3 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>Customer</h3>
                                    <h6>Retension</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>Reduced Time</h3>
                                    <h6>for Development</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>Productivity</h3>
                                    <h6>Improvement</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>Expenditures</h3>
                                    <h6>are Reduced</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h3 style={{color:"#727272"}}>Are you looking for Powerful Dynamic Web Development Services to <br /> help your company expand faster?</h3>
                            <button>
                                <Link to={"/contact_us"} className='link btn'>Enquire Now</Link>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Development_feature