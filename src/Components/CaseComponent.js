import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider'
import { useParams } from 'react-router-dom'
function CaseComponent() {
    const params = useParams()
    const { imag_url, caseIndiviual, getCaseIndidual, singleCase } = useData()
    useEffect(() => {
        getCaseIndidual(params.id)
    }, [])
    console.log(caseIndiviual);
    return (
        <>
            <div className='case_details my-5'>
                <div className='container'>
                    <div className='row'>
                        <a href={imag_url + caseIndiviual?.pdf} target="_blank" rel="noopener noreferrer">
                            View PDF
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseComponent
