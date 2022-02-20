import { EVT_TOGGLE_SIDE_NAV, EVT_UPDATE_AUTH_INFO } from "./common.actions.types";

export const setAuthInfo = () => ({
  type: EVT_UPDATE_AUTH_INFO
})

export const toggleSideNav = () => ({
  type: EVT_TOGGLE_SIDE_NAV,
});
