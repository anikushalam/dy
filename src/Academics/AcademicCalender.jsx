import style from "../AboutUs/QuickLinks/QuickLinks..module.css";
import LandingWrapper from "../LandingWrapper/LandingWrapper";

function AcademicCalender() {
  const calender = [
    {
      name: "Academic Calendar 2022-23",
      link: "https://dpu.edu.in/Documents/Academic-Calender/Academic-Calendar-2022-23.pdf",
    },
    {
      name: "Academic Calendar 2021-22",
      link: "https://dpu.edu.in/Documents/Academic-Calender/Academic-Calendar-2021-2022.pdf",
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Academic Calendars
        </h5>
        <div className={style.qualityassurancecontainer}>
          {calender?.map((cal, index) => (
            <a
              key={index}
              href={cal?.link}
              className={style.lawcard}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cal?.name}
            </a>
          ))}
        </div>
      </div>
    </LandingWrapper>
  );
}

export default AcademicCalender;
