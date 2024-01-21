import React, { useEffect } from 'react'
import img3 from '../Images/arrow.jpeg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useData } from '../Context/Context_Provider'
function Shopping() {
	const params = useParams()
	const { imag_url, caseData, getCaseData, caseIndiviual, getCaseIndidual, } = useData()
	useEffect(() => {
		getCaseData()
		getCaseIndidual(params.id)
	}, [])
	const navigate = useNavigate()
	const getCaseDetail = (id, name) => {
		navigate(`/case_study_detail/${name}`)
		getCaseIndidual(id)
	}
	const truncateText = (text, maxLength) => {
		if (text?.length <= maxLength) {
			return text;
		}
		return text?.slice(0, maxLength) + '...';
	};
	return (
		<>
			<div className='caseStudy-shopping mb-5'>
				{
					caseData?.data?.map((d, i) => {
						return (
							<>{i % 2 == 0 ?
								<div className='container mainSection p-0' style={{ backgroundColor: "#fbfbfb" }}>
									<div className='row'>
										<div className='col-md-6 mainCaseImgContainer'>
											<img src={imag_url + d.main_image} style={{ width: '100%', height: "750px" }} />
										</div>
										<div className='col-md-6 d-flex align-items-end' >
											<div className='wholesale' style={{ marginBottom: "5rem",padding:"10px" }}>
												<div className='wholesale-logo'>
													<div className='wholeSaleLogoContainer' style={{ marginBottom: "20px", width: "150px", height: "107%" }}>
														<Link to={d.website_url}>
															<img src={imag_url + d.logo} style={{ width: "100%", height: "100%" }} />
														</Link>
													</div>
												</div>
												<div className='wholesale-text'>
													<h5>{truncateText(d.title,90)}</h5>
												</div>
												<div className='wholesale-link' style={{ cursor: "pointer" }} >
													<Link to={imag_url + d.pdf} target="_blank" rel="noopener noreferrer">
														{/* View PDF */}
														<span>Case Study</span> <span><img src={img3} /></span>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className='row shop-banners p-3'>
										<div className='col-md-4 mb-3'>
											<div className='imagesContainer' style={{ height: "350px", width: "	350px", borderRadius:"10px" }}>
												<img src={imag_url + d.imageone} style={{ width: "100%", height: "100%",borderRadius:"10px" }} />
											</div>
										</div>
										<div className='col-md-4 mb-3'>
											<div className='imagesContainer' style={{ height: "350px", width: "	350px", borderRadius:"10px" }}>
												<img src={imag_url + d.imagetwo} style={{ width: "100%", height: "100%",borderRadius:"10px" }} />
											</div>
										</div>
										<div className='col-md-4 mb-3'>
											<div className='imagesContainer' style={{ height: "350px", width: "	350px", borderRadius:"10px" }}>
												<img src={imag_url + d.imagethree} style={{ width: "100%", height: "100%",borderRadius:"10px" }} />
											</div>
										</div>
									</div>
								</div> :
								<div className='container mainSection p-0 my-5' style={{ background: "#fbfbfb" }}>
									<div className='row'>
										<div className='col-md-6 d-flex align-items-end' >
											<div className='photography' style={{ marginBottom: "5rem",padding:"10px" }}>
												<div className='studio-logo'>
													<div className='wholeSaleLogoContainer' style={{ marginBottom: "20px", width: "150px", height: "	107%" }}>
														<Link to={d.website_url}>
															<img src={imag_url + d.logo} style={{ width: "100%", height: "100%" }} />
														</Link>
													</div>
												</div>
												<div className='studio-text'>
													<h5>{truncateText(d.title,90)}</h5>
												</div>
												<div className='wholesale-link' style={{ cursor: "pointer" }} >
													<Link to={imag_url + d.pdf} target="_blank" rel="noopener noreferrer">
														{/* View PDF */}
														<span>Case Study</span> <span><img src={img3} /></span>
													</Link>
												</div>
											</div>
										</div>
										<div className='col-md-6 mainCaseImgContainer'>
											<img src={imag_url + d.main_image} style={{ width: '100%', height: "750px" }} />
										</div>
										<div className='row collection'>
											<div className='col-md-4 mb-3'>
												<div className='imagesContainer' style={{ height: "350px", width: "	350px", borderRadius:"10px" }}>
													<img src={imag_url + d.imageone} style={{ width: "100%", height: "100%",borderRadius:"10px" }} />
												</div>
											</div>
											<div className='col-md-4 mb-3'>
												<div className='imagesContainer' style={{ height: "350px", width: "	350px", borderRadius:"10px" }}>
													<img src={imag_url + d.imagetwo} style={{ width: "100%", height: "100%",borderRadius:"10px" }} />
												</div>
											</div>
											<div className='col-md-4 mb-3'>
												<div className='imagesContainer' style={{ height: "350px", width: "	350px", borderRadius:"10px" }}>
													<img src={imag_url + d.imagethree} style={{ width: "100%", height: "100%",borderRadius:"10px" }} />
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

export default Shopping
