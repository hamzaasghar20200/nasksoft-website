import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import FAQ from "../Components/FAQ";
import Innovate from "../Components/Innovate";
import Footer from "../Components/Footer";
import AreYou from "../Components/AreYou";
import ClientSatsifaction from "../Components/ClientSatsifaction";
import Slider from "../Components/Slider";
import Limitation from "../Components/Limitation";
import { useData } from "../Context/Context_Provider";
import { Helmet } from "react-helmet";
import { Tab, Tabs } from "react-bootstrap";

function Home() {
  const { product, getProducts } = useData();

  useEffect(() => {
    getProducts();
  }, []);

  const title = product[0]?.meta_title || "Default Title";
  const description = product[0]?.meta_description || "Default Description";
  const tags = product[0]?.meta_tags || "Default Tags";

  // Split the tags string into an array, assuming it's comma-separated
  const tagArray = tags.split(",").map((tag) => tag.trim());
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {tagArray.map((tag, index) => (
          <meta name="keywords" content={tag} key={index} />
        ))}
      </Helmet>
      <Navbar />
      <Banner />

      <Limitation />
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
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single__bg">
                <div className="single__service">
                  <div className="single__service-icon">
                    <img
                      src="https://maxdi.vercel.app/assets/images/icon/s-icon-1.png"
                      alt="icon"
                    />
                  </div>
                  <div className="single__service-content">
                    <h3>UI/UX Design</h3>
                    <p>
                      Beautiful and Influential websites &amp; apps that are
                      mobile friendly quick to load and help drive sales giving
                      you a solid presence online.
                    </p>
                  </div>
                  <div className="single__service-link">
                    <a className="s-btn" href="/services-details">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single__bg">
                <div className="single__service">
                  <div className="single__service-icon">
                    <img
                      src="https://maxdi.vercel.app/assets/images/icon/s-icon-2.png"
                      alt="icon"
                    />
                  </div>
                  <div className="single__service-content">
                    <h3>Web Development</h3>
                    <p>
                      Beautiful and Influential websites &amp; apps that are
                      mobile friendly quick to load and help drive sales giving
                      you a solid presence online.
                    </p>
                  </div>
                  <div className="single__service-link">
                    <a className="s-btn" href="/services-details">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single__bg">
                <div className="single__service">
                  <div className="single__service-icon">
                    <img
                      src="https://maxdi.vercel.app/assets/images/icon/s-icon-3.png"
                      alt="icon"
                    />
                  </div>
                  <div className="single__service-content">
                    <h3>App Development</h3>
                    <p>
                      Beautiful and Influential websites &amp; apps that are
                      mobile friendly quick to load and help drive sales giving
                      you a solid presence online.
                    </p>
                  </div>
                  <div className="single__service-link">
                    <a className="s-btn" href="/services-details">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single__bg">
                <div className="single__service">
                  <div className="single__service-icon">
                    <img
                      src="https://maxdi.vercel.app/assets/images/icon/s-icon-4.png"
                      alt="icon"
                    />
                  </div>
                  <div className="single__service-content">
                    <h3>Digital Marketing</h3>
                    <p>
                      Beautiful and Influential websites &amp; apps that are
                      mobile friendly quick to load and help drive sales giving
                      you a solid presence online.
                    </p>
                  </div>
                  <div className="single__service-link">
                    <a className="s-btn" href="/services-details">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single__bg">
                <div className="single__service">
                  <div className="single__service-icon">
                    <img
                      src="https://maxdi.vercel.app/assets/images/icon/s-icon-5.png"
                      alt="icon"
                    />
                  </div>
                  <div className="single__service-content">
                    <h3>Content Writing</h3>
                    <p>
                      Beautiful and Influential websites &amp; apps that are
                      mobile friendly quick to load and help drive sales giving
                      you a solid presence online.
                    </p>
                  </div>
                  <div className="single__service-link">
                    <a className="s-btn" href="/services-details">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single__bg">
                <div className="single__service">
                  <div className="single__service-icon">
                    <img
                      src="https://maxdi.vercel.app/assets/images/icon/s-icon-6.png"
                      alt="icon"
                    />
                  </div>
                  <div className="single__service-content">
                    <h3>E-commerce</h3>
                    <p>
                      Beautiful and Influential websites &amp; apps that are
                      mobile friendly quick to load and help drive sales giving
                      you a solid presence online.
                    </p>
                  </div>
                  <div className="single__service-link">
                    <a className="s-btn" href="/services-details">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Degital_Design />
      <Development />
      <Degital_Marketing /> */}

      <div className="about-area pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-content">
                <div className="title">
                  <h2>
                    We are Digital agency who focused on{" "}
                    <span className="title-bg">results</span>
                  </h2>
                  <p>
                    As a digital agency, our digital toolkit includes search
                    engine optimisation, paid advertising, web development,
                    content and video, everything you need to ensure your
                    business' online visibility.
                  </p>
                </div>
                <a className="default-btn" href="about.html">
                  More About Us
                </a>
                <ul className="list-unstyled mb-0 about-list">
                  <li>
                    <span>Mentioned in, among others:</span>
                  </li>
                  <li>
                    <img
                      src="https://templates.envytheme.com/galla/default/assets/img/about/about-3.png"
                      alt="about-3"
                    />
                  </li>
                  <li>
                    <img
                      src="https://templates.envytheme.com/galla/default/assets/img/about/about-4.png"
                      alt="about-4"
                    />
                  </li>
                  <li>
                    <img
                      src="https://templates.envytheme.com/galla/default/assets/img/about/about-5.png"
                      alt="about-5"
                    />
                  </li>
                  <li>
                    <img
                      src="https://templates.envytheme.com/galla/default/assets/img/about/about-6.png"
                      alt="about-6"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-image">
                <div className="row g-0 align-items-end">
                  <div className="col-lg-7 col-md-7">
                    <div className="image-1">
                      <img
                        src="https://templates.envytheme.com/galla/default/assets/img/about/about-1.png"
                        alt="about-1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <div className="image-2">
                      <img
                        src="https://templates.envytheme.com/galla/default/assets/img/about/about-2.png"
                        alt="about-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="shape-20">
                  <img
                    src="https://templates.envytheme.com/galla/default/assets/img/shape/shape-20.png"
                    alt="shape-20"
                  />
                </div>
                <div className="shape-21">
                  <img
                    src="https://templates.envytheme.com/galla/default/assets/img/shape/shape-21.png"
                    alt="shape-21"
                  />
                </div>
                <div className="shape-22">
                  <img
                    src="https://templates.envytheme.com/galla/default/assets/img/shape/shape-22.png"
                    alt="shape-22"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg">
          <img
            src="https://templates.envytheme.com/galla/default/assets/img/bg/bg-1.png"
            alt="bg-1"
          />
        </div>
      </div>
      <Slider />

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
              defaultActiveKey="home"
              id="fill-tab-example"
              className="portfolio__menu nav nav-tabs"
              fill
            >
              <Tab eventKey="home" className="nav-link" title="Show All">
                <div className="mt-150 row">
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/portfolio-1.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>UI/UX Design</p>
                          <h3>
                            <a href="/single-portfolio">Digital Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/portfolio-5.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Marketing</p>
                          <h3>
                            <a href="/single-portfolio">Marketing Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/portfolio-3.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Development</p>
                          <h3>
                            <a href="/single-portfolio">Creative Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-1.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Content Writing</p>
                          <h3>
                            <a href="/single-portfolio">Digital Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-2.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Social Ad</p>
                          <h3>
                            <a href="/single-portfolio">Marketing Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-3.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>App Design</p>
                          <h3>
                            <a href="/single-portfolio">Creative Agency</a>
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
                </div>
              </Tab>
              <Tab eventKey="design" className="nav-link" title="UI/UX Design">
                <div className="mt-150 row">
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/portfolio-3.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Development</p>
                          <h3>
                            <a href="/single-portfolio">Creative Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-1.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Content Writing</p>
                          <h3>
                            <a href="/single-portfolio">Digital Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-2.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Social Ad</p>
                          <h3>
                            <a href="/single-portfolio">Marketing Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-3.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>App Design</p>
                          <h3>
                            <a href="/single-portfolio">Creative Agency</a>
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
                </div>
              </Tab>
              <Tab eventKey="marketing" className="nav-link" title="Marketing">
                <div className="mt-150 row">
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/portfolio-3.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Development</p>
                          <h3>
                            <a href="/single-portfolio">Creative Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-1.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Content Writing</p>
                          <h3>
                            <a href="/single-portfolio">Digital Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-3.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>App Design</p>
                          <h3>
                            <a href="/single-portfolio">Creative Agency</a>
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
                </div>
              </Tab>
              <Tab
                eventKey="development"
                className="nav-link"
                title="Development"
              >
                <div className="mt-150 row">
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-2.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>Social Ad</p>
                          <h3>
                            <a href="/single-portfolio">Marketing Agency</a>
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
                  <div className="col-xl-4 mt-3 col-lg-4 col-md-6">
                    <div
                      className="portfolio__item mb-30 wow fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="portfolio__image">
                        <img
                          src="https://maxdi.vercel.app/assets/images/portfolio/p-3.jpg"
                          alt="portfolio"
                        />
                        <div className="portfolio__text">
                          <p>App Design</p>
                          <h3>
                            <a href="/single-portfolio">Creative Agency</a>
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
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
      <AreYou />
      <ClientSatsifaction />
      <Innovate />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
