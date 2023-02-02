import React, { useRef } from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import AVTR from "../../Assets/avatar.png";
import { Autoplay, Pagination } from "swiper";

const data = [
  {
    id: 1,
    avatar: AVTR,
    name: "sudipta71",
    review:
      "This has to be one of the best sellers on Fiverr. The work is excellent, and he helps to solve problems quickly. Our website is very beautiful right now. Ashik very responsible and hardworking person. All-time I love people who are hard workers. You will not be disappointed working with him. Great communication,Highly recommend him for web design service.Sure We will work with you on our next project.",
  },
  {
    id: 2,
    avatar: AVTR,
    name: "upstart325_",
    review:
      "Very very great guy! Very knowledgable and smart with creating WordPress Sites. If you are a small, medium, large business or just a person in need of a Site created then look no further! He is the real MVP here on Fiverr. I could the more impressed!",
  },
  {
    id: 3,
    avatar: AVTR,
    name: "devlopersabbir",
    review:
      "Hridoy is very dedicated hardworking seller, he know how to satisfied buyer, great work.",
  },
  {
    id: 4,
    avatar: AVTR,
    name: "teamdc0999",
    review:
      "Seller is very cool and keeps delivering the best works. We recommend him",
  },
];

const Testimonial = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
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
