import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  // session,
} from "../Config/BaseUrl";

import {
  activateAlumni,
  alumniInfo,
  alumniReg,
  alumniRegList,
  giveCertificate,
  ProminentAlumniList,
  addStory,
  feedbackList,
  addFeedbackPoll,
  addVotePoll,
  allDepartmentFunction,
  addInfoMarkVotePoll,
} from "./alumniApibuilder";

export const alumniApi = createApi({
  reducerPath: "alumniApi",
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
    activateAlumni: activateAlumni(builder),
    alumniInfo: alumniInfo(builder),
    alumniReg: alumniReg(builder),
    alumniRegList: alumniRegList(builder),
    giveCertificate: giveCertificate(builder),
    ProminentAlumniList: ProminentAlumniList(builder),
    addStory: addStory(builder),
    feedbackList: feedbackList(builder),
    addFeedbackPoll: addFeedbackPoll(builder),
    addVotePoll: addVotePoll(builder),
    allDepartmentFunction: allDepartmentFunction(builder),
    addInfoMarkVotePoll: addInfoMarkVotePoll(builder),
  }),
});

export const {
  useActivateAlumniMutation,
  useAlumniInfoQuery,
  useAlumniRegMutation,
  useAlumniRegListQuery,
  useGiveCertificateMutation,
  useProminentAlumniListQuery,
  useAddStoryMutation,
  useFeedbackListQuery,
  useAddFeedbackPollMutation,
  useAddVotePollMutation,
  useAllDepartmentFunctionQuery,
  useAddInfoMarkVotePollMutation,
} = alumniApi;
