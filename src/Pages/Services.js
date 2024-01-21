import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Design_banner from '../Components/Design_banner'
import Design_Services from '../Components/Design_Services'
import Design_approach from '../Components/Design_approach'
import Experties from '../Components/Experties'
import Growth from '../Components/Growth'
import Degital_FAQ from '../Components/Degital_FAQ '
import Innovate from '../Components/Innovate'
import Degital_cards from '../Components/Degital_cards'
import { Helmet } from 'react-helmet'
import { useData } from '../Context/Context_Provider'
import DesignSlider from '../Components/DesignSlider'

function Services() {

  const { design, getDesignData } = useData()
  useEffect(() => {
    getDesignData();
  }, []);

  const title = design[0]?.meta_title || 'Default Title';
  const description = design[0]?.meta_description || 'Default Description';
  const tags = design[0]?.meta_tags || 'Default Tags';

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
      <Design_banner />
      <Degital_cards />
      <DesignSlider/>
      <Design_Services />
      <Design_approach />
      <Experties />
      <Growth />
      <Degital_FAQ />
      <Innovate />
      <Footer />
    </>
  )
}

export default Services