import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider'
function Digital_marketing_cards() {
    const { imag_url, digitalMarketingData, getDigitalMarketing } = useData()
    useEffect(() => {
        getDigitalMarketing()
    }, [])
    return (
        <>
            <div className='digital_marketing_cards mb-5 mt-3 p-5'>
                <div className='container pb-5'>
                    <div className='row'>
                        <div className='col-md-6 '>
                            <div className='row d-flex align-items-center'>
                                <div className='text'>
                                    <h1>
                                        {digitalMarketingData[0]?.sectwo_headingone}
                                    </h1>
                                    <p style={{ wordBreak: "break-word" }}>
                                        {digitalMarketingData[0]?.sectwo_desc}
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 mb-3 downcrds'>
                                    <div className="listCrds">
                                        <div className="card-body">
                                            <img src={imag_url+digitalMarketingData[0]?.sectwo_cardone_icon} style={{ width: "50px", height: "50px" }} />
                                            <h4 className="card-title my-3" style={{ wordWrap: "break-word" }}>{digitalMarketingData[0]?.sectwo_cardone_head}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: digitalMarketingData[0]?.sectwo_cardone_desc }}></p>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6 cont mb-3'>
                                    <div className="listCrds">
                                        <div className="card-body">
                                            <img src={imag_url+digitalMarketingData[0]?.sectwo_cardtwo_icon} style={{ width: "50px", height: "50px" }} />
                                            <h4 className="card-title my-3" style={{ wordWrap: "break-word" }}>{digitalMarketingData[0]?.sectwo_cardtwo_head}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: digitalMarketingData[0]?.sectwo_cardtwo_desc }}></p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className='col-md-6'>
                            <div className='row mb-3'>
                                <div className='col-md-6 mb-3 cards2' style={{ position: "relative", top: "27px" }}>
                                    <div className="listCrds">
                                        <div className="card-body">
                                            <img src={imag_url+digitalMarketingData[0]?.sectwo_cardthree_icon} style={{ width: "50px", height: "50px" }} />
                                            <h4 className="card-title my-3" style={{ wordWrap: "break-word" }}>{digitalMarketingData[0]?.sectwo_cardthree_head}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: digitalMarketingData[0]?.sectwo_cardthree_desc }}></p>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6 cont downcrds2'>
                                    <div className="listCrds">
                                        <div className="card-body">
                                            <img src={imag_url+digitalMarketingData[0]?.sectwo_cardfour_icon} style={{ width: "50px", height: "50px" }} />
                                            <h4 className="card-title my-3" style={{ wordWrap: "break-word" }}>{digitalMarketingData[0]?.sectwo_cardfour_head}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: digitalMarketingData[0]?.sectwo_cardfour_desc }}></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 mb-3' style={{ position: "relative", top: "19px" }}>
                                    <div className="listCrds">
                                        <div className="card-body">
                                            <img src={imag_url+digitalMarketingData[0]?.sectwo_cardfive_icon} style={{ width: "50px", height: "50px" }} />
                                            <h4 className="card-title my-3">{digitalMarketingData[0]?.sectwo_cardfive_head}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: digitalMarketingData[0]?.sectwo_cardfive_desc }}></p>
                                        </div>
                                    </div>

                                </div>

                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

export default Digital_marketing_cards