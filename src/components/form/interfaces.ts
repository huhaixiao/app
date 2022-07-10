interface Callbacks<Values = any> {
  onValuesChange: (changedValues: any, values: Values) => void;
  onFieldsChange: () => void;
  onFinish: (values: Values) => void;
  onFinishFailed: () => void;
}
