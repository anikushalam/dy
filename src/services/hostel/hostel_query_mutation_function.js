const hostelBaseUrl = "/hostel";
const baseUrl = "/api/v1";

export const hostelDetailFunction = (builder) => {
  return builder.query({
    query: (hid) => `${hostelBaseUrl}/${hid}/dashboard/query`,
  });
};

export const hostelAboutFunction = (builder) => {
  return builder.query({
    query: (hid) => `/site/info/hostel/${hid}`,
  });
};

export const getHostelFeeStructureListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/fee/structure?page=${data.page}&limit=${data.limit}`,
  });
};

export const oneFeeStructureDetailFunction = (builder) => {
  return builder.query({
    query: (fsid) => `/finance/one/${fsid}/structure`,
  });
};

export const getHostelWardenListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/wardens?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getHostelHostelitesListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/hostelities?page=${data.page}&limit=${data.limit}&search=${data.search}&filter_by=${data.filter_by}`,
  });
};

export const getAnnouncementListByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/announcement?page=${data.page}&limit=${data.limit}`,
  });
};

export const getHostelRulesFunction = (builder) => {
  return builder.query({
    query: (hid) => `${hostelBaseUrl}/${hid}/rules/query`,
  });
};

export const getPendingFeeByHostelFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/remaining/array?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getHostelUnitListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/hostel/unit?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getHostelUnitDetailFunction = (builder) => {
  return builder.query({
    query: (huid) => `${hostelBaseUrl}/${huid}/one/hostel/unit/query`,
  });
};

export const getRoomListHostelUnitFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.huid}/one/hostel/unit/all/room?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getRoomDetailHostelFunction = (builder) => {
  return builder.query({
    query: (hrid) => `${hostelBaseUrl}/${hrid}/one/hostel/room/query`,
  });
};

export const getOngoingApplicationListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${hostelBaseUrl}/${data.hid}/all/ongoing/application?page=${data.page}&limit=${data.limit}`,
  });
};

// --------------------------------------------------
