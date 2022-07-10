export const attachPropertiesToComponent = <C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P => {
  const result = component as any;
  Object.keys(properties).forEach(key => {
    result[key] = properties[key];
  });

  return result;
};
