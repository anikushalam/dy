import { useState } from "react";
import LandingWrapper from "../../LandingWrapper/LandingWrapper";
import style from "./Committees.module.css";

function Committees() {
  const committees = [
    {
      name: " Executive Council",
      objectives:
        "It is hereby notified for information of all concerned that as per Clause No.11.05 of the UGC (Institutions deemed to be Universities) Regulations, 2023 dated 2 nd June, 2023, “Executive Council” of the Vidyapeeth has been constituted as follows:",
      members: [
        {
          name: "Dr. N. J. Pawar",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Vice-Chancellor",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Dr-N-J-Pawar.png",
        },
        {
          name: "Dr. (Mrs.) Smita Jadhav",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Pro-Vice-Chancellor",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Smita-Jadhav.png",
        },
        {
          name: "Prof. N. K. Chadha",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Former Professor & Head, Dept. of Psychology",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Prof.N.K.Chadha.png",
        },
        {
          name: "Dr. N. J. Pawar",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Vice-Chancellor",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Dr-N-J-Pawar.png",
        },
        {
          name: "Dr. (Mrs.) Smita Jadhav",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Pro-Vice-Chancellor",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Smita-Jadhav.png",
        },
        {
          name: "Prof. N. K. Chadha",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Former Professor & Head, Dept. of Psychology",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Prof.N.K.Chadha.png",
        },
        {
          name: "Dr. N. J. Pawar",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Vice-Chancellor",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Dr-N-J-Pawar.png",
        },
        {
          name: "Dr. (Mrs.) Smita Jadhav",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Pro-Vice-Chancellor",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Smita-Jadhav.png",
        },
        {
          name: "Prof. N. K. Chadha",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Former Professor & Head, Dept. of Psychology",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Prof.N.K.Chadha.png",
        },
      ],
    },
    {
      name: "Academic Council",
      objectives: "",
      members: [
        {
          name: "Dr. N. J. Pawar",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Vice-Chancellor",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Dr-N-J-Pawar.p",
        },
        {
          name: "Dr. (Mrs.) Smita Jadhav",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Pro-Vice-Chancellor",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Smita-Jadhav.png",
        },
        {
          name: "Prof. N. K. Chadha",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Former Professor & Head, Dept. of Psychology",
          profileImg:
            "https://dpu.edu.in/images/Executive-Council/Prof.N.K.Chadha.png",
        },
        {
          name: "Col. (Retd.) Dr. Ravindra Manerikar",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation:
            "Professor, Orthodontics and Dentofacial Orthopedics and Principal, RDC Loni Pravara Institute of Health Sciences, Tal. Rahata, Dist. Ahmadnagar.",
        },
        {
          name: "Dr. Nitin M. Gangane",
          phone: "+9120-27805000 / 27805001",
          email: "reffyjohn@gmail.com",
          designation: "Vice Chancellor",
        },
      ],
    },
  ];
  const [committee, setCommittee] = useState(committees?.[0]);
  return (
    <LandingWrapper>
      <div className={style.committeescontainer}>
        <div className={style.committees}>
          <div className={style.committeesSidebar}>
            {committees?.map((committee, index) => (
              <div
                key={index}
                className={style.committeesSidebaritem}
                onClick={() => setCommittee(committee)}
              >
                <img src="/images/right-triangle-white.png" alt="" />
                <p>{committee?.name}</p>
              </div>
            ))}
          </div>
          <div className={style.committeeList}>
            <table className={style.table}>
              <tr className={style.tr}>
                <th className={style.th}>Sr. No.</th>
                <th className={style.th}>Name</th>
                <th className={style.th}>Designation</th>
                <th className={style.th}>Contact</th>
              </tr>

              {committee?.members?.map((member, index) => (
                <tr className={style.tr} key={index}>
                  <td className={`${style.td} ${style.index}`}>{index + 1}</td>
                  <td className={`${style.td} ${style.name}`}>
                    <img
                      src={
                        member?.profileImg
                          ? member?.profileImg
                          : "/images/avatar.png"
                      }
                      alt=""
                    />
                    <p> {member?.name}</p>
                  </td>
                  <td className={`${style.td} ${style.designation}`}>
                    {member?.designation}
                  </td>
                  <td className={`${style.td} ${style.contact}`}>
                    <div>
                      <p style={{ marginBottom: "0.3rem" }}> {member?.phone}</p>
                      <p>{member?.email}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </LandingWrapper>
  );
}

export default Committees;
