import { Link } from "react-router-dom";
import style from "./InsHome.module.css";
import UpcomingEvents from "./UpcomingEvents";

function ImportantLinks() {
  const implinks = [
    {
      name: "Convocation Notification",
      url: "/",
      pdf: "https://dpu.edu.in/Documents/2024/notification/notification-15th-convocation.pdf",
    },
    {
      name: "Awareness about ABC Scheme",
      url: "abc-awareness",
    },
    {
      name: "Examination Timetable",
      url: "examination-time-table",
    },
  ];
  const impbrochures = [
    {
      img: "https://dpu.edu.in/img/convocation.jpg",
      url: "convocation",
      pdf: "https://dpu.edu.in/Documents/2024/notification/notification-15th-convocation.pdf",
    },
    {
      img: "https://dpu.edu.in/img/international-admission.jpg",
      url: "registration",
    },
  ];
  return (
    <div className={style.linksContainer}>
      <div className={style.linkswrap}>
        <div className={style.links}>
          {implinks?.map((implink, index) => (
            <>
              {implink?.pdf ? (
                <a
                  className={style.implinkitem}
                  href={implink?.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {implink?.name}
                </a>
              ) : (
                <Link
                  to={`/${implink?.url}`}
                  className={style.implinkitem}
                  key={index}
                >
                  {implink?.name}
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
      <div className={style.linkswrap}>
        <div className={style.linkbrochures}>
          {impbrochures?.map((brochure, index) => (
            <>
              {brochure?.pdf ? (
                <a
                  className={style.impbrocureitem}
                  href={brochure?.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={brochure?.img} alt="" />
                </a>
              ) : (
                <Link
                  to={`/${brochure?.url}`}
                  className={style.impbrocureitem}
                  key={index}
                >
                  <img src={brochure?.img} alt="" />
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
      <UpcomingEvents />
    </div>
  );
}

export default ImportantLinks;
