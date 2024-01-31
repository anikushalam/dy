import style from "./InsHome.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LandingWrapper from "../LandingWrapper/LandingWrapper";
import AboutIns from "./AboutIns";
import ImportantLinks from "./ImportantLinks";
import VideoGalery from "./VideoGalery";
import Accreditations from "./Accreditations";
import Testimonials from "./Testimonials";
import OurIns from "./OurIns";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function InsHome() {
  const slideImages = [
    {
      id: 1,
      url: "/images/pexel-1.jpg",
    },

    {
      id: 2,
      url: "/images/pexel-2.jpg",
    },
    {
      id: 3,
      url: "/images/pexel-3.jpg",
    },
  ];

  return (
    <>
      <LandingWrapper>
        <div className={style.slide}>
          <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            slidesToSlide={1}
            keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {slideImages?.map((item) => (
              <img
                className={style.slideImg}
                key={item?.id}
                src={item.url}
                alt=""
              />
            ))}
          </Carousel>
        </div>
        <AboutIns />
        <ImportantLinks />
        <VideoGalery />
        <Accreditations />
        <Testimonials />
        <OurIns />
      </LandingWrapper>
    </>
  );
}

export default InsHome;
