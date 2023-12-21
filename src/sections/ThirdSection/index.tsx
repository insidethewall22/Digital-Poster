import React, { FC } from "react";
import "./index.css";
import Title1Image from "../../assets/title1.jpg";
import Title2Image from "../../assets/title2.jpg";
import CommentImage from "../../assets/comment.jpg";

const ThirdSection: FC = () => {
  return (
    <div className="thirdSection">
      <img src={Title1Image} />
      <img className="comment" src={CommentImage} />
      <img src={Title2Image} />
      <img className="comment" src={CommentImage} />
    </div>
  );
};

export default ThirdSection;
