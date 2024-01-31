import { useState } from "react";
import LandingWrapper from "../../LandingWrapper/LandingWrapper";
import style from "./DeskMessage.module.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function DeskMessage() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const deskmsg = {
    name: "Prof. (Dr.) N. J. Pawar",
    designation: "Vice-Chancellor",
    profileImg: "https://dpu.edu.in/images/img/dr-nj-pawar-ver1.jpg",
    insName: "Dr. D. Y. Patil Vidyapeeth, Pune",
    message: `Dear Students, \n

    I am indeed very happy to welcome you to this prestigious Institution, Dr. D. Y. Patil Vidyapeeth, Pune. I know that you all have chosen this Institution of learning with lot of aspirations and hopes. I am sure that by acquiring the knowledge and skills and with positive attitude and values you will certainly make your dreams come true. Education is a lifelong process and just reading books, gathering knowledge alone is not a true education. It is more important to assimilate and put into practice at least a fraction of what one has learnt. Dr. D Y Patil Vidyapeeth, Pune believes in this philosophy and has taken steps forward in that direction to provide quality education for holistic development of the student. Vidyapeeth offers vide range of professional programs for the development of youth in the area of health education.
    
    To provide quality education, the Dr. D Y Patil Vidyapeeth, Pune has been established. Presently, it comprises of nine constituent units – Dr. D Y Patil Medical College, Hospital & Research Centre, Dr. D Y Patil Dental College & Hospital, Dr. D Y Patil Biotechnology & Bioinformatics Institute, Dr. D Y Patil Institute of Optometry & Visual Sciences, Dr. D Y Patil College of Physiotherapy, Dr. D Y Patil College of Nursing, Dr. D Y Patil Global Business School and Research Centre, Dr. D Y Patil College of Ayurved and Research Centre, Dr. D Y Patil Homeopathic Medical College and Research Centre.
    
    The Vidyapeeth provides unique learning opportunities to the students by combining pedagogically sound and comprehensive professional courses for a variety of subjects. It also incorporates innovative teaching and learning methodologies supported by state of the art library resources, focussing on all-round development of the student. The curricula provide market-driven programs and studies, developed, tested and continually improved by the competent faculty based on the feedback from stakeholders. I am sure that as a student; you will learn, grow and cherish your stay here.
    \n
    Best Wishes.....`,
    profileDesc: `Born in June 1957, Professor N. J. Pawar obtained his B.Sc. degree securing First class with Distinction (1974) from Shivaji University, Kolhapur and M.Sc. (Geology) withFirst class in 1980 from the then University of Pune (currently Savitribai Phule Pune University, Pune). He later acquired his Ph.D. degree in Geology in 1985, from the University of Pune. He was recipient of the Young Scientist Award (in 1984) instituted by Indian Science Congress Association for his research work. For post-doctoral research, he received the prestigious British Council Fellowship for two consecutive terms in 1985 and 1987 for carrying out research at University of East Anglia, Norwich, in U.K. Despite hailing from rural based family, Dr. Pawar has risen rapidly in the academic circles through sheer perseverance and patience. He has contributed immensely to the fields of higher education teaching and research,especially in terms of his specializations in hydrogeology and environmental geochemistry. Professor Pawar has worked as a teacher, researcher and academic administrator in a professional career of over 35 years. He was Lecturer in Geology (1986-91), Reader (1991-1999), full time Joint Co-ordinator in the Department of Environmental Science (1993-1999), Professor ofGeology, (2000-2017), Head of the Department of Geology (January 2008-February 2010) at University of Pune before being appointed as a Vice-Chancellor of Shivaji University, Kolhapur (February 2010–February 2015). After successful completion of his term as a Vice-Chancellor, he joined back as a Professor in the Department of Geology, Savitribai Phule Pune University, Pune and superannuated in 2017. After his retirement he was working at the Joint Centre for collaborative engagements between Savitribai Phule Pune University and Penn State University, USA for a short period (2017-2018). In May 2018 he joined Dr. D. Y. Patil Vidyapeeth (DPU), Pimpri, Pune as a Director (Academics) and subsequently has been appointed as a Vice-Chancellor of DPU from January 1st, 2019.`,
  };
  const path = location?.pathname?.split("/")?.[1];

  return (
    <LandingWrapper>
      <div className={style.deskmsgcontainer}>
        <Link to="/hi">hi</Link>
        <h5 className={`${style.deskmsgcontainerh5} ${style.ourInsh5}`}>
          {path === "chancellors-message"
            ? "Chancellor"
            : path === "vice-chancellors-message"
            ? "Vice Chancellor"
            : path === "principals-message"
            ? "Principal"
            : "Dean"}
        </h5>
        <div className={style.deskmsg}>
          <div className={style.deskmsgtop}>
            <div className={style.deskmsgtoptabs}>
              <div
                className={
                  index === 0
                    ? `${style.deskmsgtoptab} ${style.deskmsgtoptabActive}`
                    : style.deskmsgtoptab
                }
                onClick={() => setIndex(0)}
              >
                Message
              </div>
              <div
                className={
                  index === 1
                    ? `${style.deskmsgtoptab} ${style.deskmsgtoptabActive}`
                    : style.deskmsgtoptab
                }
                onClick={() => setIndex(1)}
              >
                Profile
              </div>
            </div>
          </div>
          <div className={style.deskmsgbody}>
            <div className={style.deskmsgbodytext}>
              <p>{index === 0 ? deskmsg?.message : deskmsg?.profileDesc}</p>
            </div>
            <div className={style.deskmsgbodyprofile}>
              <img src={deskmsg?.profileImg} alt="profile picture" />
              <h5>{deskmsg?.name}</h5>
              <h6>{deskmsg?.designation}</h6>
              <p>{deskmsg?.insName}</p>
            </div>
          </div>
        </div>
      </div>
    </LandingWrapper>
  );
}

export default DeskMessage;
