import React, { FC } from "react";
import Cartoon from "../../assets/cartoon.jpg";
import Food from "../../assets/food.jpg";
import Movie from "../../assets/movie.png";
import Life from "../../assets/life.jpg";
import "./index.css";
interface ContentType {
  name: string;
  image: string;
}
const content: ContentType[] = [
  {
    name: "动画",
    image: Cartoon,
  },
  {
    name: "美食",
    image: Food,
  },
  { name: "电影", image: Movie },
  {
    name: "生活",
    image: Life,
  },
];
const SecondSection: FC = () => {
  return (
    <div className="navigation">
      <ul>
        <li>动画</li>
        <li>美食</li>
        <li>电影</li>
        <li>生活</li>
      </ul>
      <div className="content">
        {content.map((item) => {
          return (
            <section>
              <h2>{item.name}</h2>
              <img src={item.image} />
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default SecondSection;
