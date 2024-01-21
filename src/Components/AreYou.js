import React, { useEffect } from 'react'
import img1 from '../Images/wow.jpg'
import degree from '../Images/360-solutions.png'
import proven from '../Images/proven-methodology.png'
import seamless from '../Images/seemless-development.png'
import approach from '../Images/approch.png'
import approach1 from '../Images/Frame 625944.png'
import approach2 from '../Images/Frame 625945.png'
import approach3 from '../Images/Frame 625946.png'
import img2 from '../Images/wow2.jpg'
import img3 from '../Images/wow3.jpeg'
import { useData } from '../Context/Context_Provider'
function AreYou() {
    const { imag_url,getProducts, product } = useData()
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <div className='areyou' >
                <div className='container'>
                    <div className='row'>
                        <h1>
                            <div className='simpleDive'>{product[0]?.sectwo_heading}</div>
                            <div className='animateDive'><div className='head1'>{product[0]?.sectwo_head_one}</div><div className='head2'>{product[0]?.sectwo_head_two}</div> <div className='head3'>{product[0]?.sectwo_head_three}</div></div>
                        </h1>
                        <p>
                            {product[0]?.sectwo_desc}
                        </p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <div className='services'>
                                <div className='serves'>
                                    <div className='icon'>
                                        <img src={imag_url+product[0]?.sectwo_iconone} style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
                                    </div>
                                    <div className='text'>
                                        <h3>{product[0]?.sectwo_iconone_head}</h3>
                                    </div>
                                </div>
                                <div className='serves'>
                                    <div className='icon'>
                                        <img src={imag_url+product[0]?.sectwo_icontwo} style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
                                    </div>
                                    <div className='text'>
                                        <h3>{product[0]?.sectwo_icontwo_head}</h3>
                                    </div>
                                </div>
                                <div className='serves'>
                                    <div className='icon'>
                                        <img src={imag_url+product[0]?.sectwo_iconthree} style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
                                    </div>
                                    <div className='text'>
                                        <h3>{product[0]?.sectwo_iconthree_head}</h3>
                                    </div>
                                </div>
                                <div className='serves'>
                                    <div className='icon'>
                                        <img src={imag_url+product[0]?.sectwo_iconfour} style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
                                    </div>
                                    <div className='text'>
                                        <h3>{product[0]?.sectwo_iconfour_head}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7' style={{ overflow: "hidden" }}>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='imge image1'>
                                        <img src={imag_url+product[0]?.sectwo_imageone} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='imge image2'>
                                    <img src={imag_url+product[0]?.sectwo_imagetwo} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='imge image3'>
                                    <img src={imag_url+product[0]?.sectwo_imagethree} />
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

export default AreYou