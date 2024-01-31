const transportBaseUrl = "/transport";
const baseUrl = "/api/v1";

export const transportDetailFunction = (builder) => {
  return builder.query({
    query: (tid) => `${transportBaseUrl}/${tid}/dashboard`,
  });
};

export const getTransportFeeStructureListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/all/fee/structure?page=${
        data.page
      }&limit=${data.limit}&filter_by=${data.filter_by ?? ""}&master_by=${
        data.master_by ?? ""
      }&vehicle_by=${data?.vehicle_by ?? ""}`,
  });
};
export const getVehicleListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/${data.tid}/all/vehicles?page=${data.page}&limit=${data.limit}&search=${data.search}`,
  });
};

export const getOneVehicleRouteListFunction = (builder) => {
  return builder.query({
    query: (data) =>
      `${transportBaseUrl}/one/vehicle/${data.vid}/route?search=${data.search}`,
  });
};
export const transportGetSiteInfoFunction = (builder) => {
  return builder.query({
    query: (tid) => `/site/info/transport/${tid}`,
  });
};
