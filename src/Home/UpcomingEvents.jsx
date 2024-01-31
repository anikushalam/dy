import { Link } from "react-router-dom";
import style from "./InsHome.module.css";
function UpcomingEvents() {
  const uevents = [
    {
      heading: "Oral Health & Prosthodontics for the Elderly",
      date: "19/Jan/2024 ",
      place:
        "Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune",
    },
    {
      heading: "Oral Health & Prosthodontics for the Elderly",
      date: "19/Jan/2024 ",
      place:
        "Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune",
    },
    {
      heading: "Oral Health & Prosthodontics for the Elderly",
      date: "19/Jan/2024 ",
      place:
        "Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune",
    },
    {
      heading: "Oral Health & Prosthodontics for the Elderly",
      date: "19/Jan/2024 ",
      place:
        "Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune",
    },
    {
      heading: "Oral Health & Prosthodontics for the Elderly",
      date: "19/Jan/2024 ",
      place:
        "Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune",
    },
    {
      heading: "Oral Health & Prosthodontics for the Elderly",
      date: "19/Jan/2024 ",
      place:
        "Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune",
    },
    {
      heading: "Oral Health & Prosthodontics for the Elderly",
      date: "19/Jan/2024 ",
      place:
        "Dr. D. Y. Patil Dental College & Hospital Sant Tukaram Nagar, Pimpri, Pune",
    },
  ];
  const eventBrochures = [
    {
      img: "https://dpu.edu.in/img/physiodrom-img.jpg",
      url: "https://physiotherapy.dpu.edu.in/physiodrome/",
    },
  ];
  return (
    <div className={style.eventswrap}>
      <div className={style.insevents}>
        <h3 className={style.inseventsh3}>Events</h3>
        <div className={style.inseventsbox}>
          <div className={style.scrollList}>
            {uevents.map((event, index) => (
              <div key={index} className={style.uevent}>
                <div key={index} className={style.ueventdate}>
                  <p>{event?.date?.split("/")?.[1]}</p>
                  <h6>{event?.date?.split("/")?.[0]}</h6>
                  <p>{event?.date?.split("/")?.[2]}</p>
                </div>
                <div key={index} className={style.ueventtext}>
                  <h5 className={style.ueventhead}>{event?.heading}</h5>
                  <p className={style.ueventddate}>{event?.date}</p>
                  <h5 className={style.ueventPlace}>{event?.place}</h5>
                  <Link
                    to={"/upcoming-event-details"}
                    className={style.eventreadmore}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.inseventcard}>
        <h3 className={style.inseventsh3}>Upcoming Events</h3>
        <img src={eventBrochures[0].img} alt="" />
      </div>
    </div>
  );
}

export default UpcomingEvents;
