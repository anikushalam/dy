import style from "../AboutUs/QuickLinks/QuickLinks..module.css";
import LandingWrapper from "../LandingWrapper/LandingWrapper";

function Syllabus() {
  const syllabus = [
    {
      name: "B Ed Syllabus",
      link: "https://dpu.edu.in/documents/2020/prephd/syllabus/medicine-pre-phd-syllabus-ver1.pdf",
    },
    {
      name: "Pree Phd Course Syllabus",
      link: "https://dpu.edu.in/documents/2020/prephd/syllabus/medicine-pre-phd-syllabus-ver1.pdf",
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Syllabus
        </h5>
        <div className={style.qualityassurancecontainer}>
          {syllabus?.map((syl, index) => (
            <a
              key={index}
              href={syl?.link}
              className={style.lawcard}
              target="_blank"
              rel="noopener noreferrer"
            >
              {syl?.name}
            </a>
          ))}
        </div>
      </div>
    </LandingWrapper>
  );
}

export default Syllabus;
