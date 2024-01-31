import { Link } from "react-router-dom";
import style from "./InsHome.module.css";

function OurIns() {
  const institutes = [
    {
      img: "https://dpu.edu.in/img/compression/medical-clg.jpg",
      name: "Dr. D. Y. Patil Medical College, Hospital & Research Centre",
      link: "/medical-profile",
    },
    {
      img: "https://dpu.edu.in/img/compression/dental.jpg",
      name: "Dr. D. Y. Patil Dental College & Hospital",
      link: "/medical-profile",
    },
    {
      img: "https://dpu.edu.in/img/compression/biotech-building.jpg",
      name: "Dr. D. Y. Patil Medical College, Hospital & Research Centre",
      link: "/medical-profile",
    },
    {
      img: "https://dpu.edu.in/img/compression/gbsrc-building.jpg",
      name: "Dr. D. Y. Patil Medical College, Hospital & Research Centre",
      link: "/medical-profile",
    },
    {
      img: "https://dpu.edu.in/img/compression/nursing-build.jpg",
      name: "Dr. D. Y. Patil Medical College, Hospital & Research Centre",
      link: "/medical-profile",
    },
    {
      img: "https://dpu.edu.in/img/compression/optometry.jpg",
      name: "Dr. D. Y. Patil Medical College, Hospital & Research Centre",
      link: "/medical-profile",
    },
    {
      img: "https://dpu.edu.in/img/compression/physio-build1.jpg",
      name: "Dr. D. Y. Patil Medical College, Hospital & Research Centre",
      link: "/medical-profile",
    },
    {
      img: "https://dpu.edu.in/img/compression/sod.jpg",
      name: "Dr. D. Y. Patil Medical College, Hospital & Research Centre",
      link: "/medical-profile",
    },
  ];
  return (
    <div className={style.ourInsContainer}>
      <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
        Our Institutes
      </h5>
      <div className={style.ourIns}>
        {institutes?.map((ins, index) => (
          <Link className={style.insCard} key={index} to={ins?.link}>
            <img src={ins?.img} alt={ins?.name} />
            <p>{ins?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OurIns;
