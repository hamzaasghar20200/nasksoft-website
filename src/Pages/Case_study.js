import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Shopping from '../Components/Shopping' 
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useData } from '../Context/Context_Provider'
import { Helmet } from 'react-helmet'

function Case_study() {
  const { caseBanner, getcasebanner } = useData()
  useEffect(() => {
    getcasebanner();
  }, []);

  const title = caseBanner[0]?.meta_title || 'Default Title';
  const description = caseBanner[0]?.meta_description || 'Default Description';
  const tags = caseBanner[0]?.meta_tags || 'Default Tags';

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
        <Navbar/>
        <Header/>
        <Shopping/>
        <Footer/>
    </>
  )
}

export default Case_study
