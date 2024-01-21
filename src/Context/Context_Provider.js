import React, { createContext, useContext, useState } from 'react'
import swal from 'sweetalert'
export const ApiData = createContext()
export const DataProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const [about, setAbout] = useState([])
    const [homeBanner, setHomeBanner] = useState([])
    const [design, setDesign] = useState([])
    const [expertice, setExpertce] = useState([])
    const [growth, setGrowth] = useState([])
    const [blog, setBlog] = useState([{}])
    const [contactDetail, setContactDetail] = useState([])
    const [socialLinks, setSocialLinks] = useState([])
    const [websiteSetting, setWebSetting] = useState()
    const [inovate, setInovate] = useState([])
    const [testimonial, setTestimonails] = useState([])
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const [digitalMarketingData, setDigitalMarketingData] = useState([]);
    const [developmentData, setDevelopmentData] = useState([])
    const [individualService, setIndividualService] = useState([])
    const [caseData, setCaseData] = useState()
    const [caseIndiviual, setCaseIndiviual] = useState([])
    const [formData, setFormData] = useState({})
    const [faqData, setFaqData] = useState([])
    const [fistService, setFirstService] = useState([])
    const [latestBlog, setLatestBlog] = useState()
    const [comment, setComment] = useState({})
    const [caseBanner, setcaseBanner] = useState([])

    let base_url = 'https://nasksoft.com/nasksoft/public/api/'
    let imag_url = 'https://nasksoft.com/nasksoft/public/'
    const getProducts = () => {
        fetch(`${base_url}homepage-data`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }
    const getAbout = () => {
        fetch(`${base_url}about-data`)
            .then(res => res.json())
            .then(data => {
                setAbout(data)
            })
    }

    const getHomeBanner = () => {
        fetch(`${base_url}home-slider-data`)
            .then(res => res.json())
            .then(data => {
                setHomeBanner(data)
            })
    }
    const getDesignData = () => {
        fetch(`${base_url}designingpage-data`)
            .then(res => res.json())
            .then(data => {
                setDesign(data)
            })
    }
    const getExpertiseData = () => {
        fetch(`${base_url}expertise-data`)
            .then(res => res.json())
            .then(data => {
                setExpertce(data)
            })
    }
    const getGrowthData = () => {
        fetch(`${base_url}growth-data`)
            .then(res => res.json())
            .then(data => {
                setGrowth(data)
            })
    }
    const getBlogData = () => {
        fetch(`${base_url}blogs-data`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }
    const [blogDetaldata, setblogDetaldata] = useState([])
    const getBlogDetail = (id) => {
        fetch(`${base_url}blogs-individual-data/${id}`)
            .then(res => res.json())
            .then(data => {
                setblogDetaldata(data)
            })
    }
    const [blogComment, setBlogComment] = useState()
    const getBlogComments = (id) => {
        fetch(`${base_url}comments-blog-data/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlogComment(data)
                getBlogDetail(id)
            })
    }
    const getContactDetails = () => {
        fetch(`${base_url}contact_details-data`)
            .then(res => res.json())
            .then(data => {
                setContactDetail(data)
            })
    }
    const getSocialLinks = () => {
        fetch(`${base_url}sociallinks-data`)
            .then(res => res.json())
            .then(data => {
                setSocialLinks(data)
            })
    }
    const getWebSettings = () => {
        fetch(`${base_url}websettings-data`)
            .then(res => res.json())
            .then(data => {
                setWebSetting(data)
            })
    }
    const getInovate = () => {
        fetch(`${base_url}innovate-data`)
            .then(res => res.json())
            .then(data => {
                setInovate(data)
            })
    }
    const getTestimonials = () => {
        fetch(`${base_url}testimonials-data`)
            .then(res => res.json())
            .then(data => {
                setTestimonails(data)
            })
    }
    const getFeatueredData = () => {
        fetch(`${base_url}featured-blogs-data`)
            .then(res => res.json())
            .then(data => {
                setFeaturedBlogs(data)
            })
    }
    const getDigitalMarketing = () => {
        fetch(`${base_url}digital-marketing-data`)
            .then(res => res.json())
            .then(data => {
                setDigitalMarketingData(data)
            })
    }
    const getDevelopmentData = () => {
        fetch(`${base_url}services-data`)
            .then(res => res.json())
            .then(data => {
                setDevelopmentData(data)
            })
    }
    const [singleService, setSingleService] = useState()
    const getIndividualService = (id) => {
        fetch(`${base_url}services-individiual-data/${id}`)
            .then(res => res.json())
            .then(data => {
                setIndividualService(data)
            })
    }
    const getCaseData = () => {
        fetch(`${base_url}casestudy-data`)
            .then(res => res.json())
            .then(data => {
                setCaseData(data)
            })
    }
    const { singleCase, setSingleCase } = useState()
    const getCaseIndidual = (id) => {
        fetch(`${base_url}casestudyindividual-data/${id}`)
            .then(res => res.json())
            .then(data => {
                setCaseIndiviual(data)
            })
    }
    const sendFromData = (formInputData) => {
        fetch(`${base_url}contact`, {
            method: 'POST', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json', // Specify the content type
                // Add any other headers if needed
            },
            body: JSON.stringify(formInputData), // Convert data to JSON format
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json(); // Parse response data as JSON
            })
            .then((data) => {
                console.log('Data:', data);
                if (data?.message == "Contact Form Submit Successfully") {
                    swal({
                        title: data.message,
                        text: "Contact Form Submit Successfully",
                        icon: "success",
                        dangerMode: false,
                    }) // Process the fetched data
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error); // Handle errors
            });
    }
    const sendCommentData = (formCommentData) => {
        fetch(`${base_url}comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formCommentData),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log('Data:', data);
                if (data?.message === "Comment Created Successfully") {
                    // Display SweetAlert if comment submission is successful
                    swal({
                        title: "Success",
                        text: "Comment submitted successfully",
                        icon: "success",
                        dangerMode: false,
                    });
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }
    const getFaqData = () => {
        fetch(`${base_url}faq-data`)
            .then(res => res.json())
            .then(data => {
                setFaqData(data)
            })
    }
    const getFirstServiceData = () => {
        fetch(`${base_url}service-first-data`)
            .then(res => res.json())
            .then(data => {
                setFirstService(data)
            })
    }

    const [industry, setIndustry] = useState([])
    const getIndustryData = () => {
        fetch(`${base_url}diverse-industry-data`)
            .then(res => res.json())
            .then(data => {
                setIndustry(data)
            })
    }
    const getLatestBlogData = () => {
        fetch(`${base_url}blogs_latest-data`)
            .then(res => res.json())
            .then(data => {
                setLatestBlog(data)
            })
    }
    const getcasebanner = () => {
        fetch(`${base_url}casestudy-banner-data`)
            .then(res => res.json())
            .then(data => {
                setcaseBanner(data)
            })
    }
    return (
        <ApiData.Provider value={{
            product,
            getProducts,
            about,
            getAbout,
            getHomeBanner,
            homeBanner,
            design,
            getDesignData,
            expertice,
            getExpertiseData,
            growth,
            getGrowthData,
            blog,
            getBlogData,
            contactDetail,
            getContactDetails,
            socialLinks,
            getSocialLinks,
            websiteSetting,
            getWebSettings,
            inovate,
            getInovate,
            testimonial,
            getTestimonials,
            getBlogDetail,
            blogDetaldata,
            featuredBlogs,
            getFeatueredData,
            digitalMarketingData,
            getDigitalMarketing,
            developmentData,
            getDevelopmentData,
            getIndividualService,
            individualService,
            singleService,
            caseData,
            getCaseData,
            caseIndiviual,
            getCaseIndidual,
            singleCase,
            sendFromData,
            formData,
            faqData,
            getFaqData,
            fistService,
            getFirstServiceData,
            latestBlog,
            getLatestBlogData,
            industry,
            getIndustryData,
            imag_url,
            comment,
            sendCommentData,
            caseBanner,
            getcasebanner,
            blogComment,
            getBlogComments

        }}>
            {children}
        </ApiData.Provider>
    )
}
export const useData = () => useContext(ApiData)