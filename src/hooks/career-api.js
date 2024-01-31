import {
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
} from "../services/career/careerApi";

export const useGetCareeDetail = (args) => {
  const { data: getCareerDetail, refetch: getCareerDetailRefetch } =
    useCareerInfoQuery(args?.lcid, { skip: args?.skip });
  return { getCareerDetail, getCareerDetailRefetch };
};

export const useGetVacancylist = (args) => {
  const { data: getVacancylist, refetch: getVacancyListRefetch } =
    useVacancyListQuery(args.data, { skip: args?.skip });
  return { getVacancylist, getVacancyListRefetch };
};

export const useGetVacancyDetail = (args) => {
  const { data: getVacancyDetail, refetch: getVacancyDetailRefetch } =
    useVacancyInfoQuery(args?.vid, { skip: args?.skip });

  return { getVacancyDetail, getVacancyDetailRefetch };
};

export const useFileUpload = () => {
  const [oneFileUpload] = useFileUploadFunctionMutation();
  return [oneFileUpload];
};

export const useFileUploadAndUpdated = () => {
  const [oneFileUploadAndUpdated] = useFileUploadAndUpdatedFunctionMutation();
  return [oneFileUploadAndUpdated];
};

export const useApplyVacancy = () => {
  const [applyVacancy] = useApplyVacancyMutation();
  return [applyVacancy];
};

export const useGetTenderlist = (args) => {
  const { data: getTenderlist, refetch: getTenderListRefetch } =
    useTenderListQuery(args.data, { skip: args?.skip });
  return { getTenderlist, getTenderListRefetch };
};

export const useGetSingleTenderDetail = (args) => {
  const { data: getTenderDetail, refetch: getTenderDetailRefetch } =
    useSingleTenderInfoQuery(args?.tid, { skip: args?.skip });

  return { getTenderDetail, getTenderDetailRefetch };
};

export const useTenderDetail = (args) => {
  const { data: getTenderDetaill, refetch: getTenderDetaillRefetch } =
    useTenderInfoQuery(args?.ltid, { skip: args?.skip });

  return { getTenderDetaill, getTenderDetaillRefetch };
};

export const useApplyTender = () => {
  const [applyTender] = useApplyTenderMutation();
  return [applyTender];
};
