import React, { useEffect } from 'react'
import image1 from '../Images/wow.jpg'
import { useData } from '../Context/Context_Provider'
import { useParams } from 'react-router-dom'

function Development_expertise() {
    const params = useParams()
    const { imag_url,developmentData, getDevelopmentData, getIndividualService, individualService, singleService } = useData()
    useEffect(() => {
        getIndividualService(params.id)
    }, [params.id])
  return (
    <>
        <div className='development_experties'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6' style={{padding:"80px 20px"}}>
                        <h1>{individualService?.secsix_heading} </h1>
                        <h2 className='my-4' style={{color: "#1E96D3"}}>{individualService?.secsix_sub_headone}</h2> 
                        <h2 className='mb-4'>{individualService?.secsix_sub_headtwo}</h2>  
                        <h2 className='mb-4'>{individualService?.secsix_sub_headthree}</h2> 
                        <h2 className='mb-4'>{individualService?.secsix_sub_headfour}</h2>                
                    </div>
                    <div className='col-md-6 bgImg' >
                        {/* <div className='experties_img' style={{background: `url(${imag_url+individualService?.secsix_image})`,backgroundSize:"cover"}}> */}
                        <div className='experties_img'>
                            <h3 style={{wordWrap:"break-word"}}>{individualService?.secsix_image_desc}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Development_expertise
