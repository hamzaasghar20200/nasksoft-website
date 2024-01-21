import React, { useEffect } from 'react'
import { GoChevronDown } from 'react-icons/go'
import { useData } from '../Context/Context_Provider'
import { useParams } from 'react-router-dom'

function Development_FAQ() {
    const { faqData, getFaqData, developmentData, getIndividualService, individualService } = useData()
    const parms = useParams()
    useEffect(() => {
        getFaqData()
        getIndividualService(parms.id)
    }, [])
    return (
        <>
            <div className='faq_container p-5'>
                <div className='container '>
                    <div className='row mb-5'>
                        <div className='col-12 text-center'>
                            <h1 className='frequently'>{individualService?.secone_head_one} FAQ</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="accordion" id="accordionExample">
                            {faqData?.map((items, i) => {
                                return (
                                    <>
                                        {items?.service_id == parms.id ?
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button pt-3 p-2" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${i}`} aria-expanded="true" aria-controls="collapseOne" style={{ fontSize: "14px", fontWeight: "600", color: "#494949 !important" }}>
                                                        {items.question}
                                                    </button>
                                                </h2>
                                                <div id={`collapseOne${i}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body p-2">
                                                        <p style={{ wordWrap: "break-word", color: "white" }} dangerouslySetInnerHTML={{ __html: items.answer }}></p>
                                                    </div>
                                                </div>
                                            </div> : ""
                                        }
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Development_FAQ 