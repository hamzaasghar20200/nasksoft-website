import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Contact_form from '../Components/Contact_form'
import Footer from '../Components/Footer'
import { useData } from '../Context/Context_Provider'
import { Helmet } from 'react-helmet'

function Contact_us() {
  const { contactDetail, getContactDetails, } = useData()
  useEffect(() => {
    getContactDetails();
  }, []);

  const title = contactDetail[0]?.meta_title || 'Default Title';
  const description = contactDetail[0]?.meta_description || 'Default Description';
  const tags = contactDetail[0]?.meta_tags || 'Default Tags';

  // Split the tags string into an array, assuming it's comma-separated
  const tagArray = tags.split(',').map((tag) => tag.trim());
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {tagArray.map((tag, index) => (
          <meta name="keywords" content={tag} key={index} />
        ))}
      </Helmet>
      <Navbar />
      <Contact_form />
      <Footer />
    </>
  )
}

export default Contact_us