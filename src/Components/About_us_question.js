import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider';

function About_us_question() {
    const { about, getAbout } = useData()
    useEffect(() => {
        getAbout()
    }, [])
    return (
        <>
            <div className='about_question mb-3'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='question'>
                                <h1>
                                    {about[0]?.sectwo_heading}
                                </h1>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='answer'>
                                <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: about[0]?.sectwo_desc }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_us_question