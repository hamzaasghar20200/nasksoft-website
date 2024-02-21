import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronUp, FaEnvelope, FaPhone } from "react-icons/fa";
import { useData } from "../Context/Context_Provider";
const base_url = "https://nasksoft.com/nasksoft/public/api/";

function Footer() {
  const {
    imag_url,
    socialLinks,
    getSocialLinks,
    websiteSetting,
    getWebSettings,
    developmentData,
    getDevelopmentData,
    sendCommentData,
    getIndividualService,
  } = useData();
  useEffect(() => {
    getSocialLinks();
    getWebSettings();
    getDevelopmentData();
    sendCommentData();
    getIndividualService();
  }, []);
  const handelbacktotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showServicesCount, setShowServicesCount] = useState(3); // Initially show 3 services
  const [getServices, setGetServices] = useState([]);
  const getAllServices = () => {
    fetch(`${base_url}fetch-categories`)
      .then((res) => res.json())
      .then((data) => {
        setGetServices(data);
      });
  };
  useEffect(() => {
    getAllServices();
  }, []);
  const handleSeeMore = () => {
    // Show 3 more services when "See More" is clicked
    setShowServicesCount(showServicesCount + 3);
  };

  const handleSeeLess = () => {
    // Show only 3 services when "See Less" is clicked
    setShowServicesCount(3);
  };
  const navigate = useNavigate();
  const getSeviceName = (id, name) => {
    navigate(`/services/${name}/${id}`);
    getDevelopmentData(id);
    getIndividualService(id);
  };

  return (
    <>
      <div className="footer p-5">
        <div className="container">
          <div className="row backtotop">
            <div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "#0e78b9",
                  padding: "12px 18px",
                  borderRadius: "50%",
                  color: "#fff",
                  fontSize: "25px",
                }}
                onClick={handelbacktotop}
              >
                <FaChevronUp />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 fSec">
              <img
                src={imag_url + websiteSetting?.websetting[0]?.foot_logo}
                alt="navbar-logo"
                className="d-md-none w-75"
              />
              <h4 className="heading mt-4">Services </h4>
              <ul className="footerLinks" style={{ columnCount: 2 }}>
                {getServices?.map((item) => (
                  <li className="nav-item mb-1">
                    <Link
                      to={`/service/${item?.id}`}
                      className="nav-link font-13 text-white"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
                {developmentData?.slice(0, showServicesCount).map((service) => (
                  <li
                    className="nav-item mb-1"
                    key={service.id}
                    onClick={() =>
                      getSeviceName(service.id, service.secone_head_one)
                    }
                  >
                    <Link className="nav-link font-13 text-white">
                      {service?.secone_head_one}
                    </Link>
                  </li>
                ))}
                {showServicesCount < developmentData?.length && (
                  <button
                    className="btn"
                    style={{
                      border: "none",
                      padding: "0",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                    onClick={handleSeeMore}
                  >
                    See more
                  </button>
                )}
                {showServicesCount > 3 && (
                  <button
                    className="btn"
                    style={{
                      border: "none",
                      padding: "0",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                    onClick={handleSeeLess}
                  >
                    See less
                  </button>
                )}
              </ul>
              <h4 className="heading">Quick Links </h4>
              <ul>
                <li className="nav-item">
                  <Link to={"/"} className="link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/about_us"}
                    className="nav-link font-13 text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/blog"} className="nav-link font-13 text-white">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/case_study"}
                    className="nav-link font-13 text-white"
                  >
                    Case Stuies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/contact_us"}
                    className="nav-link font-13 text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 mt-4 pt-3">
              <img
                src={imag_url + websiteSetting?.websetting[0]?.foot_logo}
                alt="navbar-logo"
                className="d-md-block d-none w-50"
              />
              <h4 className="heading mb-0 mt-md-5 ms-md-3">Keep in touch</h4>
              <div className="newsletter ms-md-3">
                <p className="font-13">Subscribe for exclusive updates</p>
                <div className="newsFrom">
                  <form style={{ display: "flex" }}>
                    <input
                      className="form-control h-100"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <button type="submit" className="formBtn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr className="whiteline" />
          <div className="mb-4 d-flex align-items-center flex-wrap">
            <div className=""></div>
            <div className="mt-3">
              <ul className="d-flex align-items-center gap-3 mb-0 flex-wrap">
                <li className="w-md-50">
                  <a
                    href="https://maps.app.goo.gl/TLBvRxwvXHSVFeMZ8"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-0 nav-link font-13"
                  >
                    Building No. 21, 3rd Floor, Block-CCA, DHA Phase 8 - Ex Park
                    View Phase-8 Lahore, 54000, Pakistan
                  </a>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className="link text-white d-flex font-13 align-items-center mb-1"
                  >
                    {" "}
                    <span className="phone_icon">
                      <FaPhone />{" "}
                    </span>
                    <span>{websiteSetting?.websetting[0]?.contact_number}</span>
                  </Link>
                  <Link
                    to={"#"}
                    className="link text-white font-13 d-flex align-items-center"
                  >
                    {" "}
                    <span className="envelop_icon">
                      <FaEnvelope />{" "}
                    </span>
                    <span>{websiteSetting?.websetting[0]?.contact_email}</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <ul className="list-unstyled d-flex align-items-center justify-content-center mb-0 gap-3  flex-wrap">
                {socialLinks?.map((socialLinks) => {
                  return (
                    <li className=" text-center">
                      <Link
                        to={socialLinks?.url}
                        className="link text-white flex-column w-100"
                      >
                        {" "}
                        <span className="icon-circle justify-content-center">
                          <img src={imag_url + socialLinks?.icon} />{" "}
                        </span>
                        <span className="mt-2 font-13">
                          {socialLinks?.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h6 style={{ fontSize: "14px" }} className="font-13">
                <span className="font-13">
                  {websiteSetting?.websetting[0]?.privacy}{" "}
                </span>{" "}
                <span className="font-13">
                  {" "}
                  &copy;{websiteSetting?.websetting[0]?.copyrights}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
