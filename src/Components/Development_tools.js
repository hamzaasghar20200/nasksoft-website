import React, { useEffect } from 'react'
import { useData } from '../Context/Context_Provider'
import { useParams } from 'react-router-dom'
function Development_tools() {
    const params = useParams()
    const { imag_url, developmentData, getDevelopmentData, getIndividualService, individualService, singleService } = useData()
    useEffect(() => {
        getIndividualService(params.id)
    }, [params.id])
    return (
        <>
            <div className='development_tool'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h3 className='mb-3' style={{ wordWrap: "break-word" }}> {individualService?.secfour_heading}</h3>
                            <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: individualService?.secfour_desc }}></p>
                        </div>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='tools mb-4'>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconone} />
                                        </div>
                                        <h6>{individualService?.secfour_iconone_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_icontwo} />
                                        </div>
                                        <h6>{individualService?.secfour_icontwo_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconthree} />
                                        </div>
                                        <h6>{individualService?.secfour_iconthree_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconfour} />
                                        </div>
                                        <h6>{individualService?.secfour_iconfour_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconfive} />
                                        </div>
                                        <h6>{individualService?.secfour_iconfive_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconsix} />
                                        </div>
                                        <h6>{individualService?.secfour_iconsix_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconseven} />
                                        </div>
                                        <h6>{individualService?.secfour_iconseven_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconeight} />
                                        </div>
                                        <h6>{individualService?.secfour_iconeight_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconnine} />
                                        </div>
                                        <h6>{individualService?.secfour_iconnine_head}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='tools mb-4'>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconten} />
                                        </div>
                                        <h6>{individualService?.secfour_iconten_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconeleven} />
                                        </div>
                                        <h6>{individualService?.secfour_iconeleven_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_icontwelve} />
                                        </div>
                                        <h6>{individualService?.secfour_icontwelve_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconthirteen} />
                                        </div>
                                        <h6>{individualService?.secfour_iconthirteen_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconfourteen} />
                                        </div>
                                        <h6>{individualService?.secfour_iconfourteen_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconfifteen} />
                                        </div>
                                        <h6>{individualService?.secfour_iconfifteen_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconsixteen} />
                                        </div>
                                        <h6>{individualService?.secfour_iconsixteen_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconseventeen} />
                                        </div>
                                        <h6>{individualService?.secfour_iconseventeen_head}</h6>
                                    </div>
                                    <div className='tool'>
                                        <div className='toolImg'>
                                            <img src={imag_url + individualService?.secfour_iconeighteen} />
                                        </div>
                                        <h6>{individualService?.secfour_iconeighteen_head}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Development_tools