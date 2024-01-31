import {
  useAdmissionOngoingListQuery,
  useInstituteMasterQuery,
  useGetAdmissionDetailsQuery,
  useWebsiteInfoGetByInstituteQuery,
  useGetNoticeInstituteQuery,
  useOneNoticeDetailQuery,
  useGetDocumentByAdmissionQuery,
  useAdmissionGetSiteInfoQuery,
  useLibraryGetSiteInfoQuery,
  useDepartmentGetSiteInfoQuery,
  useAllDepartmentQuery,
  useDepartmentAllStaffQuery,
  useGetAllBookByLibraryQuery,
  useOneBookDetailQuery,
  useGetAllFeesStructureQuery,
  useOneFeeStructureDetailQuery,
  useGetHostInstituteQuery,
  useGetAllEnquiryListQuery,
  useGetScholarshipListAdmissionQuery,
  useGetOneApplicationQuery,
  useGetAcademicModuleInfoQuery,
  useGetNssModuleInfoQuery,
  useGetFacilitiesInfoQuery,
  useInsAllStaffFunctionQuery,
} from "../services/About/AboutApiDynamic";

export const useInstituteMaster = (args) => {
  const { data: instituteMaster, refetch: instituteMasterRefetch } =
    useInstituteMasterQuery(args.id, { skip: args.skip });
  return {
    instituteMaster,
    instituteMasterRefetch,
  };
};
export const useAdmissionOngoingList = (args) => {
  const { data: admissionOngoingList, refetch: admissionOngoingListRefetch } =
    useAdmissionOngoingListQuery(args.data, { skip: args.skip });
  return {
    admissionOngoingList,
    admissionOngoingListRefetch,
  };
};

export const useGetAdmissionDetails = (args) => {
  const { data: getAdmissionDetails, refetch: getAdmissionDetailsRefetch } =
    useGetAdmissionDetailsQuery(args.data, { skip: args.skip });
  return {
    getAdmissionDetails,
    getAdmissionDetailsRefetch,
  };
};

export const useWebsiteInfoGetByInstitute = (args) => {
  const {
    data: getwebsiteInfoGetByInstitute,
    refetch: getwebsiteInfoGetByInstituteRefetch,
  } = useWebsiteInfoGetByInstituteQuery(args.id, { skip: args.skip });
  return {
    getwebsiteInfoGetByInstitute,
    getwebsiteInfoGetByInstituteRefetch,
  };
};

export const useGetNoticeInstitute = (args) => {
  const { data: getNoticeInstitute, refetch: getNoticeInstituteRefetch } =
    useGetNoticeInstituteQuery(args.data, { skip: args.skip });
  return {
    getNoticeInstitute,
    getNoticeInstituteRefetch,
  };
};
export const useOneNoticeDetail = (args) => {
  const { data: oneNoticeDetail, refetch: oneNoticeDetailRefetch } =
    useOneNoticeDetailQuery(args.annId, { skip: args.skip });
  return {
    oneNoticeDetail,
    oneNoticeDetailRefetch,
  };
};

export const useGetDocumentByAdmission = (args) => {
  const {
    data: getDocumentByAdmission,
    refetch: getDocumentByAdmissionRefetch,
  } = useGetDocumentByAdmissionQuery(args.data, { skip: args.skip });
  return { getDocumentByAdmission, getDocumentByAdmissionRefetch };
};

export const useDepartmentGetSiteInfo = (args) => {
  const { data: departmentGetSiteInfo, refetch: departmentGetSiteInfoRefetch } =
    useDepartmentGetSiteInfoQuery(args.did, { skip: args.skip });
  return { departmentGetSiteInfo, departmentGetSiteInfoRefetch };
};
export const useAdmissionGetSiteInfo = (args) => {
  const { data: admissionGetSiteInfo, refetch: admissionGetSiteInfoRefetch } =
    useAdmissionGetSiteInfoQuery(args.aid, { skip: args.skip });
  return { admissionGetSiteInfo, admissionGetSiteInfoRefetch };
};

export const useLibraryGetSiteInfo = (args) => {
  const { data: libraryGetSiteInfo, refetch: libraryGetSiteInfoRefetch } =
    useLibraryGetSiteInfoQuery(args.lid, { skip: args?.skip });
  return { libraryGetSiteInfo, libraryGetSiteInfoRefetch };
};

export const useAllDepartment = (args) => {
  const { data, refetch } = useAllDepartmentQuery(args.id, { skip: args.skip });
  return { allDepartment: data, allDepartmentRefetch: refetch };
};

export const useDepartmentAllStaff = (args) => {
  const { data, refetch } = useDepartmentAllStaffQuery(args.did, {
    skip: args.skip,
  });
  return { departmentAllStaff: data, departmentAllStaffRefetch: refetch };
};

export const useGetAllBookByLibrary = (args) => {
  const { data, refetch } = useGetAllBookByLibraryQuery(args.data, {
    skip: args.skip,
  });
  return { getAllBookByLibrary: data, getAllBookByLibraryRefetch: refetch };
};

export const useOneBookDetail = (args) => {
  const { data, refetch } = useOneBookDetailQuery(args.bid, {
    skip: args.skip,
  });
  return { oneBookDetail: data, oneBookDetailRefetch: refetch };
};

export const useGetAllFeesStructure = (args) => {
  const { data: getAllFeesStructure, refetch: getAllFeesStructureRefetch } =
    useGetAllFeesStructureQuery(args.data, { skip: args.skip });
  return { getAllFeesStructure, getAllFeesStructureRefetch };
};

export const useOneFeeStructureDetail = (args) => {
  const { data: oneFeeStructureDetail, refetch: oneFeeStructureDetailRefetch } =
    useOneFeeStructureDetailQuery(args.fsid, { skip: args.skip });
  return { oneFeeStructureDetail, oneFeeStructureDetailRefetch };
};

export const useGetHostInstitute = (args) => {
  const { data: getHostInstitute, refetch: getHostInstituteRefetch } =
    useGetHostInstituteQuery(args.filter_by, { skip: args.skip });
  return { getHostInstitute, getHostInstituteRefetch };
};

export const useGetAllEnquiryList = (args) => {
  const { data: getAllEnquiryList, refetch: getAllEnquiryListRefetch } =
    useGetAllEnquiryListQuery(args.data, { skip: args.skip });
  return { getAllEnquiryList, getAllEnquiryListRefetch };
};

export const useGetScholarshipListAdmission = (args) => {
  const {
    data: getScholarshipListAdmission,
    refetch: getScholarshipListAdmissionRefetch,
  } = useGetScholarshipListAdmissionQuery(args.data, { skip: args.skip });
  return { getScholarshipListAdmission, getScholarshipListAdmissionRefetch };
};

export const useOneApplicationDetail = (args) => {
  const { data: oneApplicationDetail, refetch: oneApplicationDetailRefetch } =
    useGetOneApplicationQuery(args.apid, { skip: args.skip });
  return { oneApplicationDetail, oneApplicationDetailRefetch };
};

export const useGetAcademicSiteInfo = (args) => {
  const { data: getAcademicSiteInfo, refetch: getAcademicSiteInfoRefetch } =
    useGetAcademicModuleInfoQuery(args.aid, { skip: args.skip });
  return { getAcademicSiteInfo, getAcademicSiteInfoRefetch };
};

export const useGetNssSiteInfo = (args) => {
  const { data: getNssSiteInfo, refetch: getNssSiteInfoRefetch } =
    useGetNssModuleInfoQuery(args.aid, { skip: args.skip });
  return { getNssSiteInfo, getNssSiteInfoRefetch };
};

export const useGetFacilitiesSiteInfo = (args) => {
  const { data: getFacilitiesSiteInfo, refetch: getFacilitiesSiteInfoRefetch } =
    useGetFacilitiesInfoQuery(args.aid, { skip: args.skip });
  return { getFacilitiesSiteInfo, getFacilitiesSiteInfoRefetch };
};

export const useInsAllStaff = (args) => {
  const { data, refetch } = useInsAllStaffFunctionQuery(args.data, {
    skip: args.skip,
  });
  return { insAllStaff: data, insAllStaffRefetch: refetch };
};
