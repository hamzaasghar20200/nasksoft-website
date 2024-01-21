import React from 'react'
import img1 from '../Images/Rectangle 4 (2).png'
import img2 from '../Images/Nasksoft logo 1.png'
import img3 from '../Images/arrow.jpeg'
import img4 from '../Images/Frame 9 (1).png'
import img5 from '../Images/Frame 1 (4).png'
import img6 from '../Images/Frame 2 (4).png'
import { Link } from 'react-router-dom'
function NaskSoft() {
	return (
		<>
			<div className='caseStudy-shopping mt-5 '>
				<div className='container mainSection'>
					<div className='row'>
						<div className='col-md-6'>
							<img src={img1} style={{ width: '100%', borderRadius:'10px' }} />
						</div>
						<div className='col-md-6 d-flex justify-content-center align-items-end'>
							<div className='wholesale'>
								<div className='wholesale-logo'>
									<img src={img2} />
								</div>
								<div className='wholesale-text'>
									<h5>Leveraging modern approaches to web development, we bring front-end, back-end, and 
										architecture together to meet your business needs.</h5>
								</div>
								<div className='wholesale-link'>
									<Link to={"#"}>
										<span>Case Study</span> <span><img src={img3} /></span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='row shop-banners'>
						<div className='col-md-4'>
							<img src={img4} />
						</div>
						<div className='col-md-4'>
							<img src={img5} />
						</div>
						<div className='col-md-4'>
							<img src={img6} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NaskSoft
