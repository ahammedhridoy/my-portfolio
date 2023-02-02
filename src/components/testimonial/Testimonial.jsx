import React from "react";
import "./Testimonial.css";

import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import AVTR1 from "../../Assets/avatar1.jpg";
import AVTR2 from "../../Assets/avatar2.jpg";
import AVTR3 from "../../Assets/avatar3.jpg";
import AVTR4 from "../../Assets/avatar4.jpg";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Lorem",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Lorem",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Lorem",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Lorem",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials_container"
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
