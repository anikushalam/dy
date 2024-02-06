import { useState } from "react";
import LandingWrapper from "../../LandingWrapper/LandingWrapper";
import style from "./QuickLinks..module.css";
import Reveal from "../../custom/animation/Reveal";

function QualityAssurance() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const AccordionData = [
    {
      id: "1",
      heading: "Policy",
      lawlist: [
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Reservation Policy for Admission to Allied Health Sciences Courses",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Training and Placement Cell Policy",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Maintenance Policy for Infrastructure Facilities, Physical Facilities & Other Facilities",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Energy Efficiency and Energy Conservation Policy",
        },
      ],
    },
    {
      id: "2",
      heading: "Guidelines",
      lawlist: [
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Reservation Policy for Admission to Allied Health Sciences Courses",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Training and Placement Cell Policy",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Maintenance Policy for Infrastructure Facilities, Physical Facilities & Other Facilities",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Energy Efficiency and Energy Conservation Policy",
        },
      ],
    },
    {
      id: "3",
      heading: "Manual",
      lawlist: [
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Reservation Policy for Admission to Allied Health Sciences Courses",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Training and Placement Cell Policy",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Maintenance Policy for Infrastructure Facilities, Physical Facilities & Other Facilities",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Energy Efficiency and Energy Conservation Policy",
        },
      ],
    },
    {
      id: "4",
      heading: "Annual Report",
      lawlist: [
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Reservation Policy for Admission to Allied Health Sciences Courses",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Training and Placement Cell Policy",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Maintenance Policy for Infrastructure Facilities, Physical Facilities & Other Facilities",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Energy Efficiency and Energy Conservation Policy",
        },
      ],
    },
    {
      id: "5",
      heading: "Regulations",
      lawlist: [
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Reservation Policy for Admission to Allied Health Sciences Courses",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Training and Placement Cell Policy",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Maintenance Policy for Infrastructure Facilities, Physical Facilities & Other Facilities",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Energy Efficiency and Energy Conservation Policy",
        },
      ],
    },
    {
      id: "6",
      heading: "Standard Operating Procedure (SOP)",
      lawlist: [
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Reservation Policy for Admission to Allied Health Sciences Courses",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Training and Placement Cell Policy",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Maintenance Policy for Infrastructure Facilities, Physical Facilities & Other Facilities",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Energy Efficiency and Energy Conservation Policy",
        },
      ],
    },
    {
      id: "7",
      heading: "AQAR",
      lawlist: [
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Reservation Policy for Admission to Allied Health Sciences Courses",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Training and Placement Cell Policy",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Maintenance Policy for Infrastructure Facilities, Physical Facilities & Other Facilities",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Energy Efficiency and Energy Conservation Policy",
        },
      ],
    },
    {
      id: "4",
      heading: "News Letter",
      lawlist: [
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Reservation Policy for Admission to Allied Health Sciences Courses",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "DPU Training and Placement Cell Policy",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Maintenance Policy for Infrastructure Facilities, Physical Facilities & Other Facilities",
        },
        {
          link: "https://dpu.edu.in/docs/quality-assurance/policy/dpu-reservation-policy-for-admission-to-allied-health-sciences-courses.pdf",
          name: "Energy Efficiency and Energy Conservation Policy",
        },
      ],
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.qualityassurancewrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Quality Assurance
        </h5>
        <div className={style.qualityassurancecontainer}>
          <div className={style.lawcard}>Institute at Glance</div>
          <div className={style.lawcard}>Future Vission</div>
        </div>

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
        {/* <div className={style.Accordion_FAQs}>
            {AccordionData.slice(
              AccordionData?.length / 2,
              AccordionData?.length
            ).map((item, index) => (
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
          </div> */}
        {/* </div> */}
      </div>
    </LandingWrapper>
  );
}

export default QualityAssurance;
