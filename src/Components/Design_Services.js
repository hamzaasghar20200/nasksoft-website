import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider'

function Design_Services() {
    const {imag_url, design, getDesignData } = useData()
    useEffect(() => {
        getDesignData()
    }, [])
    return (
        <>
            <div className='design_services my-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-8'>
                            <div className='content'>
                                <h4 style={{ fontWeight: "600", color: "#003854", fontSize: "24px" }}>{design[0]?.secthree_heading}</h4>
                                <p className='my-3' style={{ color: "#3E494E" }}>
                                    {design[0]?.secthree_desc}
                                </p>
                            </div>
                            <div className='widgets'>
                                <div className='row'>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secthree_iconone} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secthree_iconone_head}</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secthree_icontwo} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secthree_icontwo_head}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secthree_iconthree} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secthree_iconthree_head}</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secthree_iconfour} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secthree_iconfour_head}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4' style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={imag_url+design[0]?.secthree_image} width={"100%"} />
                            </div>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-md-4' style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={imag_url+design[0]?.secfour_image} width={"100%"} />
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='content'>
                                <h4 style={{ fontWeight: "600", color: "#003854" }}>{design[0]?.secfour_heading}</h4>
                                <p className='my-3' style={{ color: "#3E494E" }}>
                                    {design[0]?.secfour_desc}
                                </p>
                            </div>
                            <div className='widgets'>
                                <div className='row'>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secfour_iconone} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secfour_iconone_head}</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secfour_icontwo} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secfour_icontwo_head}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secfour_iconthree} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secfour_iconthree_head}</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secfour_iconfour} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secfour_iconfour_head}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-md-8'>
                            <div className='content'>
                                <h4 style={{ fontWeight: "600", color: "#003854" }}>{design[0]?.secfive_heading}</h4>
                                <p className='my-3' style={{ color: "#3E494E" }}>
                                    {design[0]?.secfive_desc}
                                </p>
                            </div>
                            <div className='widgets'>
                                <div className='row'>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secfive_iconone} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secfive_iconone_head}</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secfive_icontwo} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secfive_icontwo_head}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secfive_iconthree} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secfive_iconthree_head}</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3' style={{ display: "flex", alignItems: "center" }}>
                                        <div className='icon'>
                                            <img src={imag_url+design[0]?.secfive_iconfour} />
                                        </div>
                                        <div className='text'>
                                            <h6 style={{ wordWrap:"break-word", fontWeight: "500", marginLeft: "10px", color: "#3E494E" }}>{design[0]?.secfive_iconfour_head}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4' style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img src={imag_url+design[0]?.secfive_image} width={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Design_Services