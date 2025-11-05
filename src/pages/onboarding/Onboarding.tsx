import RadioGroupField, {
  RadioField,
} from "src/components/common/radio-group/RadioGroupField";
import styles from "./style.module.scss";
import SwiperComponent from "src/components/common/swiper/SwiperComponent";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Onboarding() {
  const [showNextSection, setShowNextSection] = useState(false);
  const [activeSlide, setActiveSlide] = useState("languageSelection");
  const languageSelectionRadio: RadioField[] = [
    {
      value: "italian",
      label: (
        <span>
          <img src="/assets/flags/italy.png" alt="" />
          <span>Continua in Italiano</span>
        </span>
      ),
    },
    {
      value: "english",
      label: (
        <span>
          <img src="/assets/flags/england.png" alt="" />
          <span>Continue in English</span>
        </span>
      ),
    },
  ];
  const onboardingSlides = [
    {
      id: "slide01",
      smallTitle: "Join the",
      bigTitle: "Exclusive Club for selective investors",
    },
    {
      id: "slide02",
      smallTitle: "Make the",
      bigTitle: "Needed impact in fast growing Asian markets",
    },
    {
      id: "slide01",
      smallTitle: "Chat with",
      bigTitle: "Other investors to enter or exit any investment",
    },
  ];
  return (
    <div className={`${styles.onboardingWrap}`}>
      {activeSlide === "languageSelection" ? (
        <section>
          <div className="bs-section">
            <div className="sec-cont">
              <div className={`${styles.logoWrap}`}>
                <img src="assets/company-logo.png" alt="asia impact" />
              </div>
              <div className={`${styles.languageSelection}`}>
                <h2>Choose Language to proceed</h2>
                <div className="card-radio-group typ-flat">
                  <RadioGroupField
                    name="language-selection"
                    radioField={languageSelectionRadio}
                    defaultValue={languageSelectionRadio[0].value}
                  ></RadioGroupField>
                </div>
              </div>
              <div className={`${styles.footWrap}`}>
                <button
                  type="button"
                  onClick={() => setActiveSlide("onboardingStep")}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : activeSlide === "loginSection" ? (
        <section>
          <div className="bs-section">
            <div className="sec-cont">
              <div className={`${styles.logoWrap} ${styles.typHead}`}>
                <img src="assets/company-logo.png" alt="asia impact" />
              </div>
              <div className={`${styles.featureWrap}`}>
                <h2>Facilitating Growth, not Soliciting</h2>
                <ul>
                  <li>
                    <i className={`${styles.searchIcon}`}></i>
                    <p>
                      Discover and invest in eco-friendly companies for a
                      sustainable future.
                    </p>
                  </li>
                  <li>
                    <i className={`${styles.keyIcon}`}></i>
                    <p>
                      Access tools and resources for making informed decisions.
                    </p>
                  </li>
                  <li>
                    <i className={`${styles.percentageIcon}`}></i>
                    <p>
                      Our platform offers diverse eco-friendly investment
                      opportunities.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={`${styles.footWrap}`}>
                <NavLink to={"/login"}>
                  Login / Sign Up
                  <i className={`${styles.iconNext}`}></i>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      ) : activeSlide === "onboardingStep" ? (
        <section>
          <div className="bs-section typ-onboarding-steps">
            <div className="sec-cont">
              <SwiperComponent
                swiperConfig={{
                  slidesPerView: 1,
                  loop: false,
                  modules: [Autoplay, EffectFade, Pagination, Navigation],
                  spaceBetween: 0,
                  effect: "fade",
                  autoplay: {
                    delay: 4800,
                  },
                  fadeEffect: {
                    crossFade: true,
                  },
                  pagination: {
                    clickable: false,
                  },
                  navigation: {
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                  },
                  on: {
                    paginationUpdate: (swiper, paginationEl) => {
                      paginationEl
                        .querySelectorAll(".swiper-pagination-bullet")
                        [swiper.previousIndex]?.classList.add("visited");
                    },
                    slideChangeTransitionEnd(swiper) {
                      const nextSlide = swiper.slides[swiper.activeIndex + 1];
                      if (
                        nextSlide &&
                        !nextSlide.classList.contains("visited")
                      ) {
                        swiper.autoplay.start();
                      }
                    },
                    slideChange: (swiper) => {
                      const paginationBullets = swiper.pagination.bullets;
                      paginationBullets.forEach((bullet, index) => {
                        if (index === swiper.activeIndex) {
                          bullet.classList.remove("visited");
                        } else if (index > swiper.activeIndex) {
                          bullet.classList.remove("visited");
                        }
                      });
                      if (swiper.activeIndex === onboardingSlides.length - 1) {
                        setTimeout(() => {
                          setShowNextSection(true);
                        }, 1000);
                      } else {
                        setShowNextSection(false);
                      }
                    },
                    reachEnd: (swiper) => {
                      swiper.autoplay.stop();
                    },
                  },
                }}
              >
                {onboardingSlides.map((item, index) => {
                  return (
                    <div key={index} className={`${styles.stepsWrap}`}>
                      <h2>
                        <span>{item.smallTitle}</span>
                        {item.bigTitle}
                      </h2>
                    </div>
                  );
                })}
              </SwiperComponent>
              <div className={`${styles.footWrap}`}>
                {!showNextSection ? (
                  <button
                    className={`next-btn ${styles.nextSlide}`}
                    type="button"
                  >
                    Next
                    <i className={`${styles.iconNext}`}></i>
                  </button>
                ) : (
                  <button
                    className={`${styles.nextSlide}`}
                    type="button"
                    onClick={() => setActiveSlide("loginSection")}
                    disabled={false}
                  >
                    Next
                    <i className={`${styles.iconNext}`}></i>
                  </button>
                )}
                <button
                  className={`prev-btn ${styles.prevSlide}`}
                  type="button"
                ></button>
              </div>
              <button
                className={`${styles.skipBtn}`}
                onClick={() => setActiveSlide("loginSection")}
              >
                Skip
              </button>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default Onboarding;
