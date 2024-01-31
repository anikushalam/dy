import { createSlice } from "@reduxjs/toolkit";

const domainCom = createSlice({
  name: "domainCom",
  initialState: {
    insName: "",
    name: "",
    // id: "",
    // id: "651ba22de39dbdf817dd520c",
    id: "651b86bbc78e6754d54f3509",

    status: false,
  },
  reducers: {
    getLinkup(state, action) {
      state.insName = action.payload.insName;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.status =
        action.payload.status === "Allotted and Linked" ? true : false;
    },
  },
});

export const domainComAction = domainCom.actions;

export default domainCom.reducer;
