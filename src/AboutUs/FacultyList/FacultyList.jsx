import LandingWrapper from "../../LandingWrapper/LandingWrapper";
import style from "./FacultyList.module.css";

function FacultyList() {
  const facultyList = [
    {
      staffFirstName: "Kishor",
      staffMiddleName: "",
      staffLastName: "Joshi",
      current_designation: "",
      teaching_type: "Other",
    },
    {
      staffFirstName: "Dr. (Smt) Shyamlee",
      staffMiddleName: "Shyamlee Deepak ",
      staffLastName: "Solanki",
      current_designation: "Teacher",
      teaching_type: "Other",
    },
  ];
  return (
    <LandingWrapper>
      <div className={style.tablwrap}>
        <div className={style.tablcontainer}>
          <table className={style.table}>
            <tr
            //   style={{
            //     backgroundColor: `${instituteTheme ?? "#010D31"}`,
            //     borderBottom: `3px solid ${instituteTheme ?? "#010D31"}`,
            //   }}
            >
              <th
              //   style={{
              //     backgroundColor: `${instituteTheme ?? "#010D31"}`,
              //   }}
              >
                Sr. No
              </th>
              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Staff Name
              </th>

              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Designation
              </th>
              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Faculty Type
              </th>
            </tr>

            {facultyList?.map((faculty, index) => (
              <tr key={faculty?._id}>
                <td>{index + 1}</td>
                <td>
                  {`${faculty?.staffFirstName ?? ""} ${
                    faculty?.staffMiddleName ?? ""
                  } ${faculty?.staffLastName ?? ""}`}
                </td>

                <td>{faculty?.current_designation}</td>
                {faculty?.teaching_type ? (
                  <td>{faculty?.teaching_type}</td>
                ) : (
                  <td>Other</td>
                )}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </LandingWrapper>
  );
}

export default FacultyList;
