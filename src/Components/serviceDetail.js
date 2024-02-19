import React, { useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import ClientSatsifaction from "./ClientSatsifaction";
import Innovate from "./Innovate";
import FAQ from "./FAQ";
import About_us_counter from "./About_us_counter";
import Skeleton from "react-loading-skeleton";
const base_url = "https://nasksoft.com/nasksoft/public/api/";
const imag_url = "https://nasksoft.com/nasksoft/public/";

export const ServiceDetail = () => {
  const { id } = useParams();
  const [getService, setGetService] = useState({});
  const details = () => {
    fetch(`${base_url}fetch-category-services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGetService(data?.category);
      });
  };
  useLayoutEffect(() => {
    details();
  }, [id]);
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
            <div
              className="rs-breadcrumbs img2  pt-100"
              style={
                Object.keys(getService)?.length > 0
                  ? {
                      backgroundImage: `linear-gradient(177deg, black, transparent), url(${imag_url}/${getService?.image})`,
                    }
                  : {}
              }
            >
              <div className="breadcrumbs-inner text-center">
                <h1 className="page-title">{getService?.name}</h1>
                <ul>
                  <li title="Brain tech - IT Solutions and Technology Startup HTML Template">
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>{getService?.name}</li>
                </ul>
              </div>
            </div>

            <div className="rs-about pt-100 mb-5">
              <div className="container mt-150 sec-title4">
                <h3 className="fw-bold fs-2">Services</h3>
                <div className="heading-line"></div>
                <div className="row mt-3">
                  {getService?.services?.map((service) => (
                    <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                      <div
                        className="portfolio__item mb-30 wow fadeIn"
                        data-wow-delay=".3s"
                      >
                        <div className="portfolio__image">
                          <Link to={`/child-service/${service?.id}`}>
                            <img
                              src={`${imag_url}${service?.image}`}
                              alt="portfolio"
                            />
                            <div className="portfolio__text">
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="container">
                {getService?.content?.map((item) => (
                  <>
                    {item?.centre_box === 1 ? (
                      <div className={`row mb-5 pb-md-5`}>
                        <div
                          className={`col-md-12 mt-md-0 my-4 ${
                            item?.reverse_row === 1 ? "order-2" : ""
                          }`}
                        >
                          <div className="software-img">
                            <img
                              src={`${imag_url}/${item?.image}`}
                              alt="images"
                              className="w-100 rounded"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mt-md-0 my-4">
                          <div
                            className={`sec-title4 ${
                              item?.reverse_row === 1 ? "text-left" : ""
                            }`}
                          >
                            <span className="sub-text">{item?.sub_title}</span>
                            <h2 className="title d-flex gap-2">
                              <div>
                                <img
                                  src={`${imag_url}/${item?.icon}`}
                                  alt="Icon"
                                  width="65"
                                  height="65"
                                />
                              </div>
                              <span>
                                {item?.title}
                                <div className="desc fs-6 fw-light mt-2">
                                  {item?.description}
                                </div>
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`${
                          item?.reverse_row === 1 ? "flex-row-reverse" : ""
                        } row mb-5 pb-md-5`}
                      >
                        <div className="col-md-6 mt-md-0 my-4">
                          <div
                            className={`sec-title4 ${
                              item?.reverse_row === 1 ? "text-left" : ""
                            }`}
                          >
                            <span className="sub-text">{item?.sub_title}</span>
                            <h2 className="title d-flex gap-2">
                              <div>
                                <img
                                  src={`${imag_url}/${item?.icon}`}
                                  alt="Icon"
                                  width="65"
                                  height="65"
                                />
                              </div>
                              <span>
                                {item?.title}
                                <div className="desc fs-6 fw-light mt-2">
                                  {item?.description}
                                </div>
                              </span>
                            </h2>
                          </div>
                        </div>
                        <div className="col-md-6 mt-md-0 my-4">
                          <div className="software-img">
                            <img
                              src={`${imag_url}/${item?.image}`}
                              alt="images"
                              className="w-100 rounded"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
            <About_us_counter />
            <ClientSatsifaction />
            <Innovate />
            <FAQ />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
