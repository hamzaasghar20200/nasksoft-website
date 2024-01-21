import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../Context/Context_Provider'

function Innovate() {
    const { inovate, getInovate } = useData()
    useEffect(() => {
        getInovate()
    }, [])  
    return (
        <>
            <div className='innovate_container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='inovate_content text-center py-5'>
                                <h1>
                                    <span className='stroke'>{inovate[0]?.heading}</span> <span>{inovate[0]?.heading_one}</span> <span className='stroke'>{inovate[0]?.heading_two}</span> <span>{inovate[0]?.heading_three}</span> <span className='stroke'>.</span>
                                </h1>
                                <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: inovate[0]?.description }}></p>
                                <button>
                                    <Link to={"/contact_us"} className='link btn'> {inovate[0]?.button_name}</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Innovate