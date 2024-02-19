import React, { useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import Slider from "./Slider";
import AreYou from "./AreYou";
import FAQ from "./FAQ";
import Skeleton from "react-loading-skeleton";
import Contact_form from "./Contact_form";
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
              className="rs-breadcrumbs img2 pt-100"
              style={
                getService?.image
                  ? {
                      backgroundImage: `linear-gradient(177deg, black, transparent), url(${imag_url}/${getService?.image})`,
                    }
                  : {}
              }
            >
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
                        to={`/service/${getService?.category?.id}`}
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
                {getService?.content?.map((item) => (
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
                ))}
              </div>
            </div>
            <div className="container">
              <div className="row mb-5">
                {getService?.gallery_images?.map((img) => (
                  <div className="col">
                    <img
                      src={`${imag_url}/${img?.image}`}
                      className="w-100 rounded"
                      alt="related-icon"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Contact_form rowReverse={true} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
