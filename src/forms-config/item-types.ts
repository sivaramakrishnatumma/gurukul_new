import { IFieldConfig } from "../constants/types";

export const itemTypeColumnConfig: IFieldConfig[] = [
  {
    field: "itemTypeCode",
    title: "Item Type Code",
    type: "string",
    required: true,
  },
  {
    field: "name",
    title: "Name",
    type: "string",
    required: true,
  },
  {
    field: "parentItemTypeId",
    hidden: true,
    defaultValue: "0",
  },
  {
    field: "description",
    title: "Description",
    type: "string",
    required: true,
  },
  {
    field: "searchKeywords",
    hidden: true,
    defaultValue: "string",
  },
  {
    field: "rentalFee",
    title: "Rental Fee",
    type: "number",
    required: true,
  },
  {
    field: "rentalCode",
    title: "Rental Code",
    type: "dropdown",
    required: true,
    dataSource: "/RentalType",
    valueField: "rentalCode",
    displayField: "name",
  },
  {
    field: "defaultReplaceCost",
    hidden: true,
    type: "number",
    defaultValue: 0,
  },
  {
    field: "processFee",
    title: "Process Fee",
    type: "number",
    required: true,
  },
  {
    field: "maximumFineFee",
    title: "Maximum Fine Fee",
    type: "number",
    required: true,
  },
  {
    field: "notForLoan",
    title: "Not For Loan",
    type: "checkbox",
    required: true,
  },
  {
    field: "imageurl",
    hidden: true,
    defaultValue: "string",
  },
  {
    field: "checkinMsg",
    hidden: true,
    defaultValue: "string",
  },
  {
    field: "isSearchable",
    title: "Searchable",
    type: "checkbox",
    required: true,
    defaultValue: true,
  },
  {
    field: "isactive",
    title: "Active",
    type: "checkbox",
    required: true,
    defaultValue: true,
  },
];
