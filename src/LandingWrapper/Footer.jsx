import { Link } from "react-router-dom";
import style from "./Footer.module.css";

function Footer() {
  const quickLinks = [
    {
      name: "FAQ",
      url: "faq",
    },
    {
      name: "Convocation",
      url: "convocation",
    },
    {
      name: "Admissions",
      url: "admissions",
    },
    {
      name: "Video Gallery",
      url: "video-gallery",
    },
    {
      name: "Privacy Policy",
      url: "privacy-policy",
    },
    {
      name: "Campus ERP",
      url: "https://dashboard.qviple.com/",
    },
    {
      name: "Grievance Redressal",
      url: "grievance-redressal",
    },
    {
      name: "Women Harassment",
      url: "women-harassment",
    },
    {
      name: "Cast Discrimination",
      url: "cast-discrimination",
    },
  ];
  const socialLinks = [
    { url: "https://www.facebook.com/", img: "/images/facebook.png" },
    { url: "https://twitter.com/", img: "/images/twitter.png" },
    { url: "https://www.youtube.com/", img: "/images/youtube.png" },
    { url: "https://www.instagram.com/", img: "/images/instagram.png" },
    { url: "https://www.linkedin.com/", img: "/images/linkedin.png" },
  ];
  const insName = "Dr. D. Y. Patil Vidyapeeth, Pune";
  return (
    <>
      <div className={style.footerContainer}>
        <div className={style.footer}>
          <div className={style.footeraddress}>
            <h6 className={`${style.footeraddressh6}`}>Address</h6>

            <p className={`${style.footeraddressp}`}>
              Dr. D. Y. Patil Vidyapeeth, Pune (Deemed to be University) Sant
              Tukaram Nagar Pimpri, Pune 411018
            </p>

            <h6 className={`${style.contacth6}`}>Contact:</h6>
            <p className={`${style.contactp}`}>+91 20 6711 6412 / 6711 6413</p>
            <p className={`${style.contactp}`}>+91 20 6711 6412 / 6711 6413</p>
            <h6 className={`${style.contacth6}`}>
              Email:{" "}
              <span className={`${style.contactspan}`}>info@dpu.edu.in</span>
            </h6>
            <h6 className={`${style.contacth6}`}>
              Fax:{" "}
              <span className={`${style.contactspan}`}>91 20 27420010</span>
            </h6>
          </div>

          <div className={style.footerquick}>
            <h6 className={`${style.footeraddressh6}`}>Quick Links</h6>

            <ul className={style.footerlinks}>
              {quickLinks?.map((link, index) => (
                <li key={index}>
                  {link?.name === "Campus ERP" ? (
                    <div className={style.quicklinkitem}>
                      <img src="/images/right.svg" alt="" />
                      <a href={link?.url}>{link?.name}</a>
                    </div>
                  ) : (
                    <div className={style.quicklinkitem}>
                      <img src="/images/right.svg" alt="" />
                      <Link to={link?.url}>{link?.name}</Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={style.galsocial}>
            <h6 className={`${style.footeraddressh6}`}>Gallery</h6>
            <Link to="/gallery">
              <img
                className={style.footergallery}
                src="https://dpu.edu.in/images/gallery/dpu-gallery.jpg"
                alt="gallery"
              />
            </Link>
            <div className={style.footersocial}>
              <h6 className={`${style.footeraddressh6}`}>Social Links</h6>
              <div className={style.footersociallinks}>
                {socialLinks?.map((link, index) => (
                  <a href={link?.url} key={index} className={style.sociallink}>
                    <img src={link?.img} alt="social" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.copyrightContainer}>
        <p>
          Copyright ©2024 All Rights Reserved | By Software Development Cell{" "}
          {insName}
        </p>

        <p>Site Updated On : 30/01/2024</p>
      </div>
    </>
  );
}

export default Footer;
