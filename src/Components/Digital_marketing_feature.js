import React from 'react'
import image from '../Images/wow.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Digital_marketing_feature() {
    return (
        <>
            <div className='growth Digital_marketing_feature p-5' >
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <h1 className='mb-4'>There's a lot that SEO can do for you.</h1>
                            <p>What Can You Do To Improve Your Online Presence? </p>
                        </div>
                    </div>
                    <div className='row mb-4 mt-3'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>Maintainance</h3>
                                    <h6>Website Maintainance</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>Implementing</h3>
                                    <h6>Acquiring local results</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>Control</h3>
                                    <h6>easy to Control</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>SEO Tatics</h3>
                                    <h6>Improved Website Ranking</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h3>Are you looking for a fascinating SEO Solution to <br /> help your website grow faster?</h3>
                            <button>
                                <Link to={"#"} className='link btn'>Enquire Now</Link>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Digital_marketing_feature