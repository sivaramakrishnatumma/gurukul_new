export interface IFieldConfig {
  field: string;
  value?: any;
  title?: string;
  type?: string;
  required?: boolean;
  hidden?: boolean;
  defaultValue?: any;
  dataSource?: string;
  valueField?: string;
  displayField?: string;
  displayFieldCalc?: Function;
}
