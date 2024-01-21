import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Digital_marketing_banner from "../Components/Digital_marketing_banner";
import Digital_marketing_cards from "../Components/Digital_marketing_cards";
import Digital_marketing_case from "../Components/Digital_marketing_case";
import Digital_marketing_process from "../Components/Digital_marketing_process";
import Digital_marketing_speak from "../Components/Digital_marketing_speak";
import Digital_marketing_feature from "../Components/Digital_marketing_feature";
import Footer from "../Components/Footer";
import Innovate from "../Components/Innovate";
import Digital_marketing_Faq from "../Components/Digital_marketing_Faq";
import Slider from "../Components/Slider";
import { useData } from "../Context/Context_Provider";
import { Helmet } from "react-helmet";

function Digital_marketing() {
  const { digitalMarketingData, getDigitalMarketing } = useData();
  useEffect(() => {
    getDigitalMarketing();
  }, []);

  const title = digitalMarketingData[0]?.meta_title || "Default Title";
  const description =
    digitalMarketingData[0]?.meta_description || "Default Description";
  const tags = digitalMarketingData[0]?.meta_tags || "Default Tags";

  // Split the tags string into an array, assuming it's comma-separated
  const tagArray = tags.split(",").map((tag) => tag.trim());
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
      <Digital_marketing_banner />
      <Digital_marketing_cards />
      <Digital_marketing_case />
      <Digital_marketing_process />
      <Digital_marketing_speak />
      <Digital_marketing_feature />
      <Digital_marketing_Faq />
      <Innovate />
      <Footer />
    </>
  );
}

export default Digital_marketing;
