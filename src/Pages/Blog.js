import React, { useEffect, useState } from 'react'
import Blog_component from '../Components/Blog_component'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useData } from '../Context/Context_Provider'
import { Helmet } from 'react-helmet'

function Blog() {
  const { blog, getBlogData, } = useData()
  useEffect(() => {
    getBlogData()
  }, []);
  const [data, setdata] = useState()
  useEffect(() => {
    blog?.blog?.map((item, i) => {
      if (i == 0) {
        setdata(item)
      }
    })
  }, [blog]);
  const title = data?.meta_title || 'Default Title';
  const description = data?.meta_description || 'Default Description';
  const tags = data?.meta_tags || 'Default Tags';
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
      <Blog_component />
      <Footer />
    </>
  )
}

export default Blog