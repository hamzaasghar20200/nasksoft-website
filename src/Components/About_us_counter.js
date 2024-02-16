import React, { useEffect } from "react";
import { useData } from "../Context/Context_Provider";
import CountUp from "react-countup";

function About_us_counter() {
  const { about, getAbout } = useData();
  useEffect(() => {
    getAbout();
  }, []);
  return (
    <>
      <div className="rs-counter style2 modify2 pb-90 pt-100 bg-primary">
        <div className="container">
          <div className="counter-top-area">
            <div className="row">
              <div className="col-lg-3 col-md-6 md-mb-30">
                <div className="counter-list">
                  <div className="counter-text">
                    <div className="count-number">
                      <CountUp
                        isCounting
                        className="rs-count"
                        end={about[0]?.secthree_count_one}
                        duration={3}
                      />
                      <span
                        className="prefix"
                        dangerouslySetInnerHTML={{
                          __html: about[0]?.secthree_countone_digit,
                        }}
                      ></span>
                    </div>
                    <h3 className="title">{about[0]?.secthree_head_one}</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 md-mb-30">
                <div className="counter-list">
                  <div className="counter-text">
                    <div className="count-number">
                      <CountUp
                        isCounting
                        className="rs-count"
                        end={about[0]?.secthree_count_two}
                        duration={3}
                      />
                      <span
                        className="prefix"
                        dangerouslySetInnerHTML={{
                          __html: about[0]?.secthree_counttwo_digit,
                        }}
                      ></span>
                    </div>
                    <h3 className="title">{about[0]?.secthree_head_two}</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 sm-mb-30">
                <div className="counter-list">
                  <div className="counter-text">
                    <div className="count-number">
                      <CountUp
                        isCounting
                        className="rs-count"
                        end={about[0]?.secthree_count_three}
                        duration={3}
                      />
                      <span
                        className="prefix"
                        dangerouslySetInnerHTML={{
                          __html: about[0]?.secthree_countthree_digit,
                        }}
                      ></span>
                    </div>
                    <h3 className="title">{about[0]?.secthree_head_three}</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="counter-list">
                  <div className="counter-text">
                    <div className="count-number">
                      <CountUp
                        isCounting
                        className="rs-count"
                        end={about[0]?.secthree_count_four}
                        duration={3}
                      />
                      <span className="prefix">
                        {about[0]?.secthree_countfour_digit}
                      </span>
                    </div>
                    <h3 className="title">{about[0]?.secthree_head_four}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_us_counter;
