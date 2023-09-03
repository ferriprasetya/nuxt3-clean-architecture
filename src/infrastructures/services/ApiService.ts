import "reflect-metadata";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { container } from "tsyringe";
import { HttpRequestOption } from "../dependencies/common/domain/Common";
import ConvertObjectCamelToSnakeCase from "@/utils/ConvertObjectToSnakeCase";

export default class ApiService {
  public api: AxiosInstance;
  public cookiesService: any;
  constructor() {
    this.api = axios.create({
      // todo: move to config
      baseURL: "https://pokeapi.co/api/v2",
      // todo: set auth, e.g:
      // headers: {
      //   'Authorization': `Bearer ${this.cookiesService.getToken()}`
      // },
      timeout: 30000,
    });
    container.register<ApiService>(ApiService, { useClass: ApiService });
  }

  public async request(option: HttpRequestOption): Promise<AxiosResponse<any>> {
    const { headers, url, params, payload, method, callbackFailed } = option;

    this.api.interceptors.response.use(
      this.handleSuccessResponse,
      callbackFailed,
    );
    // set content-type
    this.api.defaults.headers["Content-Type"] = "application/json";
    // set custom header if any
    headers.forEach((value: string, key: string) => {
      this.api.defaults.headers.common[key] = value;
    });

    return await this.api.request({
      url,
      params,
      data: payload ? ConvertObjectCamelToSnakeCase(payload) : null,
      method,
    });
  }

  handleSuccessResponse(response: any) {
    return response;
  }
}
