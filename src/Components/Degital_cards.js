import React, { useEffect } from 'react'
import img1 from '../Images/web-apps 1.png'
import img2 from '../Images/service 1.png'
import img3 from '../Images/idea 2.png'
import img4 from '../Images/product 1.png'
import { useData } from '../Context/Context_Provider'

function Degital_cards() {
    const { imag_url, design, getDesignData } = useData()
    useEffect(() => {
        getDesignData()
    }, [])
    return (
        <>
            <div className='degital_cards pb-5' style={{ backgroundColor: "#fbfbfb" }}>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-6 d-flex bg-col align-items-center mb-3'>
                            <div className='text'>
                                <h1>
                                    {design[0]?.sectwo_heading_one} <br />
                                    {design[0]?.sectwo_heading_two} <br />
                                    {design[0]?.sectwo_heading_three}
                                </h1>
                                <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: design[0]?.sectwo_desc }}></p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='row mb-3'>
                                <div className='col-md-6 mb-3'>
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={imag_url + design[0]?.sectwo_cardone_iconone} />
                                            <h5 className="card-title my-3">{design[0]?.sectwo_cardone_iconone_headone} <br /> {design[0]?.sectwo_cardone_iconone_sub_headone}</h5>
                                            <p className="card-text">{design[0]?.sectwo_cardone_iconone_descone}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6 cont mb-3'>
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={imag_url + design[0]?.sectwo_cardtwo_icontwo} />
                                            <h5 className="card-title my-3">{design[0]?.sectwo_cardtwo_icontwo_headtwo} <br /> {design[0]?.sectwo_cardtwo_icontwo_sub_headtwo}</h5>
                                            <p className="card-text">{design[0]?.sectwo_cardtwo_icontwo_desctwo}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={imag_url + design[0]?.sectwo_cardthree_iconthree} />
                                            <h5 className="card-title my-3">{design[0]?.sectwo_cardthree_iconthree_headthree} <br /> {design[0]?.sectwo_cardthree_iconthree_sub_headthree}</h5>
                                            <p className="card-text">{design[0]?.sectwo_cardthree_iconthree_descthree}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6 mb-3 cont'>
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={imag_url + design[0]?.sectwo_cardfour_iconfour} />
                                            <h5 className="card-title my-3">{design[0]?.sectwo_cardfour_iconfour_headfour} <br /> {design[0]?.sectwo_cardfour_iconfour_sub_headfour}</h5>
                                            <p className="card-text">{design[0]?.sectwo_cardfour_iconfour_descfour}</p>
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

export default Degital_cards