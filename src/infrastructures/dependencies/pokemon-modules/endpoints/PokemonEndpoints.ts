import { PaginationRequest } from "@/infrastructures/dependencies/common/domain/Common";

export class PokemonEndpoints {
  pokemonListApi(params: PaginationRequest) {
    return `/pokemon?${params.toQueryString()}`;
  }

  pokemonDetailApi(id: number) {
    return `/pokemon/${id}`;
  }
}
