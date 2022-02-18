import { IFieldConfig } from "../constants/types";

export const biblioItemColumnConfig: IFieldConfig[] = [
  {
    field: "itemTypeCode",
    title: "Item Type Code",
    type: "string",
    required: true,
  },
  {
    field: "isbn",
    title: "ISBN",
    type: "string",
    required: true,
  },
  {
    field: "issn",
    title: "ISSN",
    type: "string",
    required: true,
  },
  {
    field: "title",
    title: "Title",
    type: "string",
    required: true,
  },
  {
    field: "publicationYear",
    title: "Publication Year",
    type: "number",
    required: true,
  },
  {
    field: "imageurl",
    hidden: true,
    defaultValue: "string",
  },
  {
    field: "language",
    title: "Language",
    type: "string",
    required: true,
  },
  {
    field: "numberOfPages",
    title: "Number Of Pages",
    type: "number",
    required: true,
  },
  {
    field: "notes",
    title: "Notes",
    type: "string",
    required: true,
  },
  {
    field: "itemGradeLevelCode",
    title: "Item Grade Level Code",
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
