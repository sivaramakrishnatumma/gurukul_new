import { IFieldConfig } from "../constants/types";

export const checkOutFormConfig: IFieldConfig[] = [
  {
    field: "itemId",
    title: "Item",
    type: "dropdown",
    required: true,
    dataSource: "/Item",
    valueField: "id",
    displayField: "itemNotes",
  },
  {
    field: "borrowerId",
    title: "Borrower",
    type: "dropdown",
    required: true,
    dataSource: "/Borrower",
    valueField: "id",
    displayField: "borrower_notes",
  },
  {
    field: "itemBorrowerStatusCode",
    title: "Item Borrower Status",
    type: "dropdown",
    required: true,
    dataSource: "/ItemBorrowerStatus",
    valueField: "itemBorrowerStatusCode",
    displayField: "itemBorrowerStatusName",
  },
  {
    field: "borrowedDate",
    title: "Borrowed Date",
    type: "date",
    required: true,
  },
  {
    field: "dateOfReturn",
    title: "Date Of Return",
    type: "date",
    required: true,
  },
  {
    field: "notes",
    title: "Notes",
    type: "string",
    required: true,
  },
  {
    field: "isactive",
    title: "Active",
    type: "checkbox",
    required: true,
    defaultValue: true,
  },
];
