import {
  useHostelDetailQuery,
  useAboutHostelQuery,
  useGetHostelFeeStructureListQuery,
  useOneFeeStructureDetailQuery,
  useGetHostelWardenListQuery,
  useGetHostelHostelitesListQuery,
  useGetAnnouncementListByHostelQuery,
  useGetPendingFeeByHostelQuery,
  useGetHostelRulesQuery,
  useGetHostelUnitListQuery,
  useGetHostelUnitDetailQuery,
  useGetRoomListHostelUnitQuery,
  useGetRoomDetailHostelQuery,
  useGetOngoingApplicationListQuery,
} from "../services/hostel/hostelDynamicApi";

export const useHostelDetail = (args) => {
  const { data: hostelDetail, refetch: hostelDetailRefetch } =
    useHostelDetailQuery(args.hid, { skip: args.skip });
  return { hostelDetail, hostelDetailRefetch };
};

export const useAboutHostel = (args) => {
  const { data: aboutHostel, refetch: aboutHostelRefetch } =
    useAboutHostelQuery(args.hid, { skip: args.skip });
  return { aboutHostel, aboutHostelRefetch };
};

export const useGetHostelFeeStructureList = (args) => {
  const {
    data: getHostelFeeStructureList,
    refetch: getHostelFeeStructureListRefetch,
  } = useGetHostelFeeStructureListQuery(args.data, { skip: args.skip });
  return { getHostelFeeStructureList, getHostelFeeStructureListRefetch };
};
export const useOneFeeStructureDetail = (args) => {
  const { data: oneFeeStructureDetail, refetch: oneFeeStructureDetailRefetch } =
    useOneFeeStructureDetailQuery(args.fsid, { skip: args.skip });
  return { oneFeeStructureDetail, oneFeeStructureDetailRefetch };
};
export const useGetHostelWardenList = (args) => {
  const { data: getHostelWardenList, refetch: getHostelWardenListRefetch } =
    useGetHostelWardenListQuery(args.data, { skip: args.skip });
  return { getHostelWardenList, getHostelWardenListRefetch };
};
export const useGetHostelHostelitesList = (args) => {
  const {
    data: getHostelHostelitesList,
    refetch: getHostelHostelitesListRefetch,
  } = useGetHostelHostelitesListQuery(args.data, { skip: args.skip });
  return { getHostelHostelitesList, getHostelHostelitesListRefetch };
};

export const useGetAnnouncementListByHostel = (args) => {
  const {
    data: getAnnouncementListByHostel,
    refetch: getAnnouncementListByHostelRefetch,
  } = useGetAnnouncementListByHostelQuery(args.data, { skip: args.skip });
  return {
    getAnnouncementListByHostel,
    getAnnouncementListByHostelRefetch,
  };
};

export const useGetHostelRules = (args) => {
  const { data: getHostelRules, refetch: getHostelRulesRefetch } =
    useGetHostelRulesQuery(args.hid, { skip: args.skip });
  return { getHostelRules, getHostelRulesRefetch };
};

export const useGetPendingFeeByHostel = (args) => {
  const { data: getPendingFeeByHostel, refetch: getPendingFeeByHostelRefetch } =
    useGetPendingFeeByHostelQuery(args.data, { skip: args.skip });
  return {
    getPendingFeeByHostel,
    getPendingFeeByHostelRefetch,
  };
};

export const useGetHostelUnitList = (args) => {
  const { data: getHostelUnitList, refetch: getHostelUnitListRefetch } =
    useGetHostelUnitListQuery(args.data, { skip: args.skip });
  return { getHostelUnitList, getHostelUnitListRefetch };
};

export const useGetHostelUnitDetail = (args) => {
  const { data: getHostelUnitDetail, refetch: getHostelUnitDetailRefetch } =
    useGetHostelUnitDetailQuery(args.huid, { skip: args.skip });
  return { getHostelUnitDetail, getHostelUnitDetailRefetch };
};
export const useGetRoomListHostelUnit = (args) => {
  const { data: getRoomListHostelUnit, refetch: getRoomListHostelUnitRefetch } =
    useGetRoomListHostelUnitQuery(args.data, { skip: args.skip });
  return { getRoomListHostelUnit, getRoomListHostelUnitRefetch };
};

export const useGetRoomDetailHostel = (args) => {
  const { data: getRoomDetailHostel, refetch: getRoomDetailHostelRefetch } =
    useGetRoomDetailHostelQuery(args.hrid, { skip: args.skip });
  return { getRoomDetailHostel, getRoomDetailHostelRefetch };
};

export const useGetOngoingApplicationList = (args) => {
  const {
    data: getOngoingApplicationList,
    refetch: getOngoingApplicationListRefetch,
  } = useGetOngoingApplicationListQuery(args.data, { skip: args.skip });
  return {
    getOngoingApplicationList,
    getOngoingApplicationListRefetch,
  };
};

// -------------------------------------------
