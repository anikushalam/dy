import { hostelApi } from "./hostelApi";
import {
  hostelDetailFunction,
  hostelAboutFunction,
  getHostelFeeStructureListFunction,
  oneFeeStructureDetailFunction,
  getHostelWardenListFunction,
  getHostelHostelitesListFunction,
  getAnnouncementListByHostelFunction,
  getHostelRulesFunction,
  getPendingFeeByHostelFunction,
  getHostelUnitListFunction,
  getHostelUnitDetailFunction,
  getRoomListHostelUnitFunction,
  getRoomDetailHostelFunction,
  getOngoingApplicationListFunction,
  // -----------------------------
} from "./hostel_query_mutation_function";

export const hostelApiDynamic = hostelApi.injectEndpoints({
  endpoints: (builder) => ({
    hostelDetail: hostelDetailFunction(builder),
    aboutHostel: hostelAboutFunction(builder),
    getHostelFeeStructureList: getHostelFeeStructureListFunction(builder),
    oneFeeStructureDetail: oneFeeStructureDetailFunction(builder),
    getHostelHostelitesList: getHostelHostelitesListFunction(builder),
    getAnnouncementListByHostel: getAnnouncementListByHostelFunction(builder),
    getHostelRules: getHostelRulesFunction(builder),
    getPendingFeeByHostel: getPendingFeeByHostelFunction(builder),
    getHostelUnitList: getHostelUnitListFunction(builder),
    getHostelUnitDetail: getHostelUnitDetailFunction(builder),
    getRoomListHostelUnit: getRoomListHostelUnitFunction(builder),
    getRoomDetailHostel: getRoomDetailHostelFunction(builder),
    getHostelWardenList: getHostelWardenListFunction(builder),
    getOngoingApplicationList: getOngoingApplicationListFunction(builder),
    // ------------------------------------------------
  }),
});

export const {
  useHostelDetailQuery,
  useAboutHostelQuery,
  useGetHostelFeeStructureListQuery,
  useOneFeeStructureDetailQuery,
  useGetHostelWardenListQuery,
  useGetHostelHostelitesListQuery,
  useGetAnnouncementListByHostelQuery,
  useGetHostelRulesQuery,
  useGetPendingFeeByHostelQuery,
  useGetHostelUnitListQuery,
  useGetHostelUnitDetailQuery,
  useGetRoomListHostelUnitQuery,
  useGetRoomDetailHostelQuery,
  useGetOngoingApplicationListQuery,
  // -------------------------
} = hostelApiDynamic;
