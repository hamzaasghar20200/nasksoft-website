import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { Categories } from "../Components/Categories";
import { CategoriesTab } from "../Components/CategoriesTab";
let base_url = "https://nasksoft.com/nasksoft/public/api/";
function Home() {
  const { product, getProducts } = useData();
  const [getServices, setGetServices] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const title = product[0]?.meta_title || "Default Title";
  const description = product[0]?.meta_description || "Default Description";
  const tags = product[0]?.meta_tags || "Default Tags";
  const getAllServices = () => {
    fetch(`${base_url}fetch-categories`)
      .then((res) => res.json())
      .then((data) => {
        setGetServices(data);
      });
  };
  // Split the tags string into an array, assuming it's comma-separated
  const tagArray = tags.split(",").map((tag) => tag.trim());
  useLayoutEffect(() => {
    getAllServices();
  }, []);
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
      <Categories getServices={getServices} />
      {/* <Degital_Design />
      <Development />
      <Degital_Marketing /> */}
      <Slider />
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
                    <img src="/images/EF.png" alt="about-3" />
                  </li>
                  <li>
                    <img src="/images/LMF.png" alt="about-4" />
                  </li>
                  <li>
                    <img src="/images/WSO.png" alt="about-5" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-image">
                <div className="row g-0 align-items-end">
                  <div className="col-lg-7 col-md-7">
                    <div className="image-1">
                      <img src="/images/3.png" alt="about-1" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <div className="image-2">
                      <img src="/images/4.png" alt="about-2" />
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

      <CategoriesTab getServices={getServices} />
      <AreYou />
      <ClientSatsifaction />
      <Innovate />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
