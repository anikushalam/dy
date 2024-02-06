import { useState } from "react";
import LandingWrapper from "../LandingWrapper/LandingWrapper";
import style from "../Examination/Exam.module.css";
import Reveal from "../custom/animation/Reveal";

function InfoBrochure() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  const AccordionData = [
    {
      id: "1",
      heading: "Medical Information Brochure 2023-24",
      lawlist: [
        {
          link: "https://dpu.edu.in/Documents/2023/Time-table/Dental/revised-bds-third-year-reg-rep-jan-2024.pdf",
          name: "Medical Information Brochure 2023-24",
        },
        {
          link: "https://dpu.edu.in/Documents/2023/Time-table/Dental/revised-bds-third-year-reg-rep-jan-2024.pdf",
          name: "MD/MS (PG) Information Brochure 2023-24",
        },
        {
          link: "https://dpu.edu.in/Documents/2023/Time-table/Dental/revised-bds-third-year-reg-rep-jan-2024.pdf",
          name: "Super Secialty Information Brochure 2023-24",
        },
      ],
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Information Brochure
        </h5>

        <div className={style.Accordion_FAQs}>
          {AccordionData.map((item, index) => (
            <Reveal key={item.id}>
              <div
                className={
                  clicked === index
                    ? `${style.AccordionStyles_Wrap} ${style.accordionactive}`
                    : `${style.AccordionStyles_Wrap}`
                }
                onClick={() => toggle(index)}
              >
                <div className={style.AccordionStyles_Question}>
                  <div
                    className={`${style.subTitle} ${style.accordion_subTitle}`}
                  >
                    {item.heading}
                  </div>

                  {clicked === index ? (
                    <img
                      className={style.plusMinus}
                      src="/images/minus.png"
                      // {
                      //   document.body.className === "dark-theme"
                      //     ? `${imagekitUrl}/Qviple_Landing/minus_white.svg`
                      //     : "/images/minus.png"
                      // }
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <img
                      className={style.plusMinus}
                      src="/images/plus.png"
                      // {
                      //   document.body.className === "dark-theme"
                      //     ? `${imagekitUrl}/Qviple_Landing/plus_white.svg`
                      //     : "/images/light-theme/plus-icon.png"
                      // }
                      alt=""
                      loading="lazy"
                    />
                  )}
                </div>

                <div className={`${style.acccontent} ${item.id}`}>
                  <div className={`${style.text} ${style.accordion_answer}`}>
                    <div className={`${style.lawlist}`}>
                      {item?.lawlist?.map((lawlistitem, index) => (
                        <div key={index} className={`${style.lawlistitem}`}>
                          <img src="/images/point.png" alt="" />
                          <a
                            href={lawlistitem?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {lawlistitem?.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </LandingWrapper>
  );
}

export default InfoBrochure;
