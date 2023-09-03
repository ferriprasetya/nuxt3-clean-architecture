import { container } from "tsyringe";
import { PaginationRequest } from "@/infrastructures/dependencies/common/domain/Common";
import { PokemonModules } from "@/infrastructures/dependencies/pokemon-modules";
import { PokemonRepository } from "@/infrastructures/dependencies/pokemon-modules/data/PokemonRepository";
import { PokemonDetail } from "@/infrastructures/dependencies/pokemon-modules/domain/Pokemon";

PokemonModules.init();
export const usePokemonStore = defineStore("pokemon", () => {
  const pokemonList = ref([] as PokemonDetail[]);

  const getPokemonList = async (
    params: PaginationRequest = new PaginationRequest(),
  ) => {
    const resp = await container
      .resolve(PokemonRepository)
      .getListPokemon(params);

    pokemonList.value = resp;
  };

  const getPokemonDetail = (id: number) => {
    return container.resolve(PokemonRepository).getDetailPokemon(id);
  };
  return {
    pokemonList,
    getPokemonList,
    getPokemonDetail,
  };
});
