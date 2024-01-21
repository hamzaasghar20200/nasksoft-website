// import React, { useEffect, useState } from 'react';
// import arrow_left from '../Images/left-arrow.png';
// import arrow_right from '../Images/right-arrow.png';
// import { Link } from 'react-router-dom';
// import arrow from "../Images/arrow2.png"
// import { useData } from '../../../naskstudiohub/src/Context/Context_Provider';
// import dextop from '../Images/Layer_6 (1).png';
// import tab from '../Images/Layer_4 (1).png'
// import img1 from '../Images/Rectangle 83.png'
// import img2 from '../Images/Rectangle 21835.png'

// function DevelopmentSlider() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const handleSlideChange = (selectedIndex) => {
//         setActiveIndex(selectedIndex);
//     };
//     const { imag_url, caseData, getCaseData } = useData();

//     useEffect(() => {
//         getCaseData();
//     }, []);

//     // Check if caseData is available and has data property
//     if (!caseData || !caseData.data) {
//         return null; // Or you can render a loading indicator or an error message
//     }

//     // Filter the data based on designing_page before rendering
//     const filteredData = caseData.data.filter(item => item.designing_page === 1);
//     const truncateText = (text, maxLength) => {
//         if (text?.length <= maxLength) {
//             return text;
//         }
//         return text?.slice(0, maxLength) + '...';
//     };

//     return (
//         <section className="slider testimonial-section1 d-flex align-items-center p-5">
//             <img src={img2} className='mask12' />
//             <img src={img1} className='mask11' />
//             <div className='container testContainerBg'>
//                 <div className='row mb-3'>
//                     <div className='col-12'>
//                         <h6 className='text-white mb-0'>CASE STUDIES</h6>
//                         <h2 className='text-white' style={{ fontSize: "32px" }}>Explore Client Success Stories</h2>
//                     </div>
//                 </div>
//                 <div className='row'>
//                     <div className='col-md-8'>
//                         <div className='maintesti' style={{ display: 'flex', position: 'relative' }}>
//                             <div className='d-flex justify-content-center desxtopTesti' style={{ borderRadius: '10px', zIndex: '1', width: '400px', height: '227px', overflow: 'hidden', position: 'relative' }}>
//                                 <img className='mainFrame' style={{ position: 'absolute', width: '100%' }} src={dextop} alt='Main' />
//                                 <div className='animTmgContainer'>
//                                     <img className='animateImge' src={imag_url + caseData?.data.filter(item => item.designing_page === 1)[activeIndex]?.imageone} />
//                                 </div>
//                             </div>
//                             <div className='d-flex justify-content-center taabLayer' style={{ borderRadius: '10px', zIndex: '1', overflow: 'hidden', position: 'relative', height: '220px', width: '278px' }}>
//                                 <img style={{ position: 'absolute', width: '100%' }} src={tab} />
//                                 <div className='tabImgeContainer'>
//                                     <img className='animateImge2' src={imag_url + caseData?.data.filter(item => item.designing_page === 1)[activeIndex]?.imageone} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4 d-flex align-items-center">
//                         <div id="myCarousel" className="carousel slide w-100">
//                             {filteredData.length > 0 && (
//                                 <div className='carousel-inner'>
//                                     {filteredData.map((items, idx) => (
//                                         <div key={idx} className={`carousel-item ${activeIndex === idx ? 'active' : ''}`}>
//                                             <h2 style={{ wordWrap: "break-word", color: "#fff", width: "100%" }} dangerouslySetInnerHTML={{ __html: truncateText(items?.title, 30) }}></h2>
//                                             <p style={{ wordWrap: "break-word", color: "#fff", width: "100%" }} dangerouslySetInnerHTML={{ __html: truncateText(items?.description, 80) }}></p>
//                                             <p style={{ color: "white" }}>{items?.frontend_technology} {items?.backend_technology}</p>
//                                             <div className='wholesale-link' style={{ cursor: "pointer" }} >
//                                                 <Link to={imag_url + items.pdf} target="_blank" rel="noopener noreferrer">
//                                                     <span>Case Study</span> <span><img src={arrow} /></span>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {filteredData.length > 1 && (
//                                 <div className='mt-3'>
//                                     <button className='carousel-control-prev' style={{ marginRight: "10px" }} type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev' onClick={() => handleSlideChange((activeIndex - 1 + filteredData.length) % filteredData.length)}>
//                                         <img width={"19px"} src={arrow_left} alt="prev" />
//                                         <span className='visually-hidden'>Previous</span>
//                                     </button>
//                                     <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next' onClick={() => handleSlideChange((activeIndex + 1) % filteredData.length)}>
//                                         <img width={"19px"} src={arrow_right} alt="next" />
//                                         <span className='visually-hidden'>Next</span>
//                                     </button>
//                                 </div>
//                             )}

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default DevelopmentSlider;
