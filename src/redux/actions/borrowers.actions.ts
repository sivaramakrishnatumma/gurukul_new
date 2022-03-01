import {
    EVT_ADD_BORROWER,
    EVT_GET_BORROWERS_LIST,
    EVT_UPDATE_BORROWER,
  } from "./borrowers.actions.types";
  
  const getListAction = () => ({
    type: EVT_GET_BORROWERS_LIST,
  });
  
  const addAction = (data: any) => ({
    type: EVT_ADD_BORROWER,
    value: data,
  });
  
  const updateAction = (data: any, id: string) => ({
    type: EVT_UPDATE_BORROWER,
    value: { data, id },
  });
  
  export const BorrowersActions = {
    getListAction,
    addAction,
    updateAction,
  };
  