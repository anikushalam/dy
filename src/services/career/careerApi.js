import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  // deleteMethod,
  //   patchMethod,
  // postMethod,
  // session,
} from "../Config/BaseUrl";

import {
  careerInfo,
  vacancyList,
  vacancyInfo,
  fileUploadFunction,
  fileUploadAndUpdatedFunction,
  applyVacancy,
  tenderList,
  tenderInfo,
  singleTenderInfo,
  applyTender,
} from "./careerApiBuilder";

export const careerApi = createApi({
  reducerPath: "careerApi",
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
    careerInfo: careerInfo(builder),
    vacancyList: vacancyList(builder),
    vacancyInfo: vacancyInfo(builder),
    fileUploadFunction: fileUploadFunction(builder),
    fileUploadAndUpdatedFunction: fileUploadAndUpdatedFunction(builder),
    applyVacancy: applyVacancy(builder),
    tenderList: tenderList(builder),
    tenderInfo: tenderInfo(builder),
    singleTenderInfo: singleTenderInfo(builder),
    applyTender: applyTender(builder),
  }),
});

export const {
  useCareerInfoQuery,
  useVacancyListQuery,
  useVacancyInfoQuery,
  useFileUploadAndUpdatedFunctionMutation,
  useFileUploadFunctionMutation,
  useApplyVacancyMutation,
  useTenderListQuery,
  useTenderInfoQuery,
  useSingleTenderInfoQuery,
  useApplyTenderMutation,
} = careerApi;
