import React from "react";
import style from "./LandingWrapper.module.css";

function InsInfo() {
  return (
    <div className={style.insDetails}>
      <div className={style.insDetailsleft}>
        <img
          className={style.insProfileimage}
          src={
            //   instituteAbout?.website_looks?.logo
            //     ? `${imageShowUrl}/${instituteAbout?.website_looks?.logo}`
            //     :
            "https://ik.imagekit.io/birat22/landing/ins-image.jpg"
          }
          alt="institute"
        />
      </div>
      <div className={style.insDetailsmid}>
        <p
          className={style.affiliation}
          //   style={{
          //     color: `${instituteTheme ?? "#010D31"}`,
          //   }}
        >
          Affiliate Group Name
        </p>
        <h6
          className={style.insName}
          // style={{
          //   color: `${instituteTheme ?? "#010D31"}`,
          // }}
        >
          {/* {instituteAbout?.insName ?? ""} */}
          Dr. D. Y. Patil Vidyapeeth, Pune
        </h6>
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
      <div className={style.insDetailsright}>
        <img
          className={style.insProfileimage}
          src={
            //   instituteAbout?.website_looks?.logo
            //     ? `${imageShowUrl}/${instituteAbout?.website_looks?.logo}`
            //     :
            "/images/naac.png"
          }
          alt="institute"
        />
      </div>
    </div>
  );
}

export default InsInfo;
