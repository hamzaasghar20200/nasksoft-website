import React, { useEffect, useState } from "react";
import { useData } from "../Context/Context_Provider";
function Limitation() {
  const { imag_url, getProducts, product } = useData();
  useEffect(() => {
    getProducts();
  }, []);
  const TruncatedText = ({ text, maxLength }) => {
    const [isFullTextVisible, setIsFullTextVisible] = useState(false);

    const truncatedText = isFullTextVisible ? text : text?.slice(0, maxLength);

    return (
      <div>
        <p className="mb-0">{truncatedText}</p>
        {!isFullTextVisible && text?.length > maxLength && (
          <span
            className="read-more text-primary cursor-pointer"
            onClick={() => setIsFullTextVisible(true)}
          >
            Read More
          </span>
        )}
      </div>
    );
  };
  return (
    <div>
      <div className="about-sec1 pb-75" id="about-sec">
        <div className="container space">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="title-area mb-37">
                <span className="sub-title">
                  <span className="text text-uppercase">
                    {product[0]?.secone_sub_head}
                  </span>
                </span>
                <h1 className="sec-title fw-bold" style={{ fontSize: "50px" }}>
                  {`${product[0]?.secone_head_one} ${product[0]?.secone_head_two} ${product[0]?.secone_head_three}`}
                </h1>
                <p className="sec-text">
                  <TruncatedText
                    text={product[0]?.secone_desc}
                    maxLength={430}
                  />
                </p>
              </div>
              <div className="dot-list">
                <div className="textSection">
                  <div className="ro d-flex align-items-center gap-5 mt-4 text-center">
                    <div>
                      <img
                        src={imag_url + product[0]?.secone_iconone}
                        width={70}
                        alt={"icon"}
                      />
                      <p className="mt-2 text-capitalize">
                        {" "}
                        {product[0]?.secone_iconone_head}{" "}
                      </p>
                    </div>
                    <div>
                      <img
                        src={imag_url + product[0]?.secone_icontwo}
                        width={70}
                        alt={"icon"}
                      />
                      <p className="mt-2 text-capitalize">
                        {" "}
                        {product[0]?.secone_icontwo_head}{" "}
                      </p>
                    </div>
                    <div>
                      <img
                        src={imag_url + product[0]?.secone_iconthree}
                        width={70}
                        alt={"icon"}
                      />
                      <p className="mt-2 text-capitalize">
                        {" "}
                        {product[0]?.secone_iconthree_head}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="img-box1">
                <div className="img1">
                  <img src="/images/1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="/images/2.jpg" alt="Image" />
                </div>
                <div className="shape1 jump-reverse">
                  <img
                    src="https://html.onertheme.com/tronix/assets/img/normal/about_1_3.png"
                    alt="Image"
                  />
                </div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Limitation;
