import React, { useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import Slider from "./Slider";
import AreYou from "./AreYou";
import FAQ from "./FAQ";
import Skeleton from "react-loading-skeleton";
const base_url = "https://nasksoft.com/nasksoft/public/api/";
const imag_url = "https://nasksoft.com/nasksoft/public/";

export const InnerServiceDetail = () => {
  const { id } = useParams();
  const [getService, setGetService] = useState({});
  const details = () => {
    fetch(`${base_url}fetch-services-detail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGetService(data);
      });
  };
  useLayoutEffect(() => {
    details();
  }, []);
  return (
    <>
      {Object.keys(getService)?.length === 0 ? (
        <>
          <div className="row mx-2">
            <div className="col-12 mt-3">
              <Skeleton height="500px" />
            </div>
            <div className="col-6 mt-3">
              <Skeleton height="100px" />
            </div>
            <div className="col-6 mt-3">
              <Skeleton height="100px" />
            </div>
          </div>
          <div className="row mt-3 mx-2">
            <div className="col-6">
              <Skeleton height="100px" />
            </div>
            <div className="col-6">
              <Skeleton height="100px" />
            </div>
          </div>
        </>
      ) : (
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
                  {getService?.category?.name && (
                    <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                      <Link
                        to={`service/${getService?.category?.id}`}
                        className="active"
                      >
                        {getService?.category?.name}
                      </Link>
                    </li>
                  )}
                  <li>{getService?.name}</li>
                </ul>
              </div>
            </div>

            <div className="rs-about pt-100">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 pr-40 md-pr-15 md-mb-50">
                    <div className="sec-title4">
                      <span className="sub-text">{getService?.name}</span>
                      <h2 className="title">
                        We Help to Implement Your Ideas into Automation
                      </h2>
                      <div className="heading-line"></div>
                      <div className="desc desc-big">
                        We donec pulvinar magna id leoersi pellentesque impered
                        dignissim rhoncus euismod euismod eros vitae best
                        consulting &amp; financial services theme .
                      </div>
                      <div className="desc">
                        Business ipsum dolor sit amet nsectetur cing elit. Suspe
                        ndisse suscipit sagittis leo sit met entum is not
                        estibulum dignity sim posuere cubilia durae. Leo sit met
                        entum cubilia crae. At vero eos accusamus et iusto odio
                        dignissimos provident nam libero tempore, cum soluta.
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

              <div className="container">
                <div className="mt-150 row">
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
                              <a href="/single-portfolio">{service?.name}</a>
                            </h3>
                            <div className="portfolio__link">
                              <a href="/single-portfolio">
                                <i className="fas fa-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <section
              className="services my-5"
              dangerouslySetInnerHTML={{
                __html: getService?.content,
              }}
            ></section>
            <Slider />
            <div className="mt-5 pt-5">
              <AreYou />
            </div>
          </div>
          <FAQ />
          <Footer />
        </>
      )}
    </>
  );
};
