import { Drawer } from "@mui/material";
import style from "./sideDrawer.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideDrawer({
  open,
  onClose,
  aboutTabList,
  iqacTabList,
  studentTabList,
  academicTabList,
  examTabList,
}) {
  const [activeTab, setActiveTab] = useState("");
  const anchor = "right";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    onClose();
  };

  const list = (anchor) => (
    <>
      <div className={style.sidebarContainer}>
        <div className={style.sidebartop}>
          <div />
          <div className={style.insDetailsmid}>
            <p
              className={style.affiliation}
              //   style={{
              //     color: `${instituteTheme ?? "#010D31"}`,
              //   }}
            >
              Affiliate Group Name
            </p>
            <h6 className={style.inshead}>Dr. D. Y. Patil Vidyapeeth, Pune</h6>
            <p
              className={`${style.affiliation} ${style.naac}`}
              // style={{
              //   color: `${instituteTheme ?? "#010D31"}`,
              // }}
            >
              {/* {instituteAbout?.insEditableText_one} */}
              Government Aided Autonomous Institute under Mumbai University
            </p>
            <p
              className={`${style.affiliation} ${style.contact}`}
              // style={{
              //   color: `${instituteTheme ?? "#010D31"}`,
              // }}
            >
              Bhavans Campus, Munshi Nagar, Andheri West, Mumbai Email ID:
              bd@gmail.com Mob No : 8979456053
              {/* {instituteAbout?.insAddress} Email ID:{instituteAbout?.insEmail},
            Mob No : {instituteAbout?.insPhoneNumber} */}
            </p>
          </div>
          <img
            src="/images/close.svg"
            alt=""
            onClick={() => {
              onClose();
              setActiveTab("");
            }}
          />
        </div>
        <div className={style.sidebar}>
          <div className={`${style.navItemcontainer}`}>
            <Link to={`/`}>
              <p className={style.navp}>Home</p>
            </Link>
          </div>

          <div
            className={
              activeTab === "About Us"
                ? `${style.navItemcontainer} ${style.navItemcontainerActive}`
                : `${style.navItemcontainer}`
            }
            onClick={() =>
              setActiveTab(activeTab === "About Us" ? "" : "About Us")
            }
          >
            <p className={`${style.navp} ${style.eventnavp}`}>
              About Us
              <span>
                <img
                  className={
                    activeTab === "About Us"
                      ? `${style.droptriangleactive}`
                      : `${style.droptriangle}`
                  }
                  src={
                    activeTab === "About Us"
                      ? "/images/down-triangle-white.png"
                      : "/images/down-triangle.svg"
                  }
                  alt="student projects"
                />{" "}
              </span>
            </p>
          </div>
          {activeTab === "About Us" && (
            <div className={`${style.linklist}`}>
              <div className={style.linklistinner}>
                {aboutTabList?.map((sublist, index) => (
                  <div key={index}>
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
                          <Link to={tab?.url}>{tab?.name}</Link>
                        )}
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            className={
              activeTab === "Students"
                ? `${style.navItemcontainer} ${style.navItemcontainerActive}`
                : `${style.navItemcontainer}`
            }
            onClick={() =>
              setActiveTab(activeTab === "Students" ? "" : "Students")
            }
          >
            <p className={`${style.navp} ${style.eventnavp}`}>
              Students
              <span>
                <img
                  className={
                    activeTab === "Students"
                      ? `${style.droptriangleactive}`
                      : `${style.droptriangle}`
                  }
                  src={
                    activeTab === "Students"
                      ? "/images/down-triangle-white.png"
                      : "/images/down-triangle.svg"
                  }
                  alt="student projects"
                />{" "}
              </span>
            </p>
          </div>

          {activeTab === "Students" && (
            <div className={`${style.linklist}`}>
              <div className={`${style.linklistinner} ${style.listinner}`}>
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
          )}

          <div
            className={
              activeTab === "Academics"
                ? `${style.navItemcontainer} ${style.navItemcontainerActive}`
                : `${style.navItemcontainer}`
            }
            onClick={() =>
              setActiveTab(activeTab === "Academics" ? "" : "Academics")
            }
          >
            <p className={`${style.navp} ${style.eventnavp}`}>
              Academics
              <span>
                <img
                  className={
                    activeTab === "Academics"
                      ? `${style.droptriangleactive}`
                      : `${style.droptriangle}`
                  }
                  src={
                    activeTab === "Academics"
                      ? "/images/down-triangle-white.png"
                      : "/images/down-triangle.svg"
                  }
                  alt="student projects"
                />{" "}
              </span>
            </p>
          </div>

          {activeTab === "Academics" && (
            <div className={`${style.linklist}`}>
              <div className={`${style.linklistinner} ${style.listinner}`}>
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
          )}

          <div
            className={
              activeTab === "Examinations"
                ? `${style.navItemcontainer} ${style.navItemcontainerActive}`
                : `${style.navItemcontainer}`
            }
            onClick={() =>
              setActiveTab(activeTab === "Examinations" ? "" : "Examinations")
            }
          >
            <p className={`${style.navp} ${style.eventnavp}`}>
              Examinations
              <span>
                <img
                  className={
                    activeTab === "Examinations"
                      ? `${style.droptriangleactive}`
                      : `${style.droptriangle}`
                  }
                  src={
                    activeTab === "Examinations"
                      ? "/images/down-triangle-white.png"
                      : "/images/down-triangle.svg"
                  }
                  alt="student projects"
                />{" "}
              </span>
            </p>
          </div>

          {activeTab === "Examinations" && (
            <div className={`${style.linklist}`}>
              <div className={`${style.linklistinner} ${style.listinner}`}>
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
          )}

          <div className={`${style.navItemcontainer}`}>
            <Link to={`/research-and-development-cell`}>
              <p className={style.navp}>R and D Cell</p>
            </Link>
          </div>
          <div className={`${style.navItemcontainer}`}>
            <Link to={`/incubation-centre`}>
              <p className={style.navp}>Incubation Centre</p>
            </Link>
          </div>

          <div
            className={
              activeTab === "IQAC"
                ? `${style.navItemcontainer} ${style.navItemcontainerActive}`
                : `${style.navItemcontainer}`
            }
            onClick={() => setActiveTab(activeTab === "IQAC" ? "" : "IQAC")}
          >
            <p className={`${style.navp} ${style.eventnavp}`}>
              IQAC
              <span>
                <img
                  className={
                    activeTab === "IQAC"
                      ? `${style.droptriangleactive}`
                      : `${style.droptriangle}`
                  }
                  src={
                    activeTab === "IQAC"
                      ? "/images/down-triangle-white.png"
                      : "/images/down-triangle.svg"
                  }
                  alt="student projects"
                />{" "}
              </span>
            </p>
          </div>

          {activeTab === "IQAC" && (
            <div className={`${style.linklist}`}>
              <div className={`${style.linklistinner} ${style.listinner}`}>
                {iqacTabList?.map((tab, index) =>
                  tab?.links?.map((tabb, index) => (
                    <div key={index}>
                      <li className={style.listitem}>
                        {tab?.pdf ? (
                          <a
                            href={tabb?.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {tabb?.name}
                          </a>
                        ) : (
                          <Link to={tabb?.url}>{tabb?.name}</Link>
                        )}
                      </li>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          <div className={`${style.navItemcontainer}`}>
            <Link to={`/careers`}>
              <p className={style.navp}>Career</p>
            </Link>
          </div>

          <div className={`${style.navItemcontainer}`}>
            <Link to={`/tenders`}>
              <p className={style.navp}>Tender</p>
            </Link>
          </div>
          <div className={`${style.navItemcontainer}`}>
            <Link to={`/contact-us`}>
              <p className={style.navp}>Contct Us</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Drawer anchor={anchor} open={open} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </>
  );
}

export default SideDrawer;
