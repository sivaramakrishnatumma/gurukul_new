import { IFieldConfig } from "../constants/types";

export const borrowerColumnConfig: IFieldConfig[] = [
  {
    field: "userId",
    title: "User",
    type: "dropdown",
    required: true,
    dataSource: "/User",
    valueField: "userId",
    displayField: "firstName",
  },
  {
    field: "cardNumber",
    title: "Card Number",
    type: "string",
    required: true,
  },
  {
    field: "branchCode",
    title: "Branch Code",
    type: "dropdown",
    required: true,
    dataSource: "/Branch",
    valueField: "branch_code",
    displayField: "branch_name",
  },
  {
    field: "borrowerCategoryCode",
    title: "Branch Code",
    type: "dropdown",
    required: true,
    dataSource: "/BorrowerCategory",
    valueField: "borrower_category_code",
    displayField: "borrower_category_name",
  },

  {
    field: "dateEnrolled",
    title: "Date Enrolled",
    type: "date",
    required: true,
  },
  {
    field: "dateExpiry",
    title: "Date Expiry",
    type: "date",
    required: true,
  },
  {
    field: "dateRenewed",
    title: "Date Renewed",
    type: "date",
    required: true,
  },
  {
    field: "borrowerNotes",
    title: "Borrower Notes",
    type: "string",
    required: true,
  },
  {
    field: "branchEmail",
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

export const borrowerTableColumnConfig = [
  {
    field: "card_number",
    title: "Card Number",
  },
  {
    field: "first_name",
    title: "First Name",
  },
  {
    field: "last_name",
    title: "Last Name",
  },
  {
    field: "date_of_birth",
    title: "Date of Birth",
  },
  {
    field: "branch_code",
    title: "Branch Code",
  },
  {
    field: "date_enrolled",
    title: "Date Enrolled",
  },
  {
    field: "date_expiry",
    title: "Date Expiry",
  },
  {
    field: "date_renewed",
    title: "Date Renewed",
  },
  {
    field: "borrower_notes",
    title: "Borrower Notes",
  },
];
