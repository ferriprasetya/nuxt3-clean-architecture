import { Method } from "axios";
import { QueryParams } from "./QueryParams";

export class PaginationRequest {
  offset = 0;
  limit = 10;

  constructor(fields?: Partial<PaginationRequest>) {
    Object.assign(this, fields);
  }

  toQueryString() {
    return new QueryParams(this).queryString;
  }
}

export class HttpRequestOption {
  method: Method = "get";
  url = "";
  params: any = {};
  payload: any = null;
  headers: Map<string, string> = new Map();
  callbackFailed = (err: any) => {
    console.log("Failed call api", err);
  };

  constructor(fields?: Partial<HttpRequestOption>) {
    Object.assign(this, fields);
  }
}
