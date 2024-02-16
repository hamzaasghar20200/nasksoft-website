import React, { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useData } from "../Context/Context_Provider";
import { MegaMenu } from "./MegaMenu";
const base_url = "https://nasksoft.com/nasksoft/public/api/";

function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const {
    imag_url,
    websiteSetting,
    getWebSettings,
    developmentData,
    getDevelopmentData,
    getIndividualService,
  } = useData();
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
  useEffect(() => {
    getWebSettings();
    getDevelopmentData();
  }, []);
  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
  const navigate = useNavigate();
  const getSeviceName = (id, name) => {
    navigate(`/services/${name}/${id}`);
    getDevelopmentData(id);
    getIndividualService(id);
  };

  return (
    <>
      <div className="header stcikyHeader shadow">
        <div className="container">
          <div className="mainNav">
            <div className="logo">
              <Link to={"/"}>
                <img
                  src={imag_url + websiteSetting?.websetting[0]?.head_logo}
                  width="220px"
                  alt="navbar-logo"
                />
              </Link>
            </div>
            <div className="nav_links">
              <ul className="">
                <li className="mega-menu-category">
                  <span>
                    Services <GoChevronDown />
                  </span>
                  <div class="category-dropdown">
                    <MegaMenu categories={getServices} />
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/case_study"}>
                    Case Studies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about_us"}>
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact_us"}>
                    Let's work together
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header header2 stcikyHeader">
        <div className="container">
          {!isSideNavOpen && (
            <div className="mainNav">
              <div className="logo">
                <Link to={"/"}>
                  <img
                    src={imag_url + websiteSetting?.websetting[0]?.head_logo}
                  />
                </Link>
              </div>
              <div className="nav_links">
                <BiMenu
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className="sideNavbar"
        style={{ left: isSideNavOpen ? "0" : "-400px" }}
      >
        {isSideNavOpen && (
          <div className="header">
            <div className="logo">
              <Link to={"/"}>
                <img
                  src={imag_url + websiteSetting?.websetting[0]?.head_logo}
                  width={"100%"}
                />
              </Link>
            </div>
            <div>
              <RxCross2
                style={{ cursor: "pointer" }}
                onClick={() => setIsSideNavOpen(false)}
              />
            </div>
          </div>
        )}
        <div className="body">
          <ul className="p-2">
            <li style={{ marginBottom: "10px" }}>
              <span
                style={{ marginBottom: "10px", fontSize: "18px" }}
                onClick={toggleServicesDropdown}
              >
                Services <GoChevronDown />
              </span>
              {isServicesDropdownOpen && (
                <div className="serviceDropdown">
                  <div className="serviceDropdownContent">
                    <ul>
                      <li style={{ marginBottom: "10px", fontSize: "18px" }}>
                        <Link
                          style={{ textDecoration: "none", color: "#fff" }}
                          to={"/design"}
                          className="link"
                        >
                          Design
                        </Link>
                      </li>
                      <li style={{ marginBottom: "10px", fontSize: "18px" }}>
                        <Link
                          style={{ textDecoration: "none", color: "#fff" }}
                          to={"/digital_marketing"}
                          className="link"
                        >
                          Digital Marketing
                        </Link>
                      </li>
                      {developmentData?.map((service) => {
                        return (
                          <li
                            style={{
                              marginBottom: "10px",
                              fontSize: "18px",
                              color: "white",
                              textDecoration: "none",
                            }}
                            onClick={() =>
                              getSeviceName(service.id, service.secone_head_one)
                            }
                          >
                            <Link className="link" style={{ color: "white" }}>
                              {service?.secone_head_one}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li style={{ marginBottom: "10px", fontSize: "18px" }}>
              <Link
                className="link"
                style={{ color: "white", textDecoration: "none" }}
                to={"/case_study"}
              >
                Case Studies
              </Link>
            </li>
            <li style={{ marginBottom: "10px", fontSize: "18px" }}>
              <Link
                className="link"
                style={{ color: "white", textDecoration: "none" }}
                to={"/blog"}
              >
                Blog
              </Link>
            </li>
            <li style={{ marginBottom: "10px", fontSize: "18px" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/about_us"}
              >
                About us
              </Link>
            </li>
            <li style={{ marginBottom: "10px", fontSize: "18px" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={"/contact_us"}
              >
                Let's work together
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
