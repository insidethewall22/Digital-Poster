import React, { FC } from "react";
import BannerImage from "../../assets/banner.jpg";
import "./index.css";

const FirstSection: FC = () => {
  return (
    <div className="firstSection">
      <img src={BannerImage} alt="Banner" />
    </div>
  );
};

export default FirstSection;
