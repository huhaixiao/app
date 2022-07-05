export const attachPropertiesToComponent = <C, P extends Record<string, any>>(
  component: C,
  properties: P
): C & P => {
  const result = component as any;
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      result[key] = properties[key];
    }
  }

  return result;
};
