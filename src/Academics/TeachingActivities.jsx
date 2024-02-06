import style from "../AboutUs/QuickLinks/QuickLinks..module.css";
import LandingWrapper from "../LandingWrapper/LandingWrapper";

function TeachingActivities() {
  const linkList = [
    {
      heading: "Innovative Teaching Methods",
      links: [
        {
          name: "Lesson Plan introduced in each semester in all institutions.",
          id: 0,
          url: "https://www.nmc.org.in/rules-regulations/graduate-medical-education-regulations-1997/",
        },
        {
          name: "The Vidyapeeth organizes “Industry-Academic Linkage” meetings",
          id: 1,

          url: "https://www.nmc.org.in/rules-regulations/p-g-medical-education-regulations-2000/",
        },
        {
          name: "Industrial Training Programmes in Management, Biotechnology and Medicine Faculties.",
          id: 2,
          url: "https://www.nmc.org.in/rules-regulations/p-g-medical-education-regulations-1998/",
        },
        {
          name: "Personality development",
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
          Teaching & Learning Activities
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

export default TeachingActivities;
