import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider'
import { useParams } from 'react-router-dom'

function Development_approach() {
    const params = useParams()
    const { imag_url, developmentData, getDevelopmentData, getIndividualService, individualService, singleService } = useData()
    useEffect(() => {
        getIndividualService(params.id)
    }, [params.id])
    return (
        <>
            <div className='approach pt-5 pb-3' style={{ backgroundColor: "#FBFBFB" }}>
                <div className='container'>
                    <div className='row text-center'>
                        <h3 className='underlin mb-3' style={{ fontWeight: "600", color: "#003854" }}>{individualService?.secthree_heading}</h3>
                        <p style={{ wordWrap: "break-word",color:"#727272",fontSize:"16px" }} dangerouslySetInnerHTML={{ __html: individualService?.secthree_desc}}></p>
                    </div>
                    <div className='row my-5'>
                        <div className='col-md-4' style={{ display: "flex", alignItems: "center" }}>
                            <div className='content svgContent'>
                                <h1 style={{ fontWeight: "900", fontSize: "90px", color: "#D9F2FF" }}>
                                    {individualService?.secthree_countone} <img src={imag_url + individualService?.secthree_countone_icon} className='scgImg' />
                                </h1>
                                <h4 style={{ color: "#1E96D3" }}>{individualService?.secthree_countone_head}</h4>
                                <p style={{ color: "#727272", fontSize: "15px" }}>
                                    <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: individualService?.secthree_countone_desc }}></p>
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4' style={{ display: "flex", alignItems: "center" }}>
                            <div className='content svgContent'>
                                <h1 style={{ fontWeight: "900", fontSize: "90px", color: "#D9F2FF" }}>
                                    {individualService?.secthree_counttwo} <img src={imag_url + individualService?.secthree_countwo_icon} className='scgImg' />
                                </h1>
                                <h4 style={{ color: "#1E96D3" }}>{individualService?.secthree_counttwo_head}</h4>
                                <p style={{ color: "#727272", fontSize: "15px" }}>
                                    <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: individualService?.secthree_counttwo_desc }}></p>
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4' style={{ display: "flex", alignItems: "center" }}>
                            <div className='content svgContent'>
                                <h1 style={{ fontWeight: "900", fontSize: "90px", color: "#D9F2FF" }}>
                                    {individualService?.secthree_countthree} <img src={imag_url + individualService?.secthree_countthree_icon} className='scgImg' />
                                </h1>
                                <h4 style={{ color: "#1E96D3" }}>{individualService?.secthree_countthree_head}</h4>
                                <p style={{ color: "#727272", fontSize: "15px" }}>
                                    <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: individualService?.secthree_countthree_desc }}></p>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Development_approach
