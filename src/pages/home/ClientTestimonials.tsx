import React from "react";
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Masood Ahmed",
    stars: 4.5,
    message:
      "Mr. Masood was very helpful and took the time to explain the steps and help in any way possible",
    time: "a year ago",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    name: "Mash Rehman",
    stars: 5,
    message:
      "Amazing experience, they take care of you and ensure that everything goes well with you. They support in things that might not even be related to their job. They provide full guidance and full support. Shout out to Mash 🤲",
    time: "a year ago",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    name: "Adeel Khan",
    stars: 5,
    message:
      "Great service provided to rent our house. Mr Masood was wonderful and very quick with the whole process. We are grateful!",
    time: "a year ago",
    avatar: "/avatars/avatar3.jpg",
  },
  {
    name: "Ali Masoud",
    stars: 5,
    message:
      "Shout out to my property manager Mr. Masoud for his smooth communication and day-to-day updates. I got my apartment rented in no time!",
    time: "a year ago",
    avatar: "/avatars/avatar4.jpg",
  },
  {
    name: "Akif Hussain",
    stars: 5,
    message:
      "I want to express my gratitude for Emaar Beachfront specialist Akif... Excellent experience.",
    time: "2 years ago",
    avatar: "/avatars/avatar5.jpg",
  },
  {
    name: "Sana Sheikh",
    stars: 5,
    message:
      "Binayah Properties LLC has rented out and is managing my unit in Dubai. Mr. Masood’s efforts were excellent. Thank you very much 🙂",
    time: "2 years ago",
    avatar: "/avatars/avatar6.jpg",
  },
];

const ClientTestimonials = () => {
  return (
    <div className="w-full py-16 px-4 text-white relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[35px] leading-[42px] font-normal text-center capitalize text-[#0F4C5C] mb-2 font-[Font4]">
  What People Say
</h2>

        <p className="text-[14.75px] leading-[25px] font-medium text-center text-[#5F0F40] mb-8 font-[Font1]">
  Real Estate Client Testimonials
</p>


        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
          className="pb-20"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="text-black rounded-xl shadow-md flex flex-col justify-between mx-auto overflow-hidden"
                style={{
                  width: "271.66px",
                  height: "224px",
                  lineHeight: "15px",
                  padding: "15px",
                  backgroundColor: "#fff",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 border-2 border-white"
                  >
                    {review.name.charAt(0)}
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-base">{review.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-yellow-500 text-xl">
                        {Array.from({ length: Math.floor(review.stars) }).map((_, i) => (
                          <StarIcon key={i} className="inline-block text-yellow-500" fontSize="small" />
                        ))}
                      </span>
                      <span className="text-sm text-gray-500">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mt-4 overflow-auto pr-1 max-h-[120px]">
                  {review.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper pagination dots */}
        <div className="custom-swiper-pagination flex justify-center mt-2"></div>

        
      </div>
    </div>
  );
};

export default ClientTestimonials;
