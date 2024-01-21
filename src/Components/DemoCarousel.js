import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import banner from '../Images/dev.png';
import banner1 from '../Images/digital-marketing.png';
import banner2 from '../Images/design.png';
import { useData } from '../Context/Context_Provider';
import img1 from '../Images/Frame 1 (2).png'; // Import your image
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

function DemoCarousel() {
    const breakPoint = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1100, itemsToShow: 3 },
    ];

    const [carouselRef, setCarouselRef] = useState(null);

    const handlePrevClick = () => {
        if (carouselRef) {
            carouselRef.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (carouselRef) {
            carouselRef.slideNext();
        }
    };

    return (
        <>
            <div className='container'>
                <div className='navRow sc-dcJsrY hbMISa rec rec-carousel'>
                    <button
                        tabIndex="0"
                        className="jado1 sc-aXZVg iWchow rec rec-arrow rec rec-arrow-left"
                        type="button"
                        onClick={handlePrevClick}
                    >
                        <BiChevronLeft />
                    </button>
                    <button
                        tabIndex="0"
                        className=" jado2 sc-aXZVg iWchow rec rec-arrow rec rec-arrow-right"
                        type="button"
                        onClick={handleNextClick}
                    >
                        <BiChevronRight />
                    </button>
                </div>
                {/* <BiChevronLeft className='prev-button sc-aXZVg bqCWu rec rec-arrow rec rec-arrow-left' /> <BiChevronRight className='next-button sc-aXZVg iWchow rec rec-arrow rec rec-arrow-right' /> */}
                <Carousel
                    ref={(ref) => setCarouselRef(ref)}
                    className='carouselContainer'
                    breakPoints={breakPoint}
                    pagination={false}
                    enableAutoPlay={true}
                    loop={true}
                    disableArrowsOnEnd={true}
                    onChange={(currentItem, pageIndex) => {
                        // Handle the current item change here if needed
                    }}
                    isRTL={false}
                >
                    <div className='jadoItem item'>
                        <div className="sliderCard">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Praesentium quia nihil incidunt quibusdam, sed veritatis quidem!
                                Dolore
                            </p>
                            <div className="cardimgrow">
                                <div className="userDetail">
                                    <div className="userimg">
                                        <img src={img1} height={"50px"} width={"50px"} style={{ borderRadius: "50%" }} alt="" />
                                    </div>
                                    <div className="userdetail">
                                        <h6>Jhon peter</h6>
                                        <h6>Ceo card</h6>
                                    </div>
                                </div>
                                <div className="ranking">&copy;&copy;&copy;&copy;&copy;</div>
                            </div>
                        </div>
                    </div>
                    <div className='jadoItem item'>
                        <div className="sliderCard">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Praesentium quia nihil incidunt quibusdam, sed veritatis quidem!
                                Dolore
                            </p>
                            <div className="cardimgrow">
                                <div className="userDetail">
                                    <div className="userimg">
                                        <img src={img1} height={"50px"} width={"50px"} style={{ borderRadius: "50%" }} alt="" />
                                    </div>
                                    <div className="userdetail">
                                        <h6>Jhon peter</h6>
                                        <h6>Ceo card</h6>
                                    </div>
                                </div>
                                <div className="ranking">&copy;&copy;&copy;&copy;&copy;</div>
                            </div>
                        </div>
                    </div>
                    <div className='jadoItem item'>
                        <div className="sliderCard">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Praesentium quia nihil incidunt quibusdam, sed veritatis quidem!
                                Dolore
                            </p>
                            <div className="cardimgrow">
                                <div className="userDetail">
                                    <div className="userimg">
                                        <img src={img1} height={"50px"} width={"50px"} style={{ borderRadius: "50%" }} alt="" />
                                    </div>
                                    <div className="userdetail">
                                        <h6>Jhon peter</h6>
                                        <h6>Ceo card</h6>
                                    </div>
                                </div>
                                <div className="ranking">&copy;&copy;&copy;&copy;&copy;</div>
                            </div>
                        </div>
                    </div>
                    <div className='jadoItem item'>
                        <div className="sliderCard">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Praesentium quia nihil incidunt quibusdam, sed veritatis quidem!
                                Dolore
                            </p>
                            <div className="cardimgrow">
                                <div className="userDetail">
                                    <div className="userimg">
                                        <img src={img1} height={"50px"} width={"50px"} style={{ borderRadius: "50%" }} alt="" />
                                    </div>
                                    <div className="userdetail">
                                        <h6>Jhon peter</h6>
                                        <h6>Ceo card</h6>
                                    </div>
                                </div>
                                <div className="ranking">&copy;&copy;&copy;&copy;&copy;</div>
                            </div>
                        </div>
                    </div>
                    <div className='jadoItem item'>
                        <div className="sliderCard">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Praesentium quia nihil incidunt quibusdam, sed veritatis quidem!
                                Dolore
                            </p>
                            <div className="cardimgrow">
                                <div className="userDetail">
                                    <div className="userimg">
                                        <img src={img1} height={"50px"} width={"50px"} style={{ borderRadius: "50%" }} alt="" />
                                    </div>
                                    <div className="userdetail">
                                        <h6>Jhon peter</h6>
                                        <h6>Ceo card</h6>
                                    </div>
                                </div>
                                <div className="ranking">&copy;&copy;&copy;&copy;&copy;</div>
                            </div>
                        </div>
                    </div>
                    <div className='jadoItem item'>
                        <div className="sliderCard">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Praesentium quia nihil incidunt quibusdam, sed veritatis quidem!
                                Dolore
                            </p>
                            <div className="cardimgrow">
                                <div className="userDetail">
                                    <div className="userimg">
                                        <img src={img1} height={"50px"} width={"50px"} style={{ borderRadius: "50%" }} alt="" />
                                    </div>
                                    <div className="userdetail">
                                        <h6>Jhon peter</h6>
                                        <h6>Ceo card</h6>
                                    </div>
                                </div>
                                <div className="ranking">&copy;&copy;&copy;&copy;&copy;</div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <div className='popup'>
                    <h1>hello 1</h1>
                </div>
            </div>
        </>
    )
}

export default DemoCarousel