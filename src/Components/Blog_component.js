import React, { useEffect, useRef } from 'react'
import { useData } from '../Context/Context_Provider'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Blog_component() {

  const { imag_url, blog, getBlogData, getBlogDetail, featuredBlogs, getFeatueredData } = useData()
  // console.log(pblog);
  useEffect(() => {
    getBlogData()
    getFeatueredData()
  }, [])
  console.log(blog);
  const truncateText = (text, maxLength) => {
    if (text?.length <= maxLength) {
      return text;
    }
    return text?.slice(0, maxLength) + '...';
  };

  const videoRef = useRef(null);
  const handlePlayClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  const navigate = useNavigate()
  const getblogDetail = (id, name) => {
    navigate(`/blog/${name}/${id}`)
    getBlogDetail(id)
  }
  function getYouTubeVideoID(url) {
    // Check if the URL is not null or undefined
    if (!url) {
      return ''; // Return an empty string if the URL is missing or undefined
    }

    // Extract the video ID from the YouTube URL
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?feature=player_embedded&v=))([^&\n?#]+)/);

    if (videoIdMatch && videoIdMatch[1]) {
      return videoIdMatch[1];
    } else {
      // Handle invalid or unsupported URLs
      console.error('Invalid YouTube URL:', url);
      return '';
    }
  }
  return (
    <>
      <div className='blog pt-5  mb-5'>
        <div className='container'>
          <div className='row pt-5 p-3'>
            <div className='banner-text text-center'>
              <h1>Blogs</h1>
              <p>
                Ut condimentum volutpat
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='container'>
                <div className='row mb-4'>
                  {blog?.blog?.filter(item => item.featured === 1).map((item) => (
                    <div className='card p-0' key={item.id} onClick={() => getblogDetail(item.id, item.topic)} style={{ cursor: "pointer" }}>
                      <div className='row'>
                        <div className='col-lg-5 mx-auto'>
                          <div className='b_image h-100'>
                            <img src={imag_url + item.thumbnail_img} width={"100%"} height={"100%"} style={{ objectFit: "cover", borderRadius: "20px" }} alt={`Thumbnail for ${item.heading}`} />
                          </div>
                        </div>
                        <div className='col-md-7'>
                          <div className='content'>
                            <div className='topText mb-5'>
                              <h4 className='pt-2'>{truncateText(item.heading, 50)}</h4>
                              <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: truncateText(item.description, 150) }}></p>
                            </div>
                            <div className='bottomText'>
                              <div>
                                <h6>{new Date(item.created_at).toLocaleDateString()}</h6>
                              </div>
                              <div>
                                <h6>{item.topic}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
                <div className='row mb-4'>
                  {blog?.blog?.filter(item => item.featured === 0).map((item) => (
                    <div className='col-md-6 mb-3' key={item.id}>
                      <div className="card curveCard" onClick={() => getblogDetail(item.id, item.topic)} style={{ cursor: "pointer" }} >
                        <img src={imag_url + item.thumbnail_img} height={"200px"} style={{ objectFit: "cover", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className="card-img-top" alt={`Thumbnail for ${item.heading}`} />
                        <div className="card-body">
                          <h4 className="card-title">{truncateText(item.heading, 60)}</h4>
                          <div className='bottomText mt-3'>
                            <div>
                              <h6>{new Date(item.created_at).toLocaleDateString()}</h6>
                            </div>
                            <div>
                              <h6>{item.topic}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='col-lg-4 featured-blogs'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h6>Recent Blogs</h6>
                  </div>
                </div>
                {featuredBlogs?.map((items) => {
                  return (
                    <div onClick={() => getblogDetail(items.id, items.topic)} style={{ cursor: "pointer" }} className='row featured mt-3'>
                      <div className='col-md-3 p-0'>
                        <div className='blog-img'>
                          <img src={imag_url + items?.thumbnail_img} />
                        </div>
                      </div>
                      <div className='col-md-9'>
                        <div className='blog-txt'>
                          <h6 style={{ fontSize: '15px', marginTop: '8px' }}>
                            {truncateText(items.heading, 50)}
                          </h6>
                          <div className='bottomText mt-1'>
                            <div>
                              <p>{new Date(items.created_at).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p>{items?.topic}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className='row mt-3'>
                  <div className='col-12'>
                    <h6>Featured Video</h6>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 videoSide'>
                    <div className='featured-video'>
                      {blog?.blog?.map((item) => (
                        item.featured === 1 && (
                          <div ke y={item.id}>
                            <iframe
                              width="560"  // Set the desired width
                              height="315" // Set the desired height
                              src={`https://www.youtube.com/embed/${getYouTubeVideoID(item.video_url)}`}
                              frameborder="0"
                              allow="autoplay; encrypted-media"
                              allowfullscreen
                            ></iframe>
                          </div>
                        )
                      ))}

                    </div>
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

export default Blog_component