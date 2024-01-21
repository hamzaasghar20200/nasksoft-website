import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import About_us_banner from '../Components/About_us_banner'
import About_us_question from '../Components/About_us_question'
import About_us_counter from '../Components/About_us_counter'
import About_us_mission from '../Components/About_us_mission'
import About_us_value from '../Components/About_us_value'
import { useData } from '../Context/Context_Provider'
import { Helmet } from 'react-helmet'
function About_us() {
  const { about, getAbout } = useData()
  useEffect(() => {
    getAbout();
  }, []);
  console.log(about);
  const title = about[0]?.meta_title || 'Default Title';
  const description = about[0]?.meta_description || 'Default Description';
  const tags = about[0]?.meta_tags || 'Default Tags';

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
      <About_us_banner />
      <About_us_question />
      <About_us_counter />
      <About_us_mission />
      <About_us_value />
      <Footer />

    </>
  )
}

export default About_us