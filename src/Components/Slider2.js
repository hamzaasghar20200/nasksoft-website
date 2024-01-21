import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useData } from '../Context/Context_Provider';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow2.png';
import dextop from '../Images/Layer_6 (1).png';
import tab from '../Images/Layer_4 (1).png'

function Slider2() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const { caseData, getCaseData } = useData();

    useEffect(() => {
        getCaseData();
    }, []);

    return (
        <div>
            <div className='container bg-dark text-white'>
                <div className='row border'>
                    <div className='col-md-6'>
                        <div style={{ display: 'flex', position: 'relative' }}>
                            <div className='d-flex justify-content-center' style={{ borderRadius: '10px', zIndex: '1', width: '400px', height: '227px', overflow: 'hidden', position: 'relative' }}>
                                <img style={{ position: 'absolute', width: '100%' }} src={dextop}alt='Main' />
                                {/* Replace with actual image path */}
                                <img style={{ position: 'absolute', width: '77%',top:"13px",height:"179px",left:"43px" }} src={caseData?.data?.[activeIndex]?.main_image}/>
                            </div>
                            <div className='d-flex justify-content-center taabLayer' style={{ borderRadius: '10px', zIndex: '1', overflow: 'hidden', position: 'relative', height: '220px', width: '278px' }}>
                                <img style={{ position: 'absolute', width: '100%' }}src={tab} />
                                {/* Replace with actual image path */}
                                <img style={{ position: 'absolute', width: '92%',height:"116px",top:"10px" }}src={caseData?.data?.[activeIndex]?.main_image}  />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div id='carouselExampleControls' className='carousel slide'>
                            <div className='carousel-inner'>
                                {caseData?.data?.map((items, idx) => (
                                    <div key={idx} className={`carousel-item ${activeIndex === idx ? 'active' : ''}`}>
                                        <h2 style={{ color: 'white' }}>{items.title}</h2>
                                        <h3 style={{ color: 'white', wordWrap: 'break-word' }}>{items.description}</h3>
                                        <p style={{ color: 'white' }}>{items.frontend_technology}</p>
                                        <p style={{ color: '#1E96D3' }}>
                                            <img src={arrow} alt='Arrow' /> <Link className='link' to={'#'}>
                                                View Case Study
                                            </Link>
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev' onClick={() => handleSlideChange((activeIndex - 1 + caseData?.data?.length) % caseData?.data?.length)}>
                                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                                <span className='visually-hidden'>Previous</span>
                            </button>
                            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next' onClick={() => handleSlideChange((activeIndex + 1) % caseData?.data?.length)}>
                                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                                <span className='visually-hidden'>Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider2;
