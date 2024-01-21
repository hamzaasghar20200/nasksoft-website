import React from 'react'
import img1 from '../Images/Rectangle 4 (1).png'
import img2 from '../Images/logo.png'
import img3 from '../Images/arrow.jpeg'
import img4 from '../Images/Frame 7.png'
import img5 from '../Images/Frame 1 (1).png'
import img6 from '../Images/Frame 2 (1).png'
import { Link } from 'react-router-dom'
function Photography() {
	return (
		<>
			<div className='photography-section mt-5'>
				<div className='container mainSection'>
					<div className='row'>
						<div className='col-md-6 d-flex justify-content-center align-items-end' >
							<div className='photography'>
								<div className='studio-logo'>
									<img src={img2} />
								</div>
								<div className='studio-text'>
									<h5>Photography studio hub has established itself as a leader in the photography industry. </h5>
								</div>
								<div className='studio-link'>
									<Link to={"#"}>
										<span>Case Study</span> <span><img src={img3} /></span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col-md-6 '>
							<img src={img1} style={{ width: '100%', borderRadius: '10px' }} />
						</div>
						<div className='row collection'>
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
			</div>
		</>
	)
}

export default Photography
