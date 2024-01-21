import React from 'react'
import img1 from '../Images/home-naskstudio 1.png';
import grop12 from '../Images/Layer_6 (1).png'
import { FaArrowUp } from 'react-icons/fa'

function Digital_marketing_case() {
    return (
        <>
            <div className='case_study p-5'>
                <div className='bgImg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <div className='scrollAnimation'>
                                    {/* <img src={img1} height={"500px"} width="100%" /> */}
                                    <div className='d-flex justify-content-center align-items-center caseContainer' style={{ borderRadius: "10px", zIndex: "1", width: "513px", height: "227px", position: "relative" }}>
                                        <img style={{ position: "absolute", width: "100%" }} src={grop12} />
                                        <div className='caseImgContaier animTmgContainer casecainter' style={{ position: "relative", width: "397px", height: "250px", marginLeft: "1px", marginTop: "-7px" }}>
                                            <img className='caseImg animateImge3' style={{ position: "absolute", height: "100%", width: "100%" }} src={img1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='case_content'>
                                    <h2>CASE STUDY</h2>
                                    <h1 className='h'>wholesaleshopping</h1>
                                    <p className='text-white'>
                                        Wholesale shipping is the home of premium B2B wholesale fashions, footwear and accessories.
                                    </p>
                                    <div className='ravenue'>
                                        <div className='ravenue-1 mb-3'>
                                            <div>
                                                <h1>
                                                    <span><FaArrowUp className='icon' /></span>
                                                    <span>77%</span>
                                                </h1>
                                                <p>
                                                    Increase in Revenue Monthly
                                                </p>
                                            </div>
                                            <div>
                                                <h1>
                                                    <span><FaArrowUp className='icon' /></span>
                                                    <span>50.4%</span>
                                                </h1>
                                                <p>
                                                    New orders Monthly
                                                </p>
                                            </div>
                                        </div>
                                        <div className='ravenue-1 mb-3'>
                                            <div>
                                                <h1>
                                                    <span><FaArrowUp className='icon' /></span>
                                                    <span>126%</span>
                                                </h1>
                                                <p>
                                                    Organic traffic Monthly
                                                </p>
                                            </div>
                                            <div className='lastCase' style={{ marginLeft: "40px" }}>
                                                <h1>
                                                    <span><FaArrowUp className='icon' /></span>
                                                    <span>68.2%</span>
                                                </h1>
                                                <p>
                                                    Returning Customers Rate
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Digital_marketing_case