import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Development_banner from '../Components/Development_banner'
import Development_cards from '../Components/Development_cards '
import Development_approach from '../Components/Development_approach '
import Development_tools from '../Components/Development_tools'
import Development_quote from '../Components/Development_quote'
import Development_expertise from '../Components/Development_expertise'
import Development_feature from '../Components/Development_feature'
import Development_FAQ from '../Components/Development_FAQ'
import Development_innovate from '../Components/Developme_innovate'
import Footer from '../Components/Footer'
import Development_quote2 from './Development_quote2'
import { useData } from '../Context/Context_Provider'
import { Helmet } from 'react-helmet'
import DevelopmentCaseSlider from '../Components/DevelopmentCaseSlider'

function Development_page() {
  const { getIndividualService, individualService } = useData()
  const id = window.location.pathname.split("/")[3]
  useEffect(() => {
    getIndividualService(id);
  }, []);
  const title = individualService?.meta_title || 'Default Title';
  const description = individualService?.meta_description || 'Default Description';
  const tags = individualService?.meta_tags || 'Default Tags';

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
      <Development_banner />
      <Development_cards />
      <DevelopmentCaseSlider/>
      <Development_approach />
      <Development_tools />
      <div style={{ position: "relative" }}>
        <Development_quote />
        <Development_quote2 />
      </div>
      <Development_expertise />
      <Development_feature />
      <Development_FAQ />
      <Development_innovate />
      <Footer />
    </>
  )
}

export default Development_page