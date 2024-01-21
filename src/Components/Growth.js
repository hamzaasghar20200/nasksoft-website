import React, { useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useData } from '../Context/Context_Provider'
function Growth() {
const {growth, getGrowthData } =useData()
    useEffect(() => {
        getGrowthData()
    }, [])
    return (
        <>
            <div className='growth p-5' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1 className='mb-4' style={{wordWrap:"break-word"}}>{growth[0]?.heading}</h1>
                            <p style={{wordWrap:"break-word"}}>{growth[0]?.description} </p>
                        </div>
                    </div>
                    <div className='row mb-4 mt-3'>
                        <div className='col-md-3 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                    <h3>{growth[0]?.iconone_heading}</h3>
                                    <h6>{growth[0]?.iconone_sub_head}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                <h3>{growth[0]?.icontwo_heading}</h3>
                                    <h6>{growth[0]?.icontwo_sub_head}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                <h3>{growth[0]?.iconthree_heading}</h3>
                                    <h6>{growth[0]?.iconthree_sub_head}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <div className='contents'>
                                <div className='arrowIcon'>
                                    <span className='icon-circle'><BsArrowRight className='icon' /></span>
                                </div>
                                <div className='text'>
                                <h3>{growth[0]?.iconfour_heading}</h3>
                                    <h6>{growth[0]?.iconfour_sub_head}</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h3>{growth[0]?.sub_heading}</h3>
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

export default Growth