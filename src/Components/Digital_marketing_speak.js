import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../Context/Context_Provider'
function Digital_marketing_speak() {
    const { imag_url, digitalMarketingData, getDigitalMarketing } = useData()
    useEffect(() => {
        getDigitalMarketing()
    }, [])
    return (
        <>
            <div className='digital_marketing_speak'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-5 mb-3'>
                            <div className='speak-heading'>
                                <h1>{digitalMarketingData[0]?.secfour_headingone}</h1>
                            </div>
                            <div className='speak-text'>
                                <p style={{ wordWrap: "break-word" }}>
                                    {digitalMarketingData[0]?.secfour_desc}
                                </p>

                                <button>
                                    <Link to={"/contact_us"} className='link btn'>{digitalMarketingData[0]?.secfour_button_name}</Link>
                                </button>
                            </div>
                        </div>
                        <div className='col-md-7 mb-3'>
                            <img src={imag_url + digitalMarketingData[0]?.secfour_image} className='img' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Digital_marketing_speak
