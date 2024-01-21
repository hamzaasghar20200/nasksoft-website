import React, { useEffect, useState } from 'react'
import img1 from '../Images/Combined-Shape.png'
import img2 from '../Images/Combined-Shape (1).png'
import { BiSearch, BiUserCircle } from 'react-icons/bi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useData } from '../Context/Context_Provider'
function Blog_detail_component() {
  const params = useParams()
  const { blogDetaldata, getBlogDetail, imag_url, featuredBlogs, getFeatueredData, socialLinks, getSocialLinks, comment, sendCommentData, blog, getBlogData, blogComment, getBlogComments } = useData()
  const [formCommentData, setFormCommentData] = useState({
    name: "",
    email: "",
    website: "",
    blog_id: params.id,
    message: "",
  })
  useEffect(() => {
    getFeatueredData()
    getSocialLinks()
    getBlogData(params.id)
    getBlogComments(params.id)
  }, [params.id])
  console.log(blogComment);
  const truncateText = (text, maxLength) => {
    if (text?.length <= maxLength) {
      return text;
    }
    return text?.slice(0, maxLength) + '...';
  };
  const navigate = useNavigate()
  const getblogDetail = (id, name) => {
    navigate(`/blog/${name}/${id}`);
    getBlogDetail(id)
  }
  // Update the blog_id in formCommentData whenever the params.id changes
  const totalTopicCount = blog?.blogs?.reduce((total, item) => {
    return total + item.count;
  }, 0);
  // Update the blog_id in formCommentData whenever the params.id changes
  useEffect(() => {
    setFormCommentData((prevState) => ({
      ...prevState,
      blog_id: params.id,
    }));
  }, [params.id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if required fields are not empty
    if (!formCommentData.name || !formCommentData.message) {
      // Display an error message or prevent submission
      return;
    }
    sendCommentData(formCommentData);
    setFormCommentData({
      name: "",
      email: "",
      website: "",
      blog_id: params.id,
      message: "",
    });

  };
  const [visibleComments, setVisibleComments] = useState(10); // Number of comments initially visible
  const totalComments = blogComment?.comments?.length || 0;
  // Track which comments should be displayed fully
  const [expandedComments, setExpandedComments] = useState({});

  // Function to toggle the comment expansion state
  const toggleCommentExpansion = (commentId) => {
    setExpandedComments((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };
  return (
    <>
      <div className='blog-details py-5' style={{ backgroundColor: "#f9f9fb" }}>
        <div className='container'>
          <div className='row pt-5'>
            <div className='col-md-7 mb-3'>
              <div className='container'>
                <div className='row'>
                  <div className='details-img'>
                    <img src={imag_url + blogDetaldata?.banner_img} />
                  </div>
                  <div className='bottomIcons'>
                    <div className='admin'>
                      <span><img width={"15px"} src={img1} /></span> <p>{blogDetaldata?.author}</p>
                    </div>
                    <div className='comment'>
                      <span><img width={"15px"} src={img2} /></span> <p>{totalComments} comments</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='leads'>
                      <div className='heading'>
                        <h3>
                          {blogDetaldata?.topic}
                        </h3>
                        <p style={{ wordWrap: "break-word" }} dangerouslySetInnerHTML={{ __html: blogDetaldata?.description }}></p>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='improvements'>
                        <div className='share'>
                          <div className='heading'>
                            <h6>Share</h6>
                          </div>
                          <div className='share-icons'>
                            {socialLinks?.map((socialLinks) => {
                              return (
                                <Link to={socialLinks?.url} className='link'>
                                  <div style={{ height: "25px", width: "25px" }}>
                                    <img width={"100%"} height={"100%"} src={imag_url + socialLinks?.icon} />
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row my-3'>
                    {blogComment?.comments?.slice(0, visibleComments).reverse().map((comment, index) => (
                      <div className='mb-3' key={index}>
                        <div className='card_body' style={{ display: 'flex' }}>
                          <div>
                            <BiUserCircle style={{ fontSize: '40px', color: 'lightgray' }} />
                          </div>
                          <div>
                            <h6 style={{ fontWeight: '600', position: 'relative', bottom: '-5px' }}>
                              {comment?.name}
                            </h6>
                            {comment.message.length > 200 ? (
                              <p>
                                {expandedComments[comment.id] ? comment.message : comment.message.slice(0, 200)}
                                {comment.message.length > 200 && (
                                  <span
                                    className='comment-toggle-link'
                                    style={{cursor:"pointer"}}
                                    onClick={() => toggleCommentExpansion(comment.id)}
                                  >
                                    {expandedComments[comment.id] ? ' See Less' : ' See More'}
                                  </span>
                                )}
                              </p>
                            ) : (
                              <p>{comment?.message}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {totalComments > 10 && (
                    <div>
                      {visibleComments <= 10 ? (
                        <button onClick={() => setVisibleComments(totalComments)} className='btn btn-primary'>
                          Show All ({totalComments})
                        </button>
                      ) : (
                        <button onClick={() => setVisibleComments(10)} className='btn btn-primary'>
                          Show Less
                        </button>
                      )}
                    </div>
                  )}
                  <div className='row mt-3'>
                    <div className='col-md-12'>
                      <h3>Leave A Comment</h3>
                    </div>
                  </div>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <div className="form-group">
                          <label style={{ color: "#3E494E" }}>Name*</label>
                          <input
                            value={formCommentData.name}
                            onChange={(e) => setFormCommentData({ ...formCommentData, name: e.target.value })}
                            style={{ backgroundColor: "transparent" }}
                            type="text"
                            className="form-control"
                            required // Keep "required" attribute for the name field
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="form-group">
                          <label style={{ color: "#3E494E" }}>Email</label>
                          <input
                            onChange={(e) => setFormCommentData({ ...formCommentData, email: e.target.value })}
                            style={{ backgroundColor: "transparent" }}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={formCommentData.email}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-md-12'>
                        <div className="form-group">
                          <label style={{ color: "#3E494E" }}>Website</label>
                          <input
                            value={formCommentData.website}
                            onChange={(e) => setFormCommentData({ ...formCommentData, website: e.target.value })}
                            style={{ backgroundColor: "transparent" }}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-md-12'>
                        <div className="form-group">
                          <label style={{ color: "#3E494E" }}>Message*</label>
                          <input
                            onChange={(e) => setFormCommentData({ ...formCommentData, message: e.target.value })}
                            style={{ backgroundColor: "transparent" }}
                            type="text"
                            className="form-control"
                            placeholder="Write your message.."
                            value={formCommentData.message}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="form-group form-check mt-3">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" for="exampleCheck1" style={{ color: "#3E494E" }}>save my name, email, and website in this browser for the next time i comment</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary mt-3" style={{ height: "60px", width: "200px" }}>Post Comment</button>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='search-main'>
                      <div className='search-child'>
                        <input className='searchInput' style={{ backgroundColor: "transparent", height: "100%", width: "100%", padding: "5px", border: "none" }} />
                        <button style={{ border: "none", backgroundColor: "transparent" }}><BiSearch className='icon' /></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='container posts-section p-4 mt-5'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <h4>Recent Posts</h4>
                      {featuredBlogs?.map((items) => {
                        return (
                          // <Link to={`/blog/${items.id}`} style={{color:"black",textDecoration:"none"}}>
                          <div onClick={() => getblogDetail(items.id, items.topic)} className='row mb-3' style={{ cursor: "pointer" }}>
                            <div className='posts'>
                              <div className='post1'>
                                <div>
                                  <img src={imag_url + items?.thumbnail_img} />
                                </div>

                              </div>
                              <div className='bottomText mt-3'>
                                <div>
                                  <h6> {truncateText(items.heading, 50)}</h6>
                                </div>
                                <div>
                                  <p>{new Date(items.created_at).toLocaleDateString()}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          // </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='container categories p-5 mt-5'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <h4>Categories</h4>
                      <div className='row mb-3'>
                        <div className='bottomText mt-3'>
                          <div>
                            <p>All</p>
                          </div>
                          <div>
                            <p className='totalCounts'>({totalTopicCount})</p>
                          </div>
                        </div>
                      </div>
                      {blog?.blogs?.map((item) => {
                        return (
                          <div className='row mb-3'>
                            <div className='bottomText mt-3'>
                              <div>
                                <p>{item.topic}</p>
                              </div>
                              <div>
                                <p>({item.count})</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
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

export default Blog_detail_component
