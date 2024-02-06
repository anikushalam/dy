import style from "../AboutUs/QuickLinks/QuickLinks..module.css";
import LandingWrapper from "../LandingWrapper/LandingWrapper";

function SocialOutreach() {
  const linkList = [
    {
      heading: "Extension – Social Outreach",
      links: [
        "Organization of urban and rural health care services, 641 diagnostic health camps and camps for the labour force and for senior citizens and 154 blood collection drives.",
        "Participation in National Health Programmes such as Pulse-Polio Immunization, Tuberculosis Control Programme and Leprosy Eradication Programme.",
        "Adoption of villages for providing diagnostic services and effective health care.",
        "All types of sophisticated investigations such as MRI, CT Scan, Mammography, Colour Doppler, Ultrasonography, 2D Echo, Special Procedures, e.g. Dialysis, Endoscopy, Colposcopy, Lithotripsy, EEG, NCV, etc. are carried out free of cost for indoor patients.",
        "School Health Survey",
        "Nutritional Assessment Survey",
        "Baby Friendly Clinic",
      ],
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Social Outreach
        </h5>
        <div className={style.impLinks}>
          <div className={style.linklistinner}>
            {linkList?.map((sublist, index) => (
              <div key={index} className={style.impLinksinner}>
                <h5 className={style.sublistHeading}>{sublist?.heading}</h5>
                {sublist?.links?.map((tab, indexx) => (
                  <li key={indexx} className={style.sublistitem}>
                    <div>{tab}</div>
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </LandingWrapper>
  );
}

export default SocialOutreach;
