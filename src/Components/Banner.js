import React, { useEffect } from "react";
import { useData } from "../Context/Context_Provider";
import { Carousel } from "react-bootstrap";

function Banner() {
  const { imag_url, getHomeBanner, homeBanner } = useData();
  useEffect(() => {
    getHomeBanner();
  }, []);
  return (
    <>
      <Carousel>
        {homeBanner?.sectionone?.map((slides) => (
          <Carousel.Item
            className="slider-image"
            key={slides}
            style={{
              backgroundImage: `url(${imag_url + slides?.image_top})`,
              height: "100vh",
            }}
          >
            <Carousel.Caption className="caption-slide">
              <h5 className="mb-1">Our Services</h5>
              <h1 className="banner-title">{slides?.heading}</h1>
              <p
                style={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{
                  __html: slides?.description,
                }}
              ></p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Banner;
