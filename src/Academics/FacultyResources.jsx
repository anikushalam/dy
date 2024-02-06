import style from "../AboutUs/FacultyList/FacultyList.module.css";
import LandingWrapper from "../LandingWrapper/LandingWrapper";

function FacultyResources() {
  const resourceList = [
    {
      category: "Medical",
      professor: 114,
      reader: 65,
      assistant_professor: 146,
      lecturer: 112,
      tutor: 50,
      senior_resident: 46,
    },
    {
      category: "Dental",
      professor: 28,
      reader: 30,
      assistant_professor: 0,
      lecturer: 27,
      tutor: 10,
      senior_resident: 9,
    },
  ];

  function sumValuesByKey(array, key) {
    let sumByKey = 0;

    // Loop through each object in the array
    array.forEach((obj) => {
      const keyValue = obj[key];

      sumByKey += keyValue;
    });
    console.log(sumByKey);

    return sumByKey;
  }

  //   console.log(
  sumValuesByKey(resourceList, "professor");
  // );

  return (
    <LandingWrapper>
      <div className={style.tablwrap}>
        <h5 className={`${style.testimonialsh5} ${style.ourInsh5}`}>
          Faculty Resources
        </h5>
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
                College/ Institute
              </th>
              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Professor
              </th>

              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Asso. Prof. / Reader
              </th>
              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Asst. Prof.
              </th>
              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Lecturer
              </th>

              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Tutor / Clinical Instructor /Demonstrator
              </th>

              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Senior Resident
              </th>
              <th
              // style={{
              //   backgroundColor: `${instituteTheme ?? "#010D31"}`,
              // }}
              >
                Total
              </th>
            </tr>

            {resourceList?.map((resource, index) => (
              <tr key={index}>
                <td>{resource?.category}</td>
                <td>{resource?.professor}</td>

                <td> {resource?.reader}</td>

                <td> {resource?.assistant_professor}</td>
                <td> {resource?.lecturer}</td>
                <td> {resource?.tutor}</td>
                <td> {resource?.senior_resident}</td>
                <td>
                  {" "}
                  {resource?.professor +
                    resource?.reader +
                    resource?.assistant_professor +
                    resource?.lecturer +
                    resource?.tutor +
                    resource?.senior_resident}
                </td>
              </tr>
            ))}
            <tr>
              <th>Total</th>
              <th>{sumValuesByKey(resourceList, "professor")}</th>

              <th>{sumValuesByKey(resourceList, "reader")}</th>

              <th>{sumValuesByKey(resourceList, "assistant_professor")}</th>
              <th> {sumValuesByKey(resourceList, "lecturer")}</th>
              <th> {sumValuesByKey(resourceList, "tutor")}</th>
              <th> {sumValuesByKey(resourceList, "senior_resident")}</th>
              <th>
                {" "}
                {sumValuesByKey(resourceList, "professor") +
                  sumValuesByKey(resourceList, "reader") +
                  sumValuesByKey(resourceList, "assistant_professor") +
                  sumValuesByKey(resourceList, "lecturer") +
                  sumValuesByKey(resourceList, "tutor") +
                  sumValuesByKey(resourceList, "senior_resident")}
              </th>
            </tr>
          </table>
        </div>
      </div>
    </LandingWrapper>
  );
}

export default FacultyResources;
