import Carousel from "react-multi-carousel";
import style from "./InsHome.module.css";
import "./carousal.css";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 2,
  },
};

function Accreditations() {
  const accreditations = [
    "https://dpu.edu.in/images/approval/association-of-india.png",
    "https://dpu.edu.in/images/approval/naac.png",
    "https://dpu.edu.in/images/approval/iso-2015-blue.png",
    "https://dpu.edu.in/images/approval/commonwealth.png",
  ];
  return (
    <div className={style.accreditationContainer}>
      <div className={style.accreditationWrap}>
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
          {accreditations?.map((acc, index) => (
            <img
              key={index}
              className={style.accreditationImg}
              src={acc}
              alt="accreditation"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Accreditations;
