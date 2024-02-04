import React from "react";
import { Link } from "react-router-dom";
const imag_url = "https://nasksoft.com/nasksoft/public/";

export const Categories = ({ getServices = [] }) => {
  return (
    <section className="services__area p-relative fix pt-100 pb-75">
      <div className="services__shape">
        <img
          className="services-s-1"
          src="https://maxdi.vercel.app/assets/images/shape/services/services-s-1.png"
          alt=""
        />
        <img
          className="services-s-2"
          src="https://maxdi.vercel.app/assets/images/shape/services/services-s-2.png"
          alt=""
        />
        <img
          className="services-s-3"
          src="https://maxdi.vercel.app/assets/images/shape/services/services-s-3.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="mb-55 row">
          <div className="col-xl-6">
            <div className="services__title">
              <h4 className="section__sub-title">Services</h4>
              <h2 className="section__title mb-4">
                <span>What we do</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {getServices?.map((item) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={item?.id}>
              <div className="single__bg">
                <div className="single__service">
                  <div className="single__service-icon">
                    <img src={`${imag_url}${item?.image}`} alt="icon" />
                  </div>
                  <div className="single__service-content">
                    <h3>{item?.name}</h3>
                    <p
                      className="services"
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></p>
                  </div>
                  <div className="single__service-link">
                    <Link to={`service/${item?.id}`} className="s-btn">
                      Find out more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
