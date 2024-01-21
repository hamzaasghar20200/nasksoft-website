import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import digital from "../Images/ui-ux-design.jpg";
import banner from "../Images/Frame 42.png";
import arrow from "../Images/arrow.jpeg";
import { useData } from "../Context/Context_Provider";
function Degital_Marketing() {
  const {
    imag_url,
    faqData,
    getFaqData,
    digitalMarketingData,
    getDigitalMarketing,
  } = useData();
  console.log(digitalMarketingData);
  useEffect(() => {
    getFaqData();
    getDigitalMarketing();
  }, []);
  const boxes = document.querySelectorAll(".box");

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("showDiv");
      } else {
        box.classList.remove("showDiv");
      }
    });
  }
  return (
    <>
      <div className="marketing p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-3 box">
              <img
                src={imag_url + digitalMarketingData[0]?.secone_imagetwo}
                height={"80px"}
                width={"80px"}
              />
              <h1>{digitalMarketingData[0]?.secone_headingone}</h1>
              <p
                style={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{
                  __html: digitalMarketingData[0]?.secone_desc,
                }}
              ></p>
              <h4>Key activities</h4>
              <ul>
                <li>{digitalMarketingData[0]?.sectwo_cardone_head}</li>
                <li>{digitalMarketingData[0]?.sectwo_cardtwo_head}</li>
                <li>{digitalMarketingData[0]?.sectwo_cardthree_head}</li>
                <li>{digitalMarketingData[0]?.sectwo_cardfour_head}</li>
                <li>
                  <Link to={"/digital_marketing"} className="link">
                    <span>
                      <img src={arrow} />
                    </span>{" "}
                    Our Approch
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 box">
              <img
                src={imag_url + digitalMarketingData[0]?.secone_imagethree}
                className="img-fluid h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Degital_Marketing;
