import { IFieldConfig } from "../constants/types";

export const userColumnConfig: IFieldConfig[] = [
  {
    field: "aadGuid",
    title: "AAD Guid",
    type: "string",
    required: true,
  },
  {
    field: "firstName",
    title: "First Name",
    type: "string",
    required: true,
  },
  {
    field: "middleName",
    title: "Middle Name",
    type: "string",
    required: true,
  },
  {
    field: "lastName",
    title: "Last Name",
    type: "string",
    required: true,
  },
  {
    field: "dateOfBirth",
    title: "Date Of Birth",
    type: "date",
    required: true,
  },

  {
    field: "gender",
    title: "Gender",
    type: "string",
    required: true,
  },

  {
    field: "lang",
    title: "Language",
    type: "string",
    required: true,
  },
  {
    field: "userStatusId",
    title: "User Status Id",
    type: "number",
    required: true,
  },
  {
    field: "userRoleId",
    title: "User Role Id",
    type: "number",
    required: true,
  },

  {
    field: "jsonAddress",
    hidden: true,
    defaultValue: "",
  },

  {
    field: "description",
    hidden: true,
    defaultValue: "",
  },
  {
    field: "cityId",
    title: "City",
    type: "dropdown",
    required: true,
    dataSource: "/City",
    valueField: "id",
    displayField: "name",
  },
  {
    field: "stateId",
    title: "State",
    type: "dropdown",
    required: true,
    dataSource: "/State",
    valueField: "id",
    displayField: "name",
  },
  {
    field: "countryId",
    title: "Country",
    type: "dropdown",
    required: true,
    dataSource: "/Domain/Country",
    valueField: "id",
    displayField: "name",
  },
];
