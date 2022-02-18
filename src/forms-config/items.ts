import { IFieldConfig } from "../constants/types";

export const itemColumnConfig: IFieldConfig[] = [
  {
    field: "biblioItemId",
    title: "Biblio Item",
    type: "dropdown",
    required: true,
    dataSource: "/BiblioItem",
    valueField: "id",
    displayField: "title",
  },
  {
    field: "barCode",
    title: "Bar Code",
    type: "string",
    required: true,
  },
  {
    field: "price",
    title: "Price",
    type: "number",
    required: true,
  },
  {
    field: "replacementPrice",
    title: "Replacement Price",
    type: "number",
    required: true,
  },
  {
    field: "replacementPriceDate",
    title: "Replacement Price Date",
    type: "string",
    required: true,
  },
  {
    field: "dateLastBorrowed",
    title: "Date Last Borrowed",
    type: "string",
    required: true,
  },
  {
    field: "notForLoan",
    title: "Not For Loan",
    type: "checkbox",
    required: true,
  },
  {
    field: "itemStatusCode",
    title: "Item Status Code",
    type: "string",
    required: true,
  },

  {
    field: "itemStatusReportedDate",
    title: "Item Status Reported Date",
    type: "string",
    required: true,
  },
  {
    field: "itemNotes",
    title: "Item Notes",
    type: "string",
    required: true,
  },
  {
    field: "itemNotesNonpublic",
    title: "Item Notes Nonpublic",
    type: "string",
    required: true,
  },
  {
    field: "homeBranchCode",
    title: "Home Branch Code",
    type: "string",
    required: true,
  },
  {
    field: "branchCode",
    title: "Branch Code",
    type: "string",
    required: true,
  },
  {
    field: "onloan",
    title: "Onloan",
    type: "string",
    required: true,
  },
  {
    field: "imageurl",
    hidden: true,
    defaultValue: "string",
  },

  {
    field: "isactive",
    title: "Active",
    type: "checkbox",
    required: true,
    defaultValue: true,
  },
];
