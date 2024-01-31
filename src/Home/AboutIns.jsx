import { Link } from "react-router-dom";
import style from "./InsHome.module.css";

function AboutIns() {
  return (
    <div className={style.aboutInsContainer}>
      <div className={style.aboutIns}>
        <img
          src="https://dpu.edu.in/img/compression/buildings3.jpg"
          className={style.aboutLeft}
        />

        <div className={style.aboutRight}>
          <div className={style.aboutRightbox}>
            <h5 className={style.aboutRightboxh5}>About Institute</h5>
            <p className={style.aboutRightboxp}>
              Dr. D. Y. Patil Vidyapeeth (DPU), Pune, sponsored by Dr. D. Y.
              Patil Vidyapeeth Society, Pune, was declared as
              “Deemed-to-be-University” under Section 3 of UGC Act 1956 in 2003.
              From a humble beginning with one constituent unit i.e. Dr. D. Y.
              Patil Medical College, Hospital and Research Centre, Pune; DPU
              over the last 16 years has grown exponentially with addition of
              eight more constituent units under its ambit. The Government of
              India, MHRD, on the advice of UGC, declared Dr. D. Y. Patil
              Vidyapeeth, Pune as Deemed-to-be University comprising of Dr. D.
              Y. Patil Medical College, Hospital and Research Centre, Pimpri,
              Pune vide its notification dated 11th January 2003.
            </p>
            <div className={style.readmorebtn}>
              <Link to={"/institute-profile"}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIns;
