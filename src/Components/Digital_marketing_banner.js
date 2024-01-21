import React, { useEffect } from "react";
import { useData } from "../Context/Context_Provider";

function Digital_marketing_banner() {
  const { imag_url, digitalMarketingData, getDigitalMarketing } = useData();
  useEffect(() => {
    getDigitalMarketing();
  }, []);
  const bannerImage = imag_url + digitalMarketingData[0]?.secone_image;

  return (
    <>
      <div
        className="banner design designBannerPa"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="bannerContent pb-1">
          <div className="container">
            <div className="contentContainer row">
              <div className="bannerText col-md-6">
                <h3>{digitalMarketingData[0]?.secone_headingone}</h3>
                <h1>{digitalMarketingData[0]?.secone_headingtwo}</h1>
                <p
                  style={{ wordWrap: "break-word", color: "#fff" }}
                  dangerouslySetInnerHTML={{
                    __html: digitalMarketingData[0]?.secone_desc,
                  }}
                ></p>
              </div>
              <div className="bannerImg col-md-6 mt-3 mb-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Digital_marketing_banner;
