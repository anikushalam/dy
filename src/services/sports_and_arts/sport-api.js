import {
  useFetchSportsArtsQuery,
  useOngoingEventListQuery,
} from "./sportsAndArtsApi";

export const useGetSportDetail = (args) => {
  const { data: getSportsDetail, refetch: getSportsDetailRefetch } =
    useFetchSportsArtsQuery(args?.sportId, { skip: args.skip });
  return { getSportsDetail, getSportsDetailRefetch };
};

export const useSportEvents = (args) => {
  const { data: ongoingSportEvents, refetch: ongoingSportEventsRefetch } =
    useOngoingEventListQuery(args.data, { skip: args.skip });
  return { ongoingSportEvents, ongoingSportEventsRefetch };
};
