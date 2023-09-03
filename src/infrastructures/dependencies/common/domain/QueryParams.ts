export class QueryParams {
  queryString = "";
  constructor(fields?: any) {
    if (!fields) {
      return;
    }
    const queries = [];
    for (const [key, value] of Object.entries(fields)) {
      const val: any = value;
      if (val) {
        queries.push(
          `${key.replace(
            /[A-Z]/g,
            (letter) => `_${letter.toLowerCase()}`,
          )}=${encodeURIComponent(val)}`,
        );
      }
    }
    this.queryString = queries.join("&");
  }
}
