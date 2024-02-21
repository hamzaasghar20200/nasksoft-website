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
          {getServices?.map((service) => (
            <div className="col-xl-3 mt-3 col-lg-4 col-sm-6">
              <div
                className="portfolio__item mb-30 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div className="portfolio__image">
                  <img src={`${imag_url}${service?.image}`} alt="portfolio" />
                  <div className="portfolio__text">
                    <h3>
                      <Link to={`/service/${service?.id}`}>
                        {service?.name}
                      </Link>
                    </h3>
                    <p
                      className="services"
                      dangerouslySetInnerHTML={{
                        __html: service?.description,
                      }}
                    ></p>
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
