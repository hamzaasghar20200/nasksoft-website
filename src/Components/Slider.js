import React, { useEffect, useState } from 'react';
import arrow_left from '../Images/left-arrow.png';
import arrow_right from '../Images/right-arrow.png';
import { Link } from 'react-router-dom';
import grop11 from '../Images/Group11.png'
import arrow from "../Images/arrow2.png"
import { useData } from '../Context/Context_Provider';
import dextop from '../Images/Layer_6 (1).png';
import tab from '../Images/Layer_4 (1).png'

function    Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const { imag_url, caseData, getCaseData } = useData();

    useEffect(() => {
        getCaseData();
    }, []);
    const truncateText = (text, maxLength) => {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength) + '...';
    };

    return (
        <section className="slider testimonial-section testimonial-section1 d-flex align-items-center p-5">
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <h6 className='text-white'>CASE STUDIES</h6>
                        <h2 className='text-white' style={{ fontSize: "32px" }}>Explore Client Success Stories</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-8 d-flex align-items-center layoutContainer' style={{ position: "relative", left: "-150px" }}>
                        <div>
                            <img src={grop11} />
                        </div>
                        <div className='maintesti' style={{ display: 'flex', position: 'relative', left: "-200px" }}>
                            <div className='d-flex justify-content-center desxtopTesti' style={{ borderRadius: '10px', zIndex: '1', width: '550px', height: '357px', overflow: 'hidden', position: 'relative' }}>
                                <img className='mainFrame' style={{ position: 'absolute', width: '100%' }} src={dextop} alt='Main' />
                                <div className='animTmgContainer'>
                                    <img className='animateImge' src={imag_url + caseData?.data?.[activeIndex]?.imageone} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center taabLayer'>
                                <img style={{ position: 'absolute', width: '100%' }} src={tab} />
                                <div className='tabImgeContainer'>
                                    <img className='animateImge2' src={imag_url + caseData?.data?.[activeIndex]?.imageone} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                        <div id="myCarousel" className="carousel slide">
                            {caseData?.data?.map((items, idx) => (
                                <div className="carousel-inner">
                                    <div key={idx} className={`carousel-item ${activeIndex === idx ? 'active' : ''}`}>
                                        <h2 style={{ color: "white" }}>{truncateText(items?.title, 18)}</h2>
                                        <p style={{ color: "white", fontSize: "15px", wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: truncateText(items?.description, 80) }}></p>
                                        <p style={{ color: "white", fontSize: "15px" }}>{items?.frontend_technology} {items?.backend_technology}</p>
                                        <Link className='link' target="_blank" rel="noopener noreferrer" to={imag_url + items.pdf}><p style={{ color: "#1E96D3" }}> <img src={arrow} />View Case Study </p></Link>
                                </div>
                                </div>
                            ))}

                        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev' onClick={() => handleSlideChange((activeIndex - 1 + caseData?.data?.length) % caseData?.data?.length)}>
                            <img width={"19px"} src={arrow_left} alt="prev" />
                            {/* <span className='carousel-control-prev-icon' aria-hidden='true'></span> */}
                            <span className='visually-hidden'>Previous</span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next' onClick={() => handleSlideChange((activeIndex + 1) % caseData?.data?.length)}>
                            <img width={"19px"} src={arrow_right} alt="next" />
                            {/* <span className='carousel-control-next-icon' aria-hidden='true'></span> */}
                            <span className='visually-hidden'>Next</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
        </section >
    );
}

export default Slider;
