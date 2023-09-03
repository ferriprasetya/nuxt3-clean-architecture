import { PokemonEndpoints } from "../endpoints/PokemonEndpoints";
import {
  HttpRequestOption,
  PaginationRequest,
} from "../../common/domain/Common";
import { PokemonMapper } from "./PokemonMapper";
import ApiService from "@/infrastructures/services/ApiService";

export class PokemonRepository {
  readonly apiService: ApiService;
  readonly PokemonMapper: PokemonMapper;
  readonly PokemonEndpoints: PokemonEndpoints;

  constructor(
    apiService: ApiService,
    PokemonMapper: PokemonMapper,
    PokemonEndpoints: PokemonEndpoints,
  ) {
    this.apiService = apiService;
    this.PokemonMapper = PokemonMapper;
    this.PokemonEndpoints = PokemonEndpoints;
  }

  public async getListPokemon(params: PaginationRequest) {
    const resp = await this.apiService.request(
      new HttpRequestOption({
        url: this.PokemonEndpoints.pokemonListApi(params),
      }),
    );

    return this.PokemonMapper.convertPokemonListFromApi(resp);
  }

  public async getDetailPokemon(pokemonId: number) {
    const resp = await this.apiService.request(
      new HttpRequestOption({
        url: this.PokemonEndpoints.pokemonDetailApi(pokemonId),
        callbackFailed: (err: any) => {
          console.log("Failed get detail \n", err);
        },
      }),
    );

    return this.PokemonMapper.convertPokemonDetailFromApi(resp);
  }
}
