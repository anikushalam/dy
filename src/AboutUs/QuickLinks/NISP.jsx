import LandingWrapper from "../../LandingWrapper/LandingWrapper";
import style from "./QuickLinks..module.css";

function NISP() {
  const nispList = [
    {
      link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
      name: "Incubation Startup Policy",
    },
    {
      link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
      name: "NISP Implementation Policy",
    },
    {
      link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
      name: "Bye Laws",
    },
    {
      link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
      name: "NISP State Policy",
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          NISP Policy Adoption and Implementation
        </h5>
        <div className={style.qualityassurancecontainer}>
          {nispList?.map((nisp, index) => (
            <a href={nisp?.link} key={index} className={style.lawcard}>
              {nisp?.name}
            </a>
          ))}
        </div>
      </div>
    </LandingWrapper>
  );
}

export default NISP;
