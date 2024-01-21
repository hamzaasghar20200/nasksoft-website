import React, { useEffect } from 'react';
import { useData } from '../Context/Context_Provider';
import { useParams } from 'react-router-dom';

function Development_cards() {
    const params = useParams()
    const {imag_url, developmentData, getDevelopmentData, getIndividualService, individualService, singleService } = useData()
    useEffect(() => {
        getIndividualService(params.id)
    }, [params.id])
    return (
        <>
            <div className='development_cards pb-5' style={{backgroundColor:"#fbfbfb"}}>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center cardTextContainer'>
                            <div className='text w-100'>
                                <h1 style={{ wordWrap: "break-word" }}>
                                    {individualService?.sectwo_heading}
                                </h1>
                                <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html:individualService?.sectwo_desc}}></p>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='row mb-3'>
                                <div className='col-md-6 mb-3'>
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{height:"30px", width:"30px",objectFit:"contain"}} src={imag_url+individualService?.sectwo_cardone_iconone} alt="Card 1" />
                                            <h5 className="card-title my-3">{individualService?.sectwo_cardone_iconone_headone}</h5>
                                            <p className="card-text">{individualService?.sectwo_cardone_iconone_descone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 mb-3 cont'>
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{height:"30px", width:"30px",objectFit:"contain"}} src={imag_url+individualService?.sectwo_cardtwo_icontwo} alt="Card 2" />
                                            <h5 className="card-title my-3">{individualService?.sectwo_cardtwo_icontwo_headtwo}</h5>
                                            <p className="card-text">{individualService?.sectwo_cardtwo_icontwo_desctwo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{height:"30px", width:"30px",objectFit:"contain"}} src={imag_url+individualService?.sectwo_cardthree_iconthree} alt="Card 3" />
                                            <h5 className="card-title my-3">{individualService?.sectwo_cardthree_iconthree_headthree}</h5>
                                            <p className="card-text">{individualService?.sectwo_cardthree_iconthree_descthree}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 mb-3 cont'>
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{height:"30px", width:"30px",objectFit:"contain"}} src={imag_url+individualService?.sectwo_cardfour_iconfour} alt="Card 4" />
                                            <h5 className="card-title my-3">{individualService?.sectwo_cardfour_iconfour_headfour}</h5>
                                            <p className="card-text">{individualService?.sectwo_cardfour_iconfour_descfour}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Development_cards;
