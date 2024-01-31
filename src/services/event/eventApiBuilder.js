const postUrl = "/api/v1";
const electionUrl = "/election/event";
var id = localStorage.getItem("user");

// -------------------Activate Event by Institute Admin--------------------------------------------
export const activateEventDept = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/event/process/ins/${data.id}/staff/${data.sid}/manager`,
      method: "POST",
    }),
  });
};

// // -------------------Activate Event Dept  by Institute Admin--------------------------------------------
// export const activateEventDept = (builder) => {
//   return builder.mutation({
//     query: (data) => ({
//       url: `/event/process/ins/${data.id}/staff/${data.sid}/manager`,
//       method: "POST",
//       body: data,
//     }),
//   });
// };

// -------------------Get Event Dept Info--------------------------------------------

export const eventDeptInfo = (builder) => {
  return builder.query({
    query: (eid) => `/event/process/manager/${eid}`,
  });
};

// -------------------Get All Event List--------------------------------------------

export const alleventList = (builder) => {
  return builder.query({
    query: (data) =>
      `/event/process/manager/${data.eid}/all/events?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get All Seminars List--------------------------------------------

export const allSeminarList = (builder) => {
  return builder.query({
    query: (data) =>
      `/event/process/manager/${data.eid}/all/seminars?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get All Event List of one dept--------------------------------------------

export const oneDeptEventList = (builder) => {
  return builder.query({
    query: (data) =>
      `/event/process/department/${data.did}/all/events?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get All Seminars List of one dept--------------------------------------------

export const oneDeptSeminarList = (builder) => {
  return builder.query({
    query: (data) =>
      `/event/process/department/${data.did}/all/seminars?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------Get One Event Info--------------------------------------------

export const singleEventInfo = (builder) => {
  return builder.query({
    query: (evid) => `/event/process/one/event/${evid}`,
  });
};

// -------------------Get One Seminar Info--------------------------------------------

export const singleSeminarInfo = (builder) => {
  return builder.query({
    query: (smid) => `/event/process/one/seminar/${smid}`,
  });
};

// -------------------Create Event--------------------------------------------

export const createNewEvent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/event/process/manager/${data.eid}/new/event`,
      method: "POST",
      body: data.eventData,
    }),
  });
};

// -------------------Create Seminar--------------------------------------------

export const createNewSeminar = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/event/process/manager/${data.eid}/new/seminar`,
      method: "POST",
      body: data.seminarData,
    }),
  });
};

export const deleteEvent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/event/process/one/event/${data.eid}/destroy`,
      method: "DELETE",
    }),
  });
};

export const deleteSeminar = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/event/process/one/seminar/${data.smid}/destroy`,
      method: "DELETE",
    }),
  });
};

export const editEvent = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/event/process/one/event/${data.eid}/edit`,
      method: "PATCH",
      body: data.eventData,
    }),
  });
};

export const editSeminar = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/event/process/one/seminar/${data.smid}/edit`,
      method: "PATCH",
      body: data.seminarData,
    }),
  });
};

export const eventCoverPhotoFunction = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/all-images/${data.eid}/event/manager/cover`,
      method: "PATCH",
      body: data.cover,
    }),
  });
};

// ----------------Elections--------------------------

export const departmentAllElectionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs === "EVENT_MANAGER"
        ? `/event/process/manager/${data.did}/all/elections?page=${data.page}&limit=${data.limit}`
        : `/election/event/${data.did}/all/query?page=${data.page}&limit=${data.limit}`,
  });
};

// ----------------P.Events--------------------------

export const participateEventList = (builder) => {
  return builder.query({
    query: (data) =>
      data.viewAs === "EVENT_MANAGER"
        ? `/event/process/manager/${data.did}/all/participate?page=${data.page}&limit=10`
        : `/participate/event/all/query/${data.did}?page=${data.page}&limit=10`,
  });
};

export const departmentOneElectionFunction = (builder) => {
  return builder.query({
    query: (eid) => `${electionUrl}/one/${eid}`,
  });
};

export const departmentOneElectionAllCandidateFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${electionUrl}/one/${data.eid}/all/candidate?page=${data.page}&limit=${data.limit}`,
  });
};

// -------------------Participate Event Details--------------------------------------------

export const participateEventDetails = (builder) => {
  return builder.query({
    query: (pid) => `/participate/event/one/${pid}`,
  });
};
