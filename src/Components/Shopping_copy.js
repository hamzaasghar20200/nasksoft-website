import React, { useEffect } from 'react'
import img3 from '../Images/arrow.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { useData } from '../Context/Context_Provider'


function Shopping_copy() {
	const { imag_url, caseData, getCaseData, getCaseIndidual } = useData()
	useEffect(() => {
		getCaseData()
	}, [])
	console.log(caseData);
	const navigate = useNavigate()
	const getCaseDetail = (id, name) => {
		navigate(`/case_study_detail/${name}`)
		getCaseIndidual(id)
	}


	return (
		<>
			<div className='caseStudy-shopping '>
				{
					caseData?.data?.map((d, i) => {
						return (
							<>{i % 2 == 0 ?
								<div className='container mainSection my-5'>
									<div className='row'>
										<div className='col-md-6'>
											<img src={imag_url + d.main_image} style={{ width: '100%', height: "700px", borderRadius: '10px' }} />
										</div>
										<div className='col-md-6 d-flex align-items-end' >
											<div className='wholesale mb-5'>
												<div className='wholesale-logo'>
													<div className='wholeSaleLogoContainer' style={{ width: "150px", height: "150px" }}>
														<img src={imag_url + d.logo} style={{ width: "100%", height: "100%" }} />
													</div>
												</div>
												<div className='wholesale-text'>
													<h5>{d.title}</h5>
												</div>
												<div className='wholesale-link' style={{ cursor: "pointer" }} onClick={() => getCaseDetail(d.id, d.title)} >
													<span>Case Study</span> <span><img src={img3} /></span>
												</div>
											</div>
										</div>
									</div>
									<div className='row shop-banners'>
										<div className='col-md-4 mb-3'>
											<div className='imagesContainer' style={{ height: "300px", width: "300px" }}>
												<img src={imag_url + d.imageone} style={{ width: "100%", height: "100%" }} />
											</div>
										</div>
										<div className='col-md-4 mb-3'>
											<div className='imagesContainer' style={{ height: "300px", width: "300px" }}>
												<img src={imag_url + d.imagetwo} style={{ width: "100%", height: "100%" }} />
											</div>
										</div>
										<div className='col-md-4 mb-3'>
											<div className='imagesContainer' style={{ height: "300px", width: "300px" }}>
												<img src={imag_url + d.imagethree} style={{ width: "100%", height: "100%" }} />
											</div>
										</div>
									</div>
								</div> : <div className='container mainSection mb-5'>
									<div className='row'>
										<div className='col-md-6 d-flex align-items-end' >
											<div className='photography mb-5'>
												<div className='studio-logo'>
													<div className='wholeSaleLogoContainer' style={{ width: "150px", height: "150px" }}>
														<img src={imag_url + d.logo} style={{ width: "100%", height: "100%" }} />
													</div>
												</div>
												<div className='studio-text'>
													<h5>{d.title}</h5>
												</div>
												<div className='wholesale-link' style={{ cursor: "pointer" }} onClick={() => getCaseDetail(d.id, d.title)} >
													<span>Case Study</span> <span><img src={img3} /></span>
												</div>
											</div>
										</div>
										<div className='col-md-6'>
											<img src={imag_url + d.main_image} style={{ width: '100%', height: "700px", borderRadius: '10px' }} />
										</div>
										<div className='row collection'>
											<div className='col-md-4 mb-3'>
												<div className='imagesContainer' style={{ height: "300px", width: "300px" }}>
													<img src={imag_url + d.imageone} style={{ width: "100%", height: "100%" }} />
												</div>
											</div>
											<div className='col-md-4 mb-3'>
												<div className='imagesContainer' style={{ height: "300px", width: "300px" }}>
													<img src={imag_url + d.imagetwo} style={{ width: "100%", height: "100%" }} />
												</div>
											</div>
											<div className='col-md-4 mb-3'>
												<div className='imagesContainer' style={{ height: "300px", width: "300px" }}>
													<img src={imag_url + d.imagethree} style={{ width: "100%", height: "100%" }} />
												</div>
											</div>
										</div>
									</div>
								</div>}

							</>
						)
					})
				}
			</div>
		</>
	)
}

export default Shopping_copy
