import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useData } from '../Context/Context_Provider';
import arrow_left from '../Images/left-arrow.png';
import arrow_right from '../Images/right-arrow.png';
import arrow from '../Images/arrow2.png';
import dextop from '../Images/Layer_6 (1).png';
import tab from '../Images/Layer_4 (1).png';
import img1 from '../Images/Rectangle 83.png';
import img2 from '../Images/Rectangle 21835.png';

function DevelopmentSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const params = useParams();
    const { imag_url, caseData, getCaseData, getIndividualService } = useData();
    const serviceId = params.id; // Assuming the service ID is in the URL parameter.
    useEffect(() => {
        console.log('caseData:', caseData);
        getCaseData();
        getIndividualService(serviceId);
    }, [serviceId]);

    // Filter the caseData array to include only items with the matching services_id.
    const filteredCaseData = caseData?.data?.filter((item) => +item.services_id === +serviceId);
    console.log('filteredCaseData:', filteredCaseData);

    const handleSlideChange = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const truncateText = (text, maxLength) => {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength) + '...';
    };

    return (
        <section className="slider testimonial-section1 d-flex align-items-center p-5">
            <img src={img2} className='mask12' alt="Background" />
            <img src={img1} className='mask11' alt="Background" />
            <div className='container testContainerBg'>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <h6 className='text-white mb-0'>CASE STUDIES</h6>
                        <h2 className='text-white' style={{ fontSize: "32px" }}>Explore Client Success Stories</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='maintesti' style={{ display: 'flex', position: 'relative' }}>
                            <div className='d-flex justify-content-center desxtopTesti' style={{ borderRadius: '10px', zIndex: '1', width: '400px', height: '227px', overflow: 'hidden', position: 'relative' }}>
                                <img className='mainFrame' style={{ position: 'absolute', width: '100%' }} src={dextop} alt='Main' />
                                <div className='animTmgContainer'>
                                    <img className='animateImge' src={imag_url + filteredCaseData?.[activeIndex]?.imageone} alt="ImageOne" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center taabLayer' style={{ borderRadius: '10px', zIndex: '1', overflow: 'hidden', position: 'relative', height: '220px', width: '278px' }}>
                                <img style={{ position: 'absolute', width: '100%' }} src={tab} alt="Tab" />
                                <div className='tabImgeContainer'>
                                    <img className='animateImge2' src={imag_url + filteredCaseData?.[activeIndex]?.imageone} alt="ImageTwo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                        <div id="myCarousel" className="carousel slide w-100">
                            <div className="carousel-inner">
                                {filteredCaseData?.map((items, idx) => (
                                    <div key={idx} className={`carousel-item ${activeIndex === idx ? 'active' : ''}`}>
                                        <h2 style={{ wordWrap: "break-word", color: "#fff", width: "100%" }} dangerouslySetInnerHTML={{ __html: truncateText(items?.title, 30) }}></h2>
                                        <p style={{ wordWrap: "break-word", color: "#fff", width: "100%" }} dangerouslySetInnerHTML={{ __html: truncateText(items?.description, 80) }}></p>
                                        <p style={{ color: "white" }}>{items?.frontend_technology} {items?.backend_technology}</p>
                                        <div className='wholesale-link' style={{ cursor: "pointer" }}>
                                            <Link to={imag_url + items.pdf} target="_blank" rel="noopener noreferrer">
                                                <span>Case Study</span> <span><img src={arrow} alt="View PDF" /></span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='mt-3'>
                                <button className='carousel-control-prev' style={{ marginRight: "10px" }} type='button' data-bs-target='#myCarousel' data-bs-slide='prev' onClick={() => handleSlideChange((activeIndex - 1 + filteredCaseData?.length) % filteredCaseData?.length)}>
                                    <img width={"19px"} src={arrow_left} alt="prev" />
                                    <span className='visually-hidden'>Previous</span>
                                </button>
                                <button className='carousel-control-next' type='button' data-bs-target='#myCarousel' data-bs-slide='next' onClick={() => handleSlideChange((activeIndex + 1) % filteredCaseData?.length)}>
                                    <img width={"19px"} src={arrow_right} alt="next" />
                                    <span className='visually-hidden'>Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DevelopmentSlider;
