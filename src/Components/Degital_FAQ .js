import React, { useEffect } from 'react'
import { GoChevronDown } from 'react-icons/go'
import { useData } from '../Context/Context_Provider'

function Degital_FAQ() {
    const { faqData, getFaqData } = useData()
    useEffect(() => {
        getFaqData()
    }, [])
    return (
        <>
            <div className='faq_container p-5'>
                <div className='container '>
                    <div className='row mb-5'>
                        <div className='col-12 text-center'>
                            <h1 className='frequently'>Digital Design FAQ</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="accordion" id="accordionExample">
                            {faqData?.filter(item => item.designing_page === 2).map((items, i) => {
                                return (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button pt-3 p-2" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${i}`} aria-expanded="true" aria-controls="collapseOne" style={{ fontSize: "14px", fontWeight: "600" }}>
                                                {items.question}
                                            </button>
                                        </h2>
                                        <div id={`collapseOne${i}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body p-2">
                                                <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: items.answer }}></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Degital_FAQ 