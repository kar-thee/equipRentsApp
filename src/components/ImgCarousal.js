import React from "react";

import { Carousel } from "react-responsive-carousel";

import ProductSectionArray from "../helpers/Categories";
const ImgCarousal = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop>
        {ProductSectionArray.map(({ title, img }) => (
          <div key={title}>
            <img alt={title} src={img} loading="lazy" />
            <p className="legend">{title}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ImgCarousal;
