import {
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
} from "../services/event/eventApi";

export const useAssignEventManager = () => {
  const [assignEventManager] = useActivateEventDeptMutation();
  return [assignEventManager];
};

export const useGeteventDeptDetail = (args) => {
  const { data: getEventDeptDetail, refetch: getEventDeptDetailRefetch } =
    useEventDeptInfoQuery(args?.eid, { skip: args?.skip });
  return { getEventDeptDetail, getEventDeptDetailRefetch };
};

export const useGetEventlist = (args) => {
  const { data: getEventlist, refetch: getEventListRefetch } =
    useAlleventListQuery(args.data, { skip: args?.skip });
  return { getEventlist, getEventListRefetch };
};

export const useGetSeminarlist = (args) => {
  const { data: getSeminarlist, refetch: getSeminarListRefetch } =
    useAllSeminarListQuery(args.data, { skip: args?.skip });
  return { getSeminarlist, getSeminarListRefetch };
};

export const useGetOneDeptEventlist = (args) => {
  const { data: getOneDeptEventlist, refetch: getOneDeptEventListRefetch } =
    useOneDeptEventListQuery(args.data, { skip: args?.skip });
  return { getOneDeptEventlist, getOneDeptEventListRefetch };
};

export const useGetOneDeptSeminarlist = (args) => {
  const { data: getOneDeptSeminarlist, refetch: getOneDeptSeminarListRefetch } =
    useOneDeptSeminarListQuery(args.data, { skip: args?.skip });
  return { getOneDeptSeminarlist, getOneDeptSeminarListRefetch };
};

export const useGetOneEventDetail = (args) => {
  const { data: getOneEventDetail, refetch: getOneEventDetailRefetch } =
    useSingleEventInfoQuery(args?.evid, { skip: args?.skip });
  return { getOneEventDetail, getOneEventDetailRefetch };
};

export const useGetOneSeminarDetail = (args) => {
  const { data: getOneSeminarDetail, refetch: getOneSeminarDetailRefetch } =
    useSingleSeminarInfoQuery(args?.smid, { skip: args?.skip });
  return { getOneSeminarDetail, getOneSeminarDetailRefetch };
};

export const useCreateEvent = () => {
  const [createNewEvent] = useCreateNewEventMutation();
  return [createNewEvent];
};

export const useCreateSeminar = () => {
  const [createNewSeminar] = useCreateNewSeminarMutation();
  return [createNewSeminar];
};

export const useEventDelete = () => {
  const [eventDelete] = useDeleteEventMutation();
  return [eventDelete];
};
export const useSeminarDelete = () => {
  const [seminarDelete] = useDeleteSeminarMutation();
  return [seminarDelete];
};

export const useEventEdit = () => {
  const [eventEdit] = useEditEventMutation();
  return [eventEdit];
};
export const useSeminarEdit = () => {
  const [seminarEdit] = useEditSeminarMutation();
  return [seminarEdit];
};

export const useEventCover = () => {
  const [eventCover] = useEventCoverPhotoFunctionMutation();
  return [eventCover];
};

export const useDepartmentAllElection = (args) => {
  const { data: departmentAllElection, refetch: departmentAllElectionRefetch } =
    useDepartmentAllElectionFunctionQuery(args.data, { skip: args.skip });
  return { departmentAllElection, departmentAllElectionRefetch };
};

export const useParticipativeEvent = (args) => {
  const { data: participativeEvent, refetch: participativeEventRefetch } =
    useParticipateEventListQuery(args.data, { skip: args.skip });
  return { participativeEvent, participativeEventRefetch };
};

export const useDepartmentOneElection = (args) => {
  const { data: departmentOneElection, refetch: departmentOneElectionRefetch } =
    useDepartmentOneElectionQuery(args.id, { skip: args.skip });
  return { departmentOneElection, departmentOneElectionRefetch };
};

export const useDepartmentOneElectionAllCandidate = (args) => {
  const {
    data: departmentOneElectionAllCandidate,
    refetch: departmentOneElectionAllCandidateRefetch,
  } = useDepartmentOneElectionAllCandidateQuery(args.data, { skip: args.skip });
  return {
    departmentOneElectionAllCandidate,
    departmentOneElectionAllCandidateRefetch,
  };
};

export const useParticipateEventDetails = (args) => {
  const {
    data: participativeEventDetails,
    refetch: participativeEventDetailsRefetch,
  } = useParticipateEventDetailsQuery(args.pid, { skip: args?.skip });

  return { participativeEventDetails, participativeEventDetailsRefetch };
};
