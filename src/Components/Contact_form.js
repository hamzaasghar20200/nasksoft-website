import React, { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import AiTwotoneMail from "../Images/ic_sharp-email (1).png";
import { MdLocationOn } from "react-icons/md";
import { useData } from "../Context/Context_Provider";
const Contact_form = ({ rowReverse = false }) => {
  const {
    contactDetail,
    getContactDetails,
    sendFromData,
    formData,
    developmentData,
    getDevelopmentData,
    design,
    getDesignData,
  } = useData();
  useEffect(() => {
    getContactDetails();
    getDevelopmentData();
    getDesignData();
  }, []);
  let check = false;
  const [formInputData, setFormInputData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    service_id: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    sendFromData(formInputData);

    // Clear the form inputs
    setFormInputData({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      service_id: "", // Reset the service_id to an empty string to uncheck radio buttons
      message: "",
    });
  };

  return (
    <>
      <div className="contact_form py-5">
        <div className="contact_container mt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 style={{ color: "#00293E" }}>Contact Us</h1>
              <p>Any question or remarks? Just write us message!</p>
            </div>
          </div>
          <div className="card p-2">
            <div className={rowReverse ? "flex-row-reverse row" : `row`}>
              <div className="col-md-4">
                <div className="contact_info">
                  <h2 style={{ color: "white" }}>Contact Information</h2>
                  <p style={{ color: "white", fontWeight: "normal" }}>
                    {contactDetail[0]?.sub_heading}
                  </p>
                  <div className="phone">
                    <div className="icons">
                      {" "}
                      <BiSolidPhoneCall />
                    </div>
                    <div> {contactDetail[0]?.phone_number}</div>
                  </div>
                  <br />
                  <div className="mail">
                    <div className="icons">
                      <img src={AiTwotoneMail} />
                    </div>
                    <div> {contactDetail[0]?.email}</div>
                  </div>

                  <br />
                  <div className="address">
                    <div className="icons">
                      <MdLocationOn />
                    </div>
                    <div>{contactDetail[0]?.address}</div>
                  </div>
                  <br />
                  <div
                    style={{ height: "200px", width: "100%" }}
                    className="contactFrame"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: contactDetail[0]?.map,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <form
                  onSubmit={handleSubmit}
                  className={
                    rowReverse ? "px-4 text-start" : "contact_container_form"
                  }
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mt-5">
                        <label for="">First Name</label>
                        <input
                          onChange={(e) =>
                            setFormInputData({
                              ...formInputData,
                              first_name: e.target.value,
                            })
                          }
                          required
                          className="form-control"
                          value={formInputData.first_name}
                          type="text"
                          placeholder={"I"}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mt-5">
                        <label for="">Last Name</label>
                        <input
                          value={formInputData.last_name}
                          onChange={(e) =>
                            setFormInputData({
                              ...formInputData,
                              last_name: e.target.value,
                            })
                          }
                          required
                          className="form-control"
                          type="text"
                          placeholder={"Doe"}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mt-5">
                        <label for="">Email</label>
                        <input
                          value={formInputData.email}
                          onChange={(e) =>
                            setFormInputData({
                              ...formInputData,
                              email: e.target.value,
                            })
                          }
                          required
                          className="form-control"
                          type="email"
                          placeholder={"abc@gmail.com"}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mt-5">
                        <label for="">Phone Number</label>
                        <input
                          value={formInputData.phone_number}
                          onChange={(e) =>
                            setFormInputData({
                              ...formInputData,
                              phone_number: e.target.value,
                            })
                          }
                          required
                          className="form-control"
                          type="text"
                          placeholder={"123456789"}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <h5 className="subject">Select Subject?</h5>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            onChange={(e) =>
                              setFormInputData({
                                ...formInputData,
                                service_id: e.target.value,
                              })
                            }
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value={
                              `${design[0]?.id}` + formInputData.service_id
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Digital Design
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            onChange={(e) =>
                              setFormInputData({
                                ...formInputData,
                                service_id: e.target.value,
                              })
                            }
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value={
                              `${design[0]?.id}` + formInputData.service_id
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            Digital Marketing
                          </label>
                        </div>
                        {developmentData?.map((item) => {
                          return (
                            <div className="form-check form-check-inline">
                              <input
                                onChange={(e) =>
                                  setFormInputData({
                                    ...formInputData,
                                    service_id: e.target.value,
                                  })
                                }
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={item.id + formInputData.service_id}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                {item.secone_head_one}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* <div className='row mt-2'>
                                        <div className='col-md-12'>
                                            <div className='form-group mt-3'>
                                                <label for="">Others</label>
                                                <input required className='form-control w-100' type='text' placeholder='Type your Answer..' ></input>
                                            </div>
                                        </div>
                                    </div> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mt-5">
                        <label for="">Message</label>
                        <input
                          value={formInputData.message}
                          onChange={(e) =>
                            setFormInputData({
                              ...formInputData,
                              message: e.target.value,
                            })
                          }
                          required
                          className="form-control w-100"
                          type="text"
                          placeholder="Type your Message.."
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <div className="form-button">
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_form;
