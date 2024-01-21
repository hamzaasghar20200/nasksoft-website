import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider';

function About_us_counter() {
    const { about, getAbout } = useData()
    useEffect(() => {
        getAbout()
    }, [])
  return (
    <>
        <div className='about_counter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='counter text-center'>
                            <h1>{about[0]?.secthree_count_one}<span dangerouslySetInnerHTML={{ __html: about[0]?.secthree_countone_digit }}></span></h1>
                            <h6>{about[0]?.secthree_head_one}</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='counter text-center'>
                            <h1>{about[0]?.secthree_count_two} <span dangerouslySetInnerHTML={{ __html: about[0]?.secthree_counttwo_digit }}></span></h1>
                            <h6>{about[0]?.secthree_head_two}</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='counter text-center'>
                            <h1>{about[0]?.secthree_count_three} <span dangerouslySetInnerHTML={{ __html: about[0]?.secthree_countthree_digit }}></span></h1>
                            <h6>{about[0]?.secthree_head_three}</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='counter text-center'>
                            <h1>{about[0]?.secthree_count_four} <span>{about[0]?.secthree_countfour_digit}</span></h1>
                            <h6>{about[0]?.secthree_head_four}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default About_us_counter