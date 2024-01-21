import React, { useEffect, useState } from 'react';
import arrow_left from '../Images/f1.png';
import arrow_right from '../Images/f2.png';
import { BiSolidArrowToRight, BiSolidStar, BiStar } from 'react-icons/bi';
import { useData } from '../Context/Context_Provider';
import { BsStarHalf } from 'react-icons/bs';

function ClientSatsifaction() {
    const { imag_url, testimonial, getTestimonials, caseData, getCaseData } = useData()
    useEffect(() => {
        getTestimonials()
        getCaseData()
    }, [])
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonial.length) % testimonial.length);
    };

    const handleNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
    };

    useEffect(() => {
        const imgElement = document.getElementById('sliderImage');
        if (imgElement) {
            imgElement.classList.add('animate-image');
            setTimeout(() => {
                imgElement.classList.remove('animate-image');
            }, 1000); // Adjust the timing as needed
        }
    }, [activeIndex]);
    return (
        <section className="testimonial-section testimonial-section2 d-flex align-items-center p-5">
            <div className='container'>
                <div className='row' style={{ display: "flex", alignItems: "center" }}>
                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center algn-items-center'>
                            {testimonial.map((items, index) => (
                                <img
                                    key={index}
                                    src={index === activeIndex?imag_url+items?.image : ''}
                                    alt={`Image ${index + 1}`}
                                    style={{ display: index === activeIndex ? 'block' : 'none', width: "100%", objectFit: "contain" }}
                                    className={index === activeIndex}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="myCarousel" className="carousel slide" data-bs-interval="false" >
                            <div className="carousel-inner">
                                {testimonial.map((items, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item testi-item ${index === activeIndex ? 'active' : ''}`}
                                        data-color={items.color}
                                    >
                                        <h1 className='headding truncate-text' style={{ color: "#fff" }}>{items?.heading}</h1>
                                        <p className='slogan' style={{ color: "#003854" }}>{truncateText(items?.sub_heading, 30)}</p>
                                        <p>
                                            <div>
                                                {[...Array(Math.floor(items.ranking))].map((_, starIndex) => (
                                                    <BiSolidStar key={starIndex} style={{ color: "#FACC07", fontSize: "20px" }} />
                                                ))}
                                                {items.ranking % 1 !== 0 && (
                                                    <BsStarHalf style={{ color: "#FACC07", fontSize: "20px" }} />
                                                )}
                                            </div>

                                        </p>
                                        <p style={{ color: "#003854" }} dangerouslySetInnerHTML={{ __html: truncateText(items?.description, 200) }} ></p>
                                    </div>
                                ))}
                            </div>
                            <div className='bottom'>
                                <div className='userdetail'>
                                    <div className='img1 mb-3'>
                                        <img
                                            src={imag_url+testimonial[activeIndex]?.client_image}
                                            height={"70px"}
                                            width={"70px"}
                                            style={{ objectFit: "cover", borderRadius: "10px" }}
                                            alt={`User ${activeIndex + 1}`}
                                        />
                                    </div>
                                    <div className='text'>
                                        <h5 style={{ color: "#003854" }}>{testimonial[activeIndex]?.client_name}</h5>
                                        <h6>{testimonial[activeIndex]?.client_profession}</h6>
                                    </div>
                                </div>
                                <div>
                                    <button className="carousel-control-prev" type="button" onClick={handlePrevSlide}>
                                        <img src={arrow_left} alt="prev" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" onClick={handleNextSlide}>
                                        <img src={arrow_right} alt="next" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientSatsifaction;
