export const instituteMasterFunction = (builder) => {
  return builder.query({
    query: (id) => `/ins/${id}/dash`,
  });
};

export const admissionOngoingListFunction = (builder) => {
  return builder.query({
    query: (ad) =>
      `/admission/${ad.aid}/all/ongoing/application?page=${ad.page}&limit=${ad.limit}`,
  });
};

export const getAdmissionDetailsFunction = (builder) => {
  return builder.query({
    query: (data) => `/admission/${data.aid}/dashboard/query?sid=${data.sid}`,
  });
};
export const websiteInfoGetByInstituteFunction = (builder) => {
  return builder.query({
    query: (id) => `/landing/${id}/one/web/profile`,
  });
};

export const getNoticeInstituteFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/ins/${data.id}/announcemnt?page=${data.page}&limit=${data.limit}`,
  });
};

export const oneNoticeDetailFunction = (builder) => {
  return builder.query({
    query: (annId) => `/ins/one/announcement/${annId}`,
  });
};

export const getDocumentByAdmissionFuction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/document/array?page=${data.page}&limit=${data.limit}`,
  });
};

export const admissionGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (aid) => `/site/info/admission/${aid}`,
  });
};

export const libraryGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (lid) => `/site/info/library/${lid}`,
  });
};

export const departmentGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (did) => `/site/info/department/${did}`,
  });
};

export const allDepartmentFunction = (builder) => {
  return builder.query({
    query: (id) => `/ins/${id}/department`,
  });
};

export const departmentAllStaffFunction = (builder) => {
  return builder.query({
    query: (did) => `/ins/department/${did}/staff-array`,
  });
};
export const insAllStaffFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/ins/${data.insid}/approve-staff/list?page=${data.page}&limit=${data.limit}&date=${data.date}`,
  });
};
export const getAllBookByLibraryFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/library/site/books/${data.lid}?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};
export const oneBookDetailFunction = (builder) => {
  return builder.query({
    query: (bid) => `/library/book/detail/${bid}`,
  });
};

export const getAllFeesStructureFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/finance/depart/${data.did}/all/fee/structure?page=${data.page}&limit=${
        data.limit
      }&filter_by=${data.filterBy}&batch_by=${data.batch_by ?? ""}`,
  });
};

export const oneFeeStructureDetailFunction = (builder) => {
  return builder.query({
    query: (fsid) => `/finance/one/${fsid}/structure`,
  });
};

export const getHostInstituteFunction = (builder) => {
  return builder.query({
    query: (filter_by) => `/admin/sub/domain/by/host?filter_by=${filter_by}`,
  });
};

export const getAllEnquiryListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/inquiry?status=${data.status}&page=${data.page}&limit=${data.limit}`,
  });
};

export const getScholarshipListAdmissionFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `/admission/${data.aid}/all/scholarship?page=${data.page}&limit=${data.limit}&status=${data.status}`,
  });
};

export const oneApplication = (builder) => {
  return builder.query({
    query: (one) => `/admission/${one}/application/query`,
  });
};

export const getAcademicModuleFunction = (builder) => {
  return builder.query({
    query: (aid) => `/landing/${aid}/academic/section/query`,
  });
};
export const getNssModuleFunction = (builder) => {
  return builder.query({
    query: (nid) => `/landing/${nid}/nss/query`,
  });
};

export const getFacilitiesModuleFunction = (builder) => {
  return builder.query({
    query: (fid) => `landing/${fid}/facilities/query`,
  });
};
