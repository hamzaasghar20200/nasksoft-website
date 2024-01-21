import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import banner from "../Images/digital-marketing.png";
import { useData } from "../Context/Context_Provider";

function Design_banner() {
  const { imag_url, design, getDesignData } = useData();
  useEffect(() => {
    getDesignData();
  }, []);
  const bannerImage = imag_url + design[0]?.secone_imageone;
  return (
    <>
      <div
        className="banner design designBannerPa"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="bannerContent">
          <div className="container">
            <div className="contentContainer row">
              <div className="bannerText col-md-6">
                <h3>{design[0]?.secone_head_one}</h3>
                <h1>{design[0]?.secone_head_two}</h1>
                <p>{design[0]?.secone_desc}</p>
              </div>
              <div className="bannerImg col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design_banner;
