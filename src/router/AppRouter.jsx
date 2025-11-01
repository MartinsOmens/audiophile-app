import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Headphones from "../pages/Headphones";
import Earphones from "../pages/Earphones";
import Speakers from "../pages/Speakers";
import HeadphoneItem1 from "../components/product/headphone/HeadphoneItem1";
import HeadphoneItem2 from "../components/product/headphone/HeadphoneItem2";
import HeadphoneItem3 from "../components/product/headphone/HeadphoneItem3";
import SpeakerItem1 from "../components/product/speakers/SpeakerItem1";
import SpeakerItem2 from "../components/product/speakers/SpeakerItem2";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/earphones" element={<Earphones />} />

      {/* Product detail routes */}
      <Route path="/product/headphone-item-1" element={<HeadphoneItem1 />} />
      <Route path="/product/hea3dphone-item-2" element={<HeadphoneItem2 />} />
      <Route path="/product/headphone-item-3" element={<HeadphoneItem3 />} />

      <Route path="/product/speaker-item-1" element={<SpeakerItem1 />} />
      <Route path="/product/speaker-item-2" element={<SpeakerItem2 />} />
    </Routes>
  );
};

export default AppRouter;
