import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider'

export default function Experties() {
    const { imag_url, expertice, getExpertiseData } = useData()
    useEffect(() => {
        getExpertiseData()
    }, [])
    return (
        <>
            <div className='experties p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1 className='mb-4'>{expertice[0]?.heading}</h1>
                            <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: expertice[0]?.description }}></p>
                        </div>
                    </div>
                    <div className='row mt-3 text-center'>
                        <div className='col-md-3 mb-4' style={{display:"flex",justifyContent:"center"}} >
                            <div style={{ height: "100px", width: "100px" }}>
                                <img width={"100%"} src={imag_url + expertice[0]?.imageone} />
                            </div>
                        </div>
                        <div className='col-md-3 mb-4' style={{display:"flex",justifyContent:"center"}} >
                            <div style={{ height: "100px", width: "100px" }}>
                                <img width={"100%"} src={imag_url + expertice[0]?.imagetwo} />
                            </div>
                        </div>
                        <div className='col-md-3 mb-4' style={{display:"flex",justifyContent:"center"}} >
                            <div style={{ height: "100px", width: "100px" }}>
                                <img width={"100%"} src={imag_url + expertice[0]?.imagethree} />
                            </div>
                        </div>
                        <div className='col-md-3 mb-4' style={{display:"flex",justifyContent:"center"}} >
                            <div style={{ height: "100px", width: "100px" }}>
                                <img width={"100%"} src={imag_url + expertice[0]?.imagefour} />
                            </div>
                        </div>
                    </div>

                    <div className='row mb-5 text-center'>
                        <div className='col-md-3 mb-4' style={{display:"flex",justifyContent:"center"}} >
                            <div style={{ height: "100px", width: "100px" }}>
                                <img width={"100%"} src={imag_url + expertice[0]?.imagefive} />
                            </div>
                        </div>
                        <div className='col-md-3 mb-4' style={{display:"flex",justifyContent:"center"}} >
                            <div style={{ height: "100px", width: "100px" }}>
                                <img width={"100%"} src={imag_url + expertice[0]?.imagesix} />
                            </div>
                        </div>
                        <div className='col-md-3 mb-4' style={{display:"flex",justifyContent:"center"}} >
                            <div style={{ height: "100px", width: "100px" }}>
                                <img width={"100%"} src={imag_url + expertice[0]?.imageseven} />
                            </div>
                        </div>
                        <div className='col-md-3 mb-4' style={{display:"flex",justifyContent:"center"}} >
                            <div style={{ height: "100px", width: "100px" }}>
                                <img width={"100%"} src={imag_url + expertice[0]?.imageeight} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
