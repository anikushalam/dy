import style from "./QuickLinks..module.css";
import LandingWrapper from "../../LandingWrapper/LandingWrapper";

function NewsLetter() {
  const newsList = [
    {
      img: "https://dpu.edu.in/img/news-letter/newsletter-2023.jpg",
      name: "Jan to June 2023",
      link: "https://dpu.edu.in/Documents/other/jan-to-june-2023.pdf",
    },
    {
      img: "https://dpu.edu.in/img/news-letter/g.jpg",
      name: "July to Dec 2023",
      link: "https://dpu.edu.in/documents/other/newsletter-july-to-dec-2022.pdf",
    },
    {
      img: "https://dpu.edu.in/img/news-letter/b.jpg",
      name: "Jan to June 2023",
      link: "https://dpu.edu.in/Documents/other/jan-to-june-2023.pdf",
    },
    {
      img: "https://dpu.edu.in/img/news-letter/h.jpg",
      name: "July to Dec 2023",
      link: "https://dpu.edu.in/documents/other/newsletter-july-to-dec-2022.pdf",
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          News Letter
        </h5>
        <div className={style.ourIns}>
          {newsList?.map((ins, index) => (
            <a
              className={style.insCard}
              key={index}
              href={ins?.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ins?.img} alt={ins?.name} />
              <p>{ins?.name}</p>
            </a>
          ))}
        </div>
      </div>
    </LandingWrapper>
  );
}

export default NewsLetter;
