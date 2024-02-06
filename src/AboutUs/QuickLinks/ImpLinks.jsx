import style from "./QuickLinks..module.css";
import LandingWrapper from "../../LandingWrapper/LandingWrapper";

function ImpLinks() {
  const linkList = [
    {
      heading: "MCI (Medical Council of India)",
      links: [
        {
          name: " Graduate Medical Education Regulations, 1997",
          id: 0,
          url: "https://www.nmc.org.in/rules-regulations/graduate-medical-education-regulations-1997/",
        },
        {
          name: " P.G. Medical Education Regulations, 2000",
          id: 1,

          url: "https://www.nmc.org.in/rules-regulations/p-g-medical-education-regulations-2000/",
        },
        {
          name: " Minimum Qualification for Teachers in Medical Institutions Regulations, 1998",
          id: 2,
          url: "https://www.nmc.org.in/rules-regulations/p-g-medical-education-regulations-1998/",
        },
        {
          name: " Minimum Standard Requirements for the Medical College for 250 Admissions Annually Regulations, 1999",
          id: 3,
          pdf: "https://www.nmc.org.in/wp-content/uploads/2017/10/STANDARD-FOR-250.pdf",
        },
      ],
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Important Links
        </h5>
        <div className={style.impLinks}>
          <div className={style.linklistinner}>
            {linkList?.map((sublist, index) => (
              <div key={index} className={style.impLinksinner}>
                <h5 className={style.sublistHeading}>{sublist?.heading}</h5>
                {sublist?.links?.map((tab, indexx) => (
                  <li key={indexx} className={style.sublistitem}>
                    {tab?.pdf ? (
                      <a
                        href={tab?.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tab?.name}
                      </a>
                    ) : (
                      <a
                        href={tab?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tab?.name}
                      </a>
                    )}
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

export default ImpLinks;
