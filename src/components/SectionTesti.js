import "../styles/App.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function SectionTesti() {
  return (
    <>
      <div className="testimonial py-5" id="testimonial">
        <div className="text-center pt-3">
          <h3 className="fw-bold">Testimonial</h3>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
      </div>
      <div className="image__testi">
        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            990: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="container d-flex align-items-center justify-content-center main__carou">
              <div className="w-25 d-flex justify-content-center">
                <div className="box-image">
                  <img
                    src="https://i.postimg.cc/XJkLPtFr/photo1.png"
                    alt="photo1"
                  />
                </div>
              </div>

              <div className="box-text w-75">
                <div className="content__carou">
                  <div className="content__carou__text">
                    <div className="star__carou">
                      <img
                        src="https://i.postimg.cc/tCZPZLTF/Rate.png"
                        alt="rate"
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h5>John Dee 32, Bromo</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container d-flex align-items-center justify-content-center main__carou">
              <div className="w-25 d-flex justify-content-center">
                <div className="box-image">
                  <img
                    src="https://i.postimg.cc/52zwGZWf/photo2.png"
                    alt="photo2"
                  />
                </div>
              </div>
              <div className="box-text w-75">
                <div className="content__carou">
                  <div className="content__carou__text">
                    <div className="star__carou">
                      <img
                        src="https://i.postimg.cc/tCZPZLTF/Rate.png"
                        alt="rate"
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h5>John Dee 32, Bromo</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container d-flex align-items-center justify-content-center main__carou">
              <div className="w-25 d-flex justify-content-center">
                <div className="box-image">
                  <img
                    src="https://i.postimg.cc/XJkLPtFr/photo1.png"
                    alt="photo1"
                  />
                </div>
              </div>
              <div className="box-text w-75">
                <div className="content__carou">
                  <div className="content__carou__text">
                    <div className="star__carou">
                      <img
                        src="https://i.postimg.cc/tCZPZLTF/Rate.png"
                        alt="rate"
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h5>John Dee 32, Bromo</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
        <OwlCarousel
          className="owl-theme"
          margin={32}
          stagePadding={16}
          loop
          dots={false}
          center
          autoPlay
          autoplayHoverPause
          nav
          navText={[
            "<img src='./images/Left_button.svg' class=carousel-item--btn>",
            "<img src='./images/Right_button.svg' class=carousel-item--btn>",
          ]}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 2,
            },
          }}
        >
          <div className="container d-flex align-items-center justify-content-center main__carou">
            <div className="w-25 d-flex justify-content-center">
              <div className="box-image">
                <img
                  src="https://i.postimg.cc/XJkLPtFr/photo1.png"
                  alt="photo1"
                />
              </div>
            </div>
            <div className="box-text w-75">
              <div className="content__carou">
                <div className="content__carou__text">
                  <div className="star__carou">
                    <img
                      src="https://i.postimg.cc/tCZPZLTF/Rate.png"
                      alt="rate"
                    />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <h5>John Dee 32, Bromo</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex align-items-center justify-content-center main__carou">
            <div className="w-25 d-flex justify-content-center">
              <div className="box-image">
                <img
                  src="https://i.postimg.cc/XJkLPtFr/photo1.png"
                  alt="photo1"
                />
              </div>
            </div>
            <div className="box-text w-75">
              <div className="content__carou">
                <div className="content__carou__text">
                  <div className="star__carou">
                    <img
                      src="https://i.postimg.cc/tCZPZLTF/Rate.png"
                      alt="rate"
                    />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <h5>John Dee 32, Bromo</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex align-items-center justify-content-center main__carou">
            <div className="w-25 d-flex justify-content-center">
              <div className="box-image">
                <img
                  src="https://i.postimg.cc/XJkLPtFr/photo1.png"
                  alt="photo1"
                />
              </div>
            </div>
            <div className="box-text w-75">
              <div className="content__carou">
                <div className="content__carou__text">
                  <div className="star__carou">
                    <img
                      src="https://i.postimg.cc/tCZPZLTF/Rate.png"
                      alt="rate"
                    />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <h5>John Dee 32, Bromo</h5>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}
