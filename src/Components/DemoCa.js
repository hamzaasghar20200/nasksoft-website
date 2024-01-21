import React, { useEffect } from 'react'
import Carousel from "react-elastic-carousel";
import banner from "../Images/dev.png"
import banner1 from "../Images/digital-marketing.png"
import banner2 from "../Images/design.png"
import { useData } from '../Context/Context_Provider';
import img1 from '../Images/Frame 1 (2).png'; // Import your image
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

function Banner() {
    const { getHomeBanner, homeBanner } = useData()
    useEffect(() => {
        getHomeBanner()
    }, [])
    const breakPoint = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1100, itemsToShow: 1 },
    ]
    return (
        <>
            <div className='banner'>
                <div className='bannerContent'>
                    <Carousel class="carouselContainer" breakPoints={breakPoint} pagination={false} enableAutoPlay={false} >
                        <item>
                            <div className="slide">
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
                        </item>
                        <item>
                            <div className="slide">
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
                        </item>
                        <item>
                            <div className="slide">
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
                        </item>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Banner