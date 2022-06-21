import React from "react";
import "./testimonials.style.css";
import AVTR1 from "../../assets/img/avatar1.jpg";
import AVTR2 from "../../assets/img/avatar2.jpg";
import AVTR3 from "../../assets/img/avatar3.jpg";
import AVTR4 from "../../assets/img/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut namvoluptate voluptatem culpa consequuntur dolorem accusamus obcaecati possimus magnam ullam, iure dolores minima deserunt consectetur?",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut namvoluptate voluptatem culpa consequuntur dolorem accusamus obcaecati possimus magnam ullam, iure dolores minima deserunt consectetur?",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut namvoluptate voluptatem culpa consequuntur dolorem accusamus obcaecati possimus magnam ullam, iure dolores minima deserunt consectetur?",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut namvoluptate voluptatem culpa consequuntur dolorem accusamus obcaecati possimus magnam ullam, iure dolores minima deserunt consectetur?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client-avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
