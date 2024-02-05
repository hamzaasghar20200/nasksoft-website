import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import "./App.css";
import Development_page from "./Pages/Development_page";
import Contact_us from "./Pages/Contact_us";
import Digital_marketing from "./Pages/Digital_marketing";
import About_us from "./Pages/About_us";
import Slider from "./Components/Slider";
import Blog from "./Pages/Blog";
import Blog_details from "./Pages/Blog_details";
import Case_study from "./Pages/Case_study";
import Case_detail from "./Pages/Case_detail";
import Demopage from "./Pages/Demopage";
import { ServiceDetail } from "./Components/serviceDetail";
import { InnerServiceDetail } from "./Components/serviceInnerDetail";
import { useData } from "./Context/Context_Provider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  const { getHomeBanner, homeBanner } = useData();
  useEffect(() => {
    getHomeBanner();
  }, []);
  return (
    <div className="App">
      {Object.keys(homeBanner)?.length === 0 ? (
        <>
          <div className="row mx-2">
            <div className="col-12 mt-3">
              <Skeleton height="500px" />
            </div>
            <div className="col-6 mt-3">
              <Skeleton height="100px" />
            </div>
            <div className="col-6 mt-3">
              <Skeleton height="100px" />
            </div>
          </div>
          <div className="row mt-3 mx-2">
            <div className="col-6">
              <Skeleton height="100px" />
            </div>
            <div className="col-6">
              <Skeleton height="100px" />
            </div>
          </div>
        </>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<Services />} />
            <Route path="/services/:id/:id" element={<Development_page />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/child-service/:id" element={<InnerServiceDetail />} />
            <Route path="/contact_us" element={<Contact_us />} />
            <Route path="/digital_marketing" element={<Digital_marketing />} />
            <Route path="/about_us" element={<About_us />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:name/:id" element={<Blog_details />} />
            <Route path="/case_study" element={<Case_study />} />
            <Route path="/case_study_detail/:id" element={<Case_detail />} />
            <Route path="/demo" element={<Demopage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
