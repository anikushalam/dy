const postUrl = "/api/v1";
var id = localStorage.getItem("user");

// -------------------Get Vacancy List of one --------------------------------------------

export const vacancyList = (builder) => {
  return builder.query({
    query: (data) =>
      `/landing/one/career/${data.lcid}/all/vacancy?page=${data.page}&limit=10&status=${data.status}`,
  });
};

// -------------------Get Vacancy Info--------------------------------------------

export const vacancyInfo = (builder) => {
  return builder.query({
    query: (vid) => `/landing/one/vacancy/${vid}/query`,
  });
};

// -------------------File Upload--------------------------------------------

export const fileUploadFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `/all-images/onefile`,
      method: "PATCH",
      body: data.fileUpload,
    }),
  });
};

// -------------------File Upload and Update--------------------------------------------

export const fileUploadAndUpdatedFunction = (builder, method) => {
  return builder.mutation({
    query: (data) => ({
      url: `/all-images/onefile/update`,
      method: "PATCH",
      body: data.fileUpdate,
    }),
  });
};

// -------------------Apply Vacancy--------------------------------------------

export const applyVacancy = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/landing/one/vacancy/${data.vid}/apply`,
      method: "PATCH",
      body: data.applyData,
    }),
  });
};

// -------------------Get Tender List of one --------------------------------------------

export const tenderList = (builder) => {
  return builder.query({
    query: (data) =>
      `/landing/one/${data.ltid}/all/tender?page=${data.page}&limit=10&status=${data.status}`,
  });
};

// -------------------Get Tender Info--------------------------------------------

export const singleTenderInfo = (builder) => {
  return builder.query({
    query: (tid) => `/landing/one/tender/${tid}/query`,
  });
};

// -------------------Tender Bid--------------------------------------------

export const applyTender = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `/landing/one/tender/${data.tid}/apply/bid`,
      method: "PATCH",
      body: data.bidData,
    }),
  });
};

// -------------------Get Career Info--------------------------------------------

export const careerInfo = (builder) => {
  return builder.query({
    query: (lcid) => `/landing/one/career/${lcid}`,
  });
};

// -------------------Create Vacancy--------------------------------------------

export const createVacancy = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/one/career/${data.lcid}/new/vacancy`,
      method: "POST",
      body: data.vacancyData,
    }),
  });
};

// -------------------Mark as Complete--------------------------------------------

export const markCompleteVacancy = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/one/vacancy/${data.vid}/status`,
      method: "PATCH",
    }),
  });
};

// -------------------Get Application List for one vacancy --------------------------------------------

export const applicationList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/landing/one/vacancy/${data.vid}/all/applications?&search=${data.search}&page=${data.page}&limit=10`,
  });
};

// -------------------schedule Interview --------------------------------------------

export const scheduleInterview = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/one/app/schedule/${data.acid}`,
      method: "PATCH",
      body: data.applyData,
    }),
  });
};

export const deleteVacancy = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/one/vacancy/${data.vid}/destroy`,
      method: "DELETE",
    }),
  });
};

// ----------------------------------Tender-----------------------------------------

// -------------------Activate Tender by Institute Admin--------------------------------------------
export const activateTender = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/ins/${id}/activate/tender`,
      method: "POST",
      body: data.passegeData,
    }),
  });
};

// -------------------Get Tender Info--------------------------------------------

export const tenderInfo = (builder) => {
  return builder.query({
    query: (ltid) => `/landing/one/landing/tender/${ltid}`,
  });
};

// -------------------Create Tender--------------------------------------------

export const createTender = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/one/${data.ltid}/new/tender`,
      method: "POST",
      body: data.tenderData,
    }),
  });
};

// -------------------Mark as Complete--------------------------------------------

export const markClosedTender = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/one/tender/${data.tid}/status`,
      method: "PATCH",
    }),
  });
};

// -------------------Get Bider List for one vacancy --------------------------------------------

export const biderList = (builder) => {
  return builder.query({
    query: (data) =>
      `${postUrl}/landing/one/tender/${data.tid}/all/bidder?&page=${data.page}&limit=10`,
  });
};

// -------------------Place Bid Order --------------------------------------------

export const placeBidOrder = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/one/tender/${data.tid}/bid/offer/${data.bid}`,
      method: "PATCH",
      body: data.offerData,
    }),
  });
};

export const deleteTender = (builder) => {
  return builder.mutation({
    query: (data) => ({
      url: `${postUrl}/landing/one/tender/${data.tid}/destroy`,
      method: "DELETE",
    }),
  });
};
