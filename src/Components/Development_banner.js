import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import banner from "../Images/dev.png";
import { useData } from "../Context/Context_Provider";
import { useParams } from "react-router-dom";

function Development_banner() {
  const params = useParams();
  const id = window.location.pathname.split("/")[3];
  const {
    imag_url,
    developmentData,
    getDevelopmentData,
    getIndividualService,
    individualService,
    singleService,
  } = useData();
  useEffect(() => {
    getIndividualService(id);
  }, [params.id]);
  return (
    <>
      <div
        className="banner design designBannerPa"
        style={{
          backgroundImage: `url(${
            imag_url + individualService?.secone_imageone
          })`,
        }}
      >
        <div className="bannerContent">
          <div className="container">
            <div className="contentContainer row">
              <div className="bannerText col-md-6">
                <h3>{individualService?.secone_head_one}</h3>
                <h1>{individualService?.secone_sub_head}</h1>
                <p
                  style={{ wordWrap: "break-word", color: "#fff" }}
                  dangerouslySetInnerHTML={{
                    __html: individualService?.secone_desc,
                  }}
                ></p>
              </div>
              <div className="bannerImg col-md-6 mt-3 mb-1">
                {/* <img src= className='img-fluid' style={{ height: "100%" }} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Development_banner;
