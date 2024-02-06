import style from "./QuickLinks..module.css";
import LandingWrapper from "../../LandingWrapper/LandingWrapper";

function CodeofConduct() {
  const coc = [
    {
      link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
      name: "Conduct of Employees of the Institute",
    },
    {
      link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
      name: "Code of Professional Ethics",
    },
    {
      link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
      name: "Bye Laws",
    },
    {
      link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
      name: "Disciplined Conduct of Student",
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Code of Conducts
        </h5>
        <div className={style.qualityassurancecontainer}>
          {coc?.map((conduct, index) => (
            <a href={conduct?.link} key={index} className={style.lawcard}>
              {conduct?.name}
            </a>
          ))}
        </div>
      </div>
    </LandingWrapper>
  );
}

export default CodeofConduct;
