import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  // session,
} from "../Config/BaseUrl";

import {
  activateSportsAndArts,
  studentApprovedArray,
  fetchSportsArts,
  createSportsClass,
  sportsArtsProfilePhotoFunction,
  sportsArtsCoverPhotoFunction,
  createSportsEvent,
  sportsEventDetails,
  sportsClassDetails,
  addStudentInSportClass,
  createSportsTeam,
  createNewMatchIntra,
  createNewMatchInter,
  AllMatchList,
  OngoingEventList,
  CompletedEventList,
  rmoveStudentInSportClass,
  MatchDetails,
  editIntraMatchResultIndividual,
  AllEventClassList,
  allClassStudentList,
  allClassTeamList,
  editInterMatchResultIndividual,
  studentMatchList,
  studentExtraSkillData,
  sportClassStudentList,
  sportClassTeamList,
  editIntraMatchResultTeam,
  editInterMatchResultTeam,
  editInterMatchResultFreeStyle,
  editIntraMatchResultFreeStyle,
  sportsArtsClassProfilePhotoFunction,
  sportsClassCoverPhoto,
  sportClassListStudent,
  sportClassTeamStudent,
  sportsTeamDetailsStudent,
} from "./sportsAndArtsApiBuilder";

export const sportsAndArtsApi = createApi({
  reducerPath: "sportsAndArtsApi",
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
    activateSportsAndArts: activateSportsAndArts(builder),
    fetchSportsArts: fetchSportsArts(builder),
    createSportsClass: createSportsClass(builder),
    sportsArtsProfilePhotoFunction: sportsArtsProfilePhotoFunction(builder),
    sportsArtsCoverPhotoFunction: sportsArtsCoverPhotoFunction(builder),
    createSportsEvent: createSportsEvent(builder),
    sportsEventDetails: sportsEventDetails(builder),
    sportsClassDetails: sportsClassDetails(builder),
    studentApprovedArray: studentApprovedArray(builder),
    addStudentInSportClass: addStudentInSportClass(builder),
    createSportsTeam: createSportsTeam(builder),
    createNewMatchIntra: createNewMatchIntra(builder),
    createNewMatchInter: createNewMatchInter(builder),
    AllMatchList: AllMatchList(builder),
    OngoingEventList: OngoingEventList(builder),
    CompletedEventList: CompletedEventList(builder),
    rmoveStudentInSportClass: rmoveStudentInSportClass(builder),
    MatchDetails: MatchDetails(builder),
    editIntraMatchResultIndividual: editIntraMatchResultIndividual(builder),
    AllEventClassList: AllEventClassList(builder),
    allClassStudentList: allClassStudentList(builder),
    allClassTeamList: allClassTeamList(builder),
    editInterMatchResultIndividual: editInterMatchResultIndividual(builder),
    studentMatchList: studentMatchList(builder),
    studentExtraSkillData: studentExtraSkillData(builder),
    sportClassStudentList: sportClassStudentList(builder),
    sportClassTeamList: sportClassTeamList(builder),
    editIntraMatchResultTeam: editIntraMatchResultTeam(builder),
    editInterMatchResultTeam: editInterMatchResultTeam(builder),
    editInterMatchResultFreeStyle: editInterMatchResultFreeStyle(builder),
    editIntraMatchResultFreeStyle: editIntraMatchResultFreeStyle(builder),
    sportsArtsClassProfilePhotoFunction:
      sportsArtsClassProfilePhotoFunction(builder),
    sportsClassCoverPhoto: sportsClassCoverPhoto(builder),
    sportClassListStudent: sportClassListStudent(builder),
    sportClassTeamStudent: sportClassTeamStudent(builder),
    sportsTeamDetailsStudent: sportsTeamDetailsStudent(builder),
  }),
});

export const {
  useActivateSportsAndArtsMutation,
  useFetchSportsArtsQuery,
  useCreateSportsClassMutation,
  useSportsArtsProfilePhotoFunctionMutation,
  useSportsArtsCoverPhotoFunctionMutation,
  useCreateSportsEventMutation,
  useSportsEventDetailsQuery,
  useSportsClassDetailsQuery,
  useStudentApprovedArrayQuery,
  useAddStudentInSportClassMutation,
  useCreateSportsTeamMutation,
  useCreateNewMatchIntraMutation,
  useCreateNewMatchInterMutation,
  useAllMatchListQuery,
  useOngoingEventListQuery,
  useCompletedEventListQuery,
  useRmoveStudentInSportClassMutation,
  useMatchDetailsQuery,
  useEditIntraMatchResultIndividualMutation,
  useAllEventClassListQuery,
  useAllClassStudentListQuery,
  useAllClassTeamListQuery,
  useEditInterMatchResultIndividualMutation,
  useStudentExtraSkillDataQuery,
  useStudentMatchListQuery,
  useSportClassStudentListQuery,
  useSportClassTeamListQuery,
  useEditInterMatchResultTeamMutation,
  useEditIntraMatchResultTeamMutation,
  useEditInterMatchResultFreeStyleMutation,
  useEditIntraMatchResultFreeStyleMutation,
  useSportsArtsClassProfilePhotoFunctionMutation,
  useSportsClassCoverPhotoMutation,
  useSportClassListStudentQuery,
  useSportClassTeamStudentQuery,
  useSportsTeamDetailsStudentQuery,
} = sportsAndArtsApi;
