import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
const imag_url = "https://nasksoft.com/nasksoft/public/";

export const CategoriesTab = ({ getServices = [] }) => {
  const [activeKey, setActiveKey] = useState(getServices[0]?.id);

  const handleTabSelect = (key) => {
    setActiveKey(key);
  };
  return (
    <section className="portfolio__area fix position-relative pb-90 pt-100">
      <div className="portfolio__shape">
        <img
          className="portfolio-s-1 d-xl-flex d-none"
          src="https://maxdi.vercel.app/assets/images/shape/portfolio/portfolio-s-1.png"
          alt=""
        />
        <img
          className="portfolio-s-2"
          src="https://maxdi.vercel.app/assets/images/shape/portfolio/portfolio-s-2.png"
          alt=""
        />
        <img
          className="portfolio-s-3 d-none d-sm-block"
          src="https://maxdi.vercel.app/assets/images/shape/portfolio/portfolio-s-3.png"
          alt=""
        />
        <img
          className="portfolio-s-4"
          src="https://maxdi.vercel.app/assets/images/shape/portfolio/portfolio-s-4.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="portfolio__wrapper">
              <div className="portfolio__content">
                <div className="portfolio__title">
                  <h4 className="section__sub-title">Portfolio</h4>
                  <h2 className="section__title">
                    <span>Some of our amazing works</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <Tabs
            defaultActiveKey={activeKey}
            activeKey={activeKey}
            onSelect={handleTabSelect}
            id="fill-tab-example"
            className="portfolio__menu nav nav-tabs"
            fill
          >
            {getServices?.map((category) => (
              <Tab
                key={category.id}
                eventKey={category.id}
                title={category.name}
              >
                <div className="mt-150 row">
                  {category?.services.map((service) => (
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
                              <div className="portfolio__link">
                                <Link to={`/child-service/${service?.id}`}>
                                  <i className="fas fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const ServiceTabs = ({ categories }) => {
  return (
    <Tabs className="mb-3">
      {categories.map((category) => (
        <Tab key={category.id} eventKey={category.id} title={category.name}>
          <CategoryServices services={category.services} />
        </Tab>
      ))}
    </Tabs>
  );
};

const CategoryServices = ({ services }) => {
  return (
    <div>
      {services.map((service) => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          {/* Add additional details or components for the service */}
        </div>
      ))}
    </div>
  );
};

const YourComponent = ({ data }) => {
  return (
    <div>
      <h2>Services</h2>
      <ServiceTabs categories={data} />
    </div>
  );
};

export default YourComponent;
