import React from 'react'
import { Link } from 'react-router-dom'

function Development_innovate() {
    return (
        <>
            <div className='innovate_container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='inovate_content text-center py-5'>
                                <h1>
                                    <span className='stroke'>We</span> <span>innovate</span> <span className='stroke'>through</span> <span>creativity</span> <span className='stroke'>.</span>
                                </h1>
                                <p>
                                    Our unconventional process generates <br/> unconventional outcomes
                                </p>
                                <button>
                                    <Link to={"#"} className='link btn'>Enquire Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Development_innovate