import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  // session,
} from "../Config/BaseUrl";

import {
  eventDeptInfo,
  alleventList,
  allSeminarList,
  oneDeptEventList,
  oneDeptSeminarList,
  singleEventInfo,
  singleSeminarInfo,
  createNewEvent,
  createNewSeminar,
  deleteEvent,
  deleteSeminar,
  editEvent,
  editSeminar,
  activateEventDept,
  eventCoverPhotoFunction,
  participateEventList,
  departmentAllElectionFunction,
  departmentOneElectionFunction,
  departmentOneElectionAllCandidateFunction,
  participateEventDetails,
} from "./eventApiBuilder";

export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    // prepareHeaders: (headers) => {
    //   if (session()) {
    //     headers.set("authorization", session());
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    activateEventDept: activateEventDept(builder),
    eventDeptInfo: eventDeptInfo(builder),
    alleventList: alleventList(builder),
    allSeminarList: allSeminarList(builder),
    oneDeptEventList: oneDeptEventList(builder),
    oneDeptSeminarList: oneDeptSeminarList(builder),
    singleEventInfo: singleEventInfo(builder),
    singleSeminarInfo: singleSeminarInfo(builder),
    createNewEvent: createNewEvent(builder),
    createNewSeminar: createNewSeminar(builder),
    deleteEvent: deleteEvent(builder),
    deleteSeminar: deleteSeminar(builder),
    editEvent: editEvent(builder),
    editSeminar: editSeminar(builder),
    eventCoverPhotoFunction: eventCoverPhotoFunction(builder),
    departmentAllElectionFunction: departmentAllElectionFunction(builder),
    participateEventList: participateEventList(builder),
    departmentOneElection: departmentOneElectionFunction(builder),
    departmentOneElectionAllCandidate:
      departmentOneElectionAllCandidateFunction(builder),
    participateEventDetails: participateEventDetails(builder),
  }),
});

export const {
  useActivateEventDeptMutation,
  useEventDeptInfoQuery,
  useAlleventListQuery,
  useAllSeminarListQuery,
  useOneDeptEventListQuery,
  useOneDeptSeminarListQuery,
  useSingleEventInfoQuery,
  useSingleSeminarInfoQuery,
  useCreateNewEventMutation,
  useCreateNewSeminarMutation,
  useDeleteEventMutation,
  useDeleteSeminarMutation,
  useEditEventMutation,
  useEditSeminarMutation,
  useEventCoverPhotoFunctionMutation,
  useDepartmentAllElectionFunctionQuery,
  useParticipateEventListQuery,
  useDepartmentOneElectionQuery,
  useDepartmentOneElectionAllCandidateQuery,
  useParticipateEventDetailsQuery,
} = eventApi;
