const postUrl = "/api/v1";
var id = localStorage.getItem("user");

// -------------------All Department--------------------------------------------

export const allDepartmentFunction = (builder) => {
  return builder.query({
    query: (id) => `/ins/${id}/department`,
  });
};

// -------------------Activate Alumni by Institute Admin--------------------------------------------
export const activateAlumni = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/alumini/ins/${data.id}/staff/${data.sid}`,
      method: "POST",
      body: data.passegeData,
    }),
  });
};

// -------------------Get Alumni Info--------------------------------------------

export const alumniInfo = (builder) => {
  return builder.query({
    query: (aid) => `/alumini/${aid}/dashboard/query`,
  });
};

// -------------------Alumni Registration--------------------------------------------

export const alumniReg = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/alumini/${data.aid}/new/register`,
      method: "POST",
      body: data.alumniData,
    }),
  });
};

// -------------------Get Alumni Reg List--------------------------------------------

export const alumniRegList = (builder) => {
  return builder.query({
    query: (data) =>
      `/alumini/${data.aid}/all/registration/array?page=${data.page}&limit=10&status=${data.status}`,
  });
};

// -------------------Give Certificate--------------------------------------------

export const giveCertificate = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/alumini/${data.rid}/give/certificate`,
      method: "PATCH",
    }),
  });
};

// -------------------Get Prominent Alumni List--------------------------------------------

export const ProminentAlumniList = (builder) => {
  return builder.query({
    query: (data) =>
      `/alumini/${data.aid}/all/prominent/array?page=${data.page}&limit=10`,
  });
};

// -------------------Add Story--------------------------------------------

export const addStory = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/alumini/${data.aid}/new/prominent/query`,
      method: "POST",
      body: data.storyData,
    }),
  });
};

// -------------------Get Feedback List--------------------------------------------

export const feedbackList = (builder) => {
  return builder.query({
    query: (data) =>
      `/alumini/${data.aid}/all/feed/question/array?page=${data.page}&limit=10`,
  });
};

// -------------------Add Feedback Poll--------------------------------------------

export const addFeedbackPoll = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/alumini/question/${data.aid}`,
      method: "POST",
      body: data.pollData,
    }),
  });
};

// -------------------Add Vote To Poll--------------------------------------------

export const addVotePoll = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/alumini/question/${data.aid}/vote/${data.pid}`,
      method: "PATCH",
      body: data.voteData,
    }),
  });
};

// -------------------Mark Info And Add Vote To Poll--------------------------------------------

export const addInfoMarkVotePoll = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/alumini/question/vote/${data.aid}/feedback/query`,
      method: "PATCH",
      body: data.pollData,
    }),
  });
};
