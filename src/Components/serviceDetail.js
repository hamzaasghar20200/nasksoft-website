import React, { useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import ClientSatsifaction from "./ClientSatsifaction";
import Innovate from "./Innovate";
import FAQ from "./FAQ";
import About_us_counter from "./About_us_counter";
const base_url = "https://nasksoft.com/nasksoft/public/api/";
const imag_url = "https://nasksoft.com/nasksoft/public/";

export const ServiceDetail = () => {
  const { id } = useParams();
  console.log(id, "asbdas");
  const [getService, setGetService] = useState({});
  const details = () => {
    fetch(`${base_url}fetch-category-services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "getService");

        setGetService(data?.category);
      });
  };
  useLayoutEffect(() => {
    details();
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="rs-breadcrumbs img2  pt-100">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">{getService?.name}</h1>
            <ul>
              <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>{getService?.name}</li>
            </ul>
          </div>
        </div>

        <div className="rs-about pt-120 pb-90 pt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 pr-40 md-pr-15 md-mb-50">
                <div className="sec-title4">
                  <span className="sub-text">{getService?.name}</span>
                  <h2 className="title">
                    We Help to Implement Your Ideas into Automation
                  </h2>
                  <div className="heading-line"></div>
                  <div className="desc">
                    {" "}
                    <p
                      className="services mt-4"
                      dangerouslySetInnerHTML={{
                        __html: getService?.description,
                      }}
                    ></p>
                  </div>
                  <div className="btn-part mt-5">
                    <Link to={"/contact_us"} className="readon learn-more">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="software-img">
                  <img
                    src="https://rstheme.com/products/html/braintech/assets/images/about/about-us/1.jpg"
                    alt="images"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-150 sec-title4">
            <h3 className="fw-bold fs-2">Inner Services</h3>
            <div className="heading-line"></div>
            <div className="row mt-3">
              {getService?.services?.map((service) => (
                <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                  <div
                    className="portfolio__item mb-30 wow fadeIn"
                    data-wow-delay=".3s"
                  >
                    <div className="portfolio__image">
                      <img
                        src={`${imag_url}${service?.image}`}
                        alt="portfolio"
                      />
                      <div className="portfolio__text">
                        <p
                          className="services"
                          dangerouslySetInnerHTML={{
                            __html: service?.description,
                          }}
                        ></p>
                        <h3>
                          <Link to={`/child-service/${service?.id}`}>
                            {service?.name}
                          </Link>
                        </h3>
                        <div className="portfolio__link">
                          <Link to={`/child-service/${service?.id}`}>
                            <i className="fas fa-plus"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <About_us_counter />
        <div id="rs-about" className="rs-about gray-color pb-90 pt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pr-45 md-pr-15 md-mb-50">
                <div className="choose-img">
                  <img
                    src="https://rstheme.com/products/html/braintech/assets/images/choose/3.png"
                    alt="images"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title mb-30">
                  <div className="sub-text heading-line choose">
                    Why Choose Us
                  </div>
                  <h2 className="title pb-20">
                    We Are Increasing Business Success With Technology
                  </h2>
                  <div className="desc mt-2">
                    Over 25 years working in IT services developing software
                    applications and mobile apps for clients all over the world.
                  </div>
                </div>
                <div className="rs-skillbar style1 modify1">
                  <div className="cl-skill-bar mt-4">
                    <span className="skillbar-title">Software Development</span>
                    <div className="skillbar" data-percent="92">
                      <p className="skillbar-bar" style={{ width: "90%" }}></p>
                      <span className="skill-bar-percent">90%</span>
                    </div>
                    <span className="skillbar-title">Web Development</span>
                    <div className="skillbar" data-percent="80">
                      <p className="skillbar-bar" style={{ width: "95%" }}></p>
                      <span className="skill-bar-percent">95%</span>
                    </div>
                    <span className="skillbar-title">SEO Analysis</span>
                    <div className="skillbar" data-percent="95">
                      <p className="skillbar-bar" style={{ width: "95%" }}></p>
                      <span className="skill-bar-percent">95%</span>
                    </div>
                    <span className="skillbar-title">UI UX Designing</span>
                    <div className="skillbar" data-percent="78">
                      <p className="skillbar-bar" style={{ width: "85%" }}></p>
                      <span className="skill-bar-percent">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ClientSatsifaction />
        <Innovate />
        <FAQ />
      </div>
      <Footer />
    </>
  );
};
