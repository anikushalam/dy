import { transportApi } from "./transportApi";

import {
  transportDetailFunction,
  getTransportFeeStructureListFunction,
  getVehicleListFunction,
  getOneVehicleRouteListFunction,
  transportGetSiteInfoFunction,
  // -----------------------------
} from "./transport_query_mutation_function";

export const transportApiDynamic = transportApi.injectEndpoints({
  endpoints: (builder) => ({
    getOneVehicleRouteList: getOneVehicleRouteListFunction(builder),
    transportDetail: transportDetailFunction(builder),
    getTransportFeeStructureList: getTransportFeeStructureListFunction(builder),
    getVehicleList: getVehicleListFunction(builder),
    transportGetSiteInfo: transportGetSiteInfoFunction(builder),

    // ------------------------------------------------
  }),
});

export const {
  useTransportDetailQuery,
  useGetTransportFeeStructureListQuery,
  useGetVehicleListQuery,
  useGetOneVehicleRouteListQuery,
  useTransportGetSiteInfoQuery,
} = transportApiDynamic;
