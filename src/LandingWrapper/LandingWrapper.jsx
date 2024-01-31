import style from "./LandingWrapper.module.css";
import InsInfo from "./InsInfo";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import SideDrawer from "./Drawer/SideDrawer";

function LandingWrapper({ children }) {
  const [clickMenu, setClickMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const aboutTabList = [
    {
      heading: "About Institute",
      links: [
        {
          name: "Institute Profile",
          id: 0,
          url: "institute-profile",
        },
        {
          name: "Organization Structure",
          id: 1,
          url: "organization-structure",
          pdf: "https://dpu.edu.in/documents/organization-structure-ver2.pdf",
        },
        {
          name: "Certificate of Accreditation",
          id: 2,
          url: "certificate-of-accreditation",
          pdf: "https://dpu.edu.in/documents/naac-certificate-of-accreditation-2022.pdf",
        },
        {
          name: "AICTE Approval",
          id: 3,
          url: "aicte-approval",
        },
      ],
    },
    {
      heading: "Committee",
      links: [
        {
          name: "Committees",
          id: 0,
          url: "committees",
        },
      ],
    },
    {
      heading: "Our Institute",
      links: [
        {
          name: "Medical College",
          id: 0,
          url: "medical-edu",
        },
        {
          name: "Dental College & Hospital",
          id: 0,
          url: "dental-edu",
        },
        {
          name: "School of Design",
          id: 0,
          url: "design-edu",
        },
        {
          name: "Physiotherapy College",
          id: 0,
          url: "physiotherapy-edu",
        },
      ],
    },
    {
      heading: "Message From Desk",
      links: [
        {
          name: "Chancellor",
          id: 0,
          url: "chancellors-message",
        },
        {
          name: "Vice Chancellor",
          id: 0,
          url: "vice-chancellors-message",
        },
        {
          name: "Principal",
          id: 0,
          url: "principals-message",
        },
        {
          name: "Dean",
          id: 0,
          url: "dean-message",
        },
      ],
    },
    {
      heading: "Faculty",
      links: [
        {
          name: "Faculty List",
          id: 0,
          url: "faculty-list",
        },
      ],
    },
    {
      heading: "Quick Links",
      links: [
        {
          name: "Quality Assurance",
          id: 0,
          url: "quality-assurance",
        },
        {
          name: "Code of Conduct",
          id: 1,
          url: "code-of-conducts",
        },
        {
          name: "Important Links",
          id: 2,
          url: "important-links",
        },
        {
          name: "NISP Policy",
          id: 3,
          url: "nisp-policy",
        },
        {
          name: "News Letter",
          id: 4,
          url: "news-letter",
        },
      ],
    },
  ];

  const iqacTabList = [
    {
      heading: "About IQAC",
      links: [
        {
          name: "IQAC",
          id: 0,
          url: "iqac",
        },
        {
          name: "Vision Mission and Objectives",
          id: 1,
          url: "iqac-objectives",
        },
        {
          name: "Composition",
          id: 2,
          url: "iqac-composition",
          pdf: "https://dpu.edu.in/docs/Composition-IQAC.pdf",
        },
      ],
    },
    {
      heading: "About IQAC",
      links: [
        {
          name: "Action Taken Report",
          id: 3,
          url: "action-taken-report",
        },

        {
          name: "Accreditation and Recognition Certificates",
          id: 4,
          url: "ethics-committee-certificate",
        },
        {
          name: "Strategic Plan",
          id: 5,
          url: "strategic-plan",
          pdf: "https://dpu.edu.in/Documents/DPU-Vision-2025-Final.pdf",
        },
      ],
    },
    {
      heading: "About IQAC",
      links: [
        {
          name: "Acadamic Council Meeting Minutes",
          id: 6,
          url: "academic-council",
          pdf: "",
        },
        {
          name: "Quality Control",
          id: 7,
          url: "quality-control",
        },
        {
          name: "NAAC",
          id: 8,
          url: "naac",
        },
      ],
    },
    {
      heading: "About IQAC",
      links: [
        {
          name: "NIRF",
          id: 9,
          url: "nirf",
        },
        {
          name: "Feedback",
          id: 10,
          url: "structured-feedback",
        },
        {
          name: "SOP for Feedback",
          id: 8,
          url: "sop-feedback",
          pdf: "https://dpu.edu.in/docs/sop-for-feedback.pdf",
        },
      ],
    },
  ];

  const studentTabList = [
    {
      name: "Nodal Officer for Student's Facilitation",
      id: 0,
      url: "nodal-officer-for-students-facilitation",
    },
    {
      name: "Intake Capacity",
      id: 1,
      url: "intake-capacity",
    },
    {
      name: "List of Prominent Students",
      id: 2,
      url: "prominent-students",
    },
    {
      name: "Anti Ragging",
      id: 3,
      url: "anti-ragging initiative",
    },
    {
      name: "Training and Placement Cell",
      id: 4,
      url: "training-cell",
    },
    {
      name: "Disciplined Conduct of Student",
      id: 5,
      url: "disciplined-conduct-of-the-student",
      pdf: "https://dpu.edu.in/documents/disciplined-conduct-of-the-student.pdf",
    },
    {
      name: "Programme Outcome",
      id: 5,
      url: "programme-outcomes",
      pdf: "https://dpu.edu.in/documents/programme-outcomes.pdf",
    },
  ];
  const academicTabList = [
    {
      name: "Capability Enhancement Skills",
      id: 0,
      url: "capability-enhancement-skills",
    },
    {
      name: "Syllabus",
      id: 1,
      url: "syllabus",
    },
    {
      name: "Faculty Resources",
      id: 1,
      url: "faculty-resources",
    },
    {
      name: "Faculty Resources",
      id: 1,
      url: "faculty-resources",
    },
    {
      name: "Teaching-Learning Activities",
      id: 1,
      url: "teaching-activities",
    },
    {
      name: "Academic Calendars",
      id: 1,
      url: "academic-calendars",
    },
    {
      name: "Information Brochure",
      id: 1,
      url: "info-brochure",
    },
    {
      name: "Programmes",
      id: 1,
      url: "programmes",
    },
  ];
  const examTabList = [
    {
      name: "Manual of Examinations",
      id: 0,
      url: "examination-manual",
      pdf: "https://dpu.edu.in/Documents/manual-of-examinations-ver1.pdf",
    },
    {
      name: "Examination Schedule",
      id: 1,
      url: "examination-schedule",
      pdf: "https://dpu.edu.in/documents/2023/schedule-first-half-2023-ver-5.pdf",
    },
    {
      name: "Examination Time Table",
      id: 2,
      url: "examination-time-table",
    },
    {
      name: "Examination Notification",
      id: 3,
      url: "examination-notification",
    },
  ];
  return (
    <>
      <div
        className={style.insLanding}
        // style={

        //     background_image && {
        //     background: `url(${imageShowUrl}/${getwebsiteInfoGetByInstitute?.one_ins?.website_looks?.background_image})`,
        //   }
        // }
      >
        <div className={style.landingTop}>
          <InsInfo />
          {!clickMenu && (
            <div
              className={`${style.navtopcontainer}`}
              // style={{
              //   backgroundColor: `${
              //     getwebsiteInfoGetByInstitute?.one_ins?.website_looks
              //       ?.color ?? "rgba(1, 13, 49, 0.8)"
              //   }`,
              // }}
            >
              <div className={`${style.navtop} ${style.navtopresponsive}`}>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive}`}
                >
                  <Link to={`/`}>
                    <p className={style.navp}>Home</p>
                  </Link>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive} ${style.events} `}
                >
                  <p className={`${style.navp} ${style.eventnavp}`}>
                    About Us
                    <span>
                      <img
                        className={style.droptriangle}
                        src="/images/down-triangle.svg"
                        alt="student projects"
                      />{" "}
                    </span>
                    <div
                      className={
                        aboutTabList?.length >= 4
                          ? `${style.linklist} ${style.linklistfour}`
                          : aboutTabList?.length === 3
                          ? `${style.linklist} ${style.linklistthree}`
                          : aboutTabList?.length === 2
                          ? `${style.linklist} ${style.linklisttwo}`
                          : `${style.linklist}`
                      }
                    >
                      <div className={style.linklistinner}>
                        {aboutTabList?.map((sublist, index) => (
                          <div key={index}>
                            <h5 className={style.sublistHeading}>
                              {sublist?.heading}
                            </h5>
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
                                  <Link to={`/${tab?.url}`}>{tab?.name}</Link>
                                )}
                              </li>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </p>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive} ${style.events} ${style.eventsposition}`}
                >
                  <p className={`${style.navp} ${style.eventnavp}`}>
                    Students
                    <span>
                      <img
                        className={style.droptriangle}
                        src="/images/down-triangle.svg"
                        alt="student projects"
                      />{" "}
                    </span>
                    <div className={`${style.linklist}`}>
                      <div
                        className={`${style.linklistinner} ${style.listinner}`}
                      >
                        {studentTabList?.map((tab, index) => (
                          <div key={index}>
                            <li className={style.listitem}>
                              {tab?.pdf ? (
                                <a
                                  href={tab?.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {tab?.name}
                                </a>
                              ) : (
                                <Link to={tab?.url}>{tab?.name}</Link>
                              )}
                            </li>
                          </div>
                        ))}
                      </div>
                    </div>
                  </p>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive} ${style.events} ${style.eventsposition}`}
                >
                  <p className={`${style.navp} ${style.eventnavp}`}>
                    Academics
                    <span>
                      <img
                        className={style.droptriangle}
                        src="/images/down-triangle.svg"
                        alt="student projects"
                      />{" "}
                    </span>
                    <div className={`${style.linklist}`}>
                      <div
                        className={`${style.linklistinner} ${style.listinner}`}
                      >
                        {academicTabList?.map((tab, index) => (
                          <div key={index}>
                            <li className={style.listitem}>
                              {tab?.pdf ? (
                                <a
                                  href={tab?.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {tab?.name}
                                </a>
                              ) : (
                                <Link to={tab?.url}>{tab?.name}</Link>
                              )}
                            </li>
                          </div>
                        ))}
                      </div>
                    </div>
                  </p>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive} ${style.events} ${style.eventsposition}`}
                >
                  <p className={`${style.navp} ${style.eventnavp}`}>
                    Examinations
                    <span>
                      <img
                        className={style.droptriangle}
                        src="/images/down-triangle.svg"
                        alt="student projects"
                      />{" "}
                    </span>
                    <div className={`${style.linklist}`}>
                      <div
                        className={`${style.linklistinner} ${style.listinner}`}
                      >
                        {examTabList?.map((tab, index) => (
                          <div key={index}>
                            <li className={style.listitem}>
                              {tab?.pdf ? (
                                <a
                                  href={tab?.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {tab?.name}
                                </a>
                              ) : (
                                <Link to={tab?.url}>{tab?.name}</Link>
                              )}
                            </li>
                          </div>
                        ))}
                      </div>
                    </div>
                  </p>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive}`}
                >
                  <Link to={`/research-and-development-cell`}>
                    <p className={style.navp}>R and D Cell</p>
                  </Link>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive}`}
                >
                  <Link to={`/incubation-centre`}>
                    <p className={style.navp}>Incubation Centre</p>
                  </Link>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive} ${style.events} `}
                >
                  <p className={`${style.navp} ${style.eventnavp}`}>
                    IQAC
                    <span>
                      <img
                        className={style.droptriangle}
                        src="/images/down-triangle.svg"
                        alt="student projects"
                      />{" "}
                    </span>
                    <div
                      className={
                        iqacTabList?.length >= 4
                          ? `${style.linklist} ${style.linklistfour}`
                          : iqacTabList?.length === 3
                          ? `${style.linklist} ${style.linklistthree}`
                          : iqacTabList?.length === 2
                          ? `${style.linklist} ${style.linklisttwo}`
                          : `${style.linklist}`
                      }
                    >
                      <div className={style.linklistinner}>
                        {iqacTabList?.map((sublist, index) => (
                          <div key={index}>
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
                                  <Link to={tab?.url}>{tab?.name}</Link>
                                )}
                              </li>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </p>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive}`}
                >
                  <Link to={`/careers`}>
                    <p className={style.navp}>Career</p>
                  </Link>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive}`}
                >
                  <Link to={`/tenders`}>
                    <p className={style.navp}>Tender</p>
                  </Link>
                </div>
                <div
                  className={`${style.navpcontainer} ${style.navpresponsive}`}
                >
                  <Link to={`/contact-us`}>
                    <p className={style.navp}>Contct Us</p>
                  </Link>
                </div>

                <div
                  className={`${style.navpcontainer} ${style.navpmenucontainer} ${style.barcontainer}`}
                >
                  <div
                    className={style.menubarcontainer}
                    onClick={() => {
                      setClickMenu(!clickMenu);
                      setOpenDrawer(true);
                    }}
                  >
                    <div
                      className={
                        clickMenu
                          ? `${style.menuBar} ${style.bar1clicked}`
                          : `${style.menuBar} ${style.bar1}`
                      }
                    />

                    <div
                      className={
                        clickMenu
                          ? `${style.menuBar} ${style.bar2clicked}`
                          : `${style.menuBar} ${style.bar2}`
                      }
                    />

                    <div
                      className={
                        clickMenu
                          ? `${style.menuBar} ${style.bar3clicked}`
                          : `${style.menuBar} ${style.bar3}`
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <SideDrawer
            aboutTabList={aboutTabList}
            iqacTabList={iqacTabList}
            studentTabList={studentTabList}
            academicTabList={academicTabList}
            examTabList={examTabList}
            open={openDrawer}
            onClose={() => {
              setClickMenu(false);
              setOpenDrawer(false);
            }}
          />
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
}

export default LandingWrapper;
