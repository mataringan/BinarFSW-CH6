import "../styles/App.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

export default function SectionTesti() {
  return (
    // <div className="testimonial py-5" id="testimonial">
    //   <div className="text-center pt-3">
    //     <h3>Testimonial</h3>
    //     <p>Berbagai review positif dari para pelanggan kami</p>
    //   </div>
    //   <div id="owl" class="owl-carousel owl-theme">
    //     <div class="container d-flex align-items-center justify-content-center main__carou">
    //       <div class="w-25 d-flex justify-content-center">
    //         <div class="box-image">
    //           <img src="../assets/testi/photo1.png" alt="photo1" />
    //         </div>
    //       </div>
    //       <div class="box-text w-75">
    //         <div class="content__carou">
    //           <div class="content__carou__text">
    //             <div class="star__carou">
    //               <img src="../assets/Rate.png" alt="rate" />
    //             </div>
    //             <p>
    //               “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
    //               elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
    //               adipiscing elit, sed do eiusmod”
    //             </p>
    //             <h5>John Dee 32, Bromo</h5>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="container d-flex align-items-center justify-content-center main__carou">
    //       <div class="w-25 d-flex justify-content-center">
    //         <div class="box-image">
    //           <img src="../assets/testi/photo2.png" alt="photo2" />
    //         </div>
    //       </div>
    //       <div class="box-text w-75">
    //         <div class="content__carou">
    //           <div class="content__carou__text">
    //             <div class="star__carou">
    //               <img src="../assets/Rate.png" alt="rate" />
    //             </div>
    //             <p>
    //               “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
    //               elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
    //               adipiscing elit, sed do eiusmod”
    //             </p>
    //             <h5>John Dee 32, Bromo</h5>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="container d-flex align-items-center justify-content-center main__carou">
    //       <div class="w-25 d-flex justify-content-center">
    //         <div class="box-image">
    //           <img src="../assets/testi/photo1.png" alt="photo1" />
    //         </div>
    //       </div>
    //       <div class="box-text w-75">
    //         <div class="content__carou">
    //           <div class="content__carou__text">
    //             <div class="star__carou">
    //               <img src="../assets/Rate.png" alt="rate" />
    //             </div>
    //             <p>
    //               “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
    //               elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
    //               adipiscing elit, sed do eiusmod”
    //             </p>
    //             <h5>John Dee 32, Bromo</h5>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
