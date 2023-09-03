const ConvertCamelToSnakeCase = (key: string): string => {
  return key.replace(/([A-Z])/g, "_$1").toLowerCase();
};

const ConvertObjectCamelToSnakeCase = (object: any) => {
  const newObject: any = {};

  for (const camel in object) {
    newObject[ConvertCamelToSnakeCase(camel)] = object[camel];
  }

  return newObject;
};
export default ConvertObjectCamelToSnakeCase;
