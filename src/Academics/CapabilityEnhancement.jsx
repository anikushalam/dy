import { useState } from "react";
import style from "../Examination/Exam.module.css";
import LandingWrapper from "../LandingWrapper/LandingWrapper";
import Reveal from "../custom/animation/Reveal";

function CapabilityEnhancement() {
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
      heading: "Capability Enhancement Skills 2020-21",
      lawlist: [
        {
          link: "https://dpu.edu.in/Documents/Capability-Enhancement-Skills/2020-21/5-1-2-1-Soft-Skills-Develpoment.pdf",
          name: "Soft Skill Development",
        },
        {
          link: "https://dpu.edu.in/Documents/Capability-Enhancement-Skills/2020-21/5-1-2-5-Human-Value-Development.pdf",
          name: "Language and Communication Development",
        },
        {
          link: "https://dpu.edu.in/Documents/Capability-Enhancement-Skills/2020-21/5-1-2-2-Language-and-Communication-Skills.pdf",
          name: "Personality and Professional Development",
        },
      ],
    },
    {
      id: "2",
      heading: "Capability Enhancement Skills 2020-21",
      lawlist: [
        {
          link: "https://dpu.edu.in/Documents/Capability-Enhancement-Skills/2020-21/5-1-2-1-Soft-Skills-Develpoment.pdf",
          name: "Soft Skill Development",
        },
        {
          link: "https://dpu.edu.in/Documents/Capability-Enhancement-Skills/2020-21/5-1-2-5-Human-Value-Development.pdf",
          name: "Language and Communication Development",
        },
        {
          link: "https://dpu.edu.in/Documents/Capability-Enhancement-Skills/2020-21/5-1-2-2-Language-and-Communication-Skills.pdf",
          name: "Personality and Professional Development",
        },
      ],
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Capability Enhancement Skills
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

export default CapabilityEnhancement;
