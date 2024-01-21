import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider'
function Digital_marketing_process() {
    const { imag_url,digitalMarketingData, getDigitalMarketing } = useData()
    useEffect(() => {
        getDigitalMarketing()
    }, [])
    return (
        <>
            <div className='digital_marketing_process p-5'>
                <div className='container'>
                    <div className='row top'>
                        <div className='col-12'>
                            <h3 style={{color:"white",fontWeight:"bold"}}>{digitalMarketingData[0]?.secthree_heading}</h3>
                            <p style={{wordBreak:"break-word"}} dangerouslySetInnerHTML={{ __html: digitalMarketingData[0]?.secthree_desc }}></p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='text1'>
                                <h1>{digitalMarketingData[0]?.secthree_countone}</h1>
                                <div className='overlay'>
                                    <h3>{digitalMarketingData[0]?.secthree_countone_head}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='picture'>
                                <img src={imag_url+digitalMarketingData[0]?.secthree_countone_icon}/>
                            </div>
                            <div className='lines'>
                                <p>
                                  {digitalMarketingData[0]?.secthree_countone_desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='text1'>
                                <h1>{digitalMarketingData[0]?.secthree_counttwo}</h1>
                                <div className='overlay'>
                                    <h3>{digitalMarketingData[0]?.secthree_counttwo_head}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='picture'>
                                <img src={imag_url+digitalMarketingData[0]?.secthree_counttwo_icon}/>
                            </div>
                            <div className='lines'>
                                <p>
                                  {digitalMarketingData[0]?.secthree_counttwo_desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='text1'>
                                <h1>{digitalMarketingData[0]?.secthree_countthree}</h1>
                                <div className='overlay'>
                                    <h3>{digitalMarketingData[0]?.secthree_countthree_head}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='picture'>
                                <img src={imag_url+digitalMarketingData[0]?.secthree_countthree_icon}/>
                            </div>
                            <div className='lines'>
                                <p>
                                  {digitalMarketingData[0]?.secthree_countthree_desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='text1'>
                                <h1>{digitalMarketingData[0]?.secthree_countfour}</h1>
                                <div className='overlay'>
                                    <h3>{digitalMarketingData[0]?.secthree_countfour_head}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='picture'>
                                <img src={imag_url+digitalMarketingData[0]?.secthree_countfour_icon}/>
                            </div>
                            <div className='lines'>
                                <p>
                                  {digitalMarketingData[0]?.secthree_countfour_desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='text1'>
                                <h1>02</h1>
                                <div className='overlay'>
                                    <h3>Strategy</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='picture'>
                                <img src={image2}/>
                            </div>
                            <div className='lines'>
                                <p>
                                    Before a contract have ever signed, we pop the hood on your business with a detailed <br /> appraisel of your SEO strrategy. You can an in-depth report on what's working, what's <br /> not, and what opportunities we've found for serious growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='text1'>
                                <h1>03</h1>
                                <div className='overlay'>
                                    <h3>Implementation</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='picture'>
                                <img src={image3}/>
                            </div>
                            <div className='lines'>
                                <p>
                                    Before a contract have ever signed, we pop the hood on your business with a detailed <br /> appraisel of your SEO strrategy. You can an in-depth report on what's working, what's <br /> not, and what opportunities we've found for serious growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='text1'>
                                <h1>04</h1>
                                <div className='overlay'>
                                    <h3>Result, Rinse, Repeat</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='picture'>
                                <img src={image4}/>
                            </div>
                            <div className='lines'>
                                <p>
                                    Before a contract have ever signed, we pop the hood on your business with a detailed <br /> appraisel of your SEO strrategy. You can an in-depth report on what's working, what's <br /> not, and what opportunities we've found for serious growth.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Digital_marketing_process