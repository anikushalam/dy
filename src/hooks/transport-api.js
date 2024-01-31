import {
  useTransportDetailQuery,
  useGetTransportFeeStructureListQuery,
  useGetVehicleListQuery,
  useGetOneVehicleRouteListQuery,
  useTransportGetSiteInfoQuery,
} from "../services/transport/transportDynamicApi";

export const useTransportDetail = (args) => {
  const { data: transportDetail, refetch: transportDetailRefetch } =
    useTransportDetailQuery(args.tid, { skip: args.skip });
  return { transportDetail, transportDetailRefetch };
};

export const useGetTransportFeeStructureList = (args) => {
  const {
    data: getTransportFeeStructureList,
    refetch: getTransportFeeStructureListRefetch,
  } = useGetTransportFeeStructureListQuery(args.data, { skip: args.skip });
  return { getTransportFeeStructureList, getTransportFeeStructureListRefetch };
};

export const useGetVehicleList = (args) => {
  const { data: getVehicleList, refetch: getVehicleListRefetch } =
    useGetVehicleListQuery(args.data, { skip: args.skip });
  return { getVehicleList, getVehicleListRefetch };
};

export const useGetOneVehicleRouteList = (args) => {
  const {
    data: getOneVehicleRouteList,
    refetch: getOneVehicleRouteListRefetch,
  } = useGetOneVehicleRouteListQuery(args.data, { skip: args.skip });
  return { getOneVehicleRouteList, getOneVehicleRouteListRefetch };
};

export const useTransportGetSiteInfo = (args) => {
  const { data: transportGetSiteInfo, refetch: transportGetSiteInfoRefetch } =
    useTransportGetSiteInfoQuery(args.tid, { skip: args.skip });
  return { transportGetSiteInfo, transportGetSiteInfoRefetch };
};
