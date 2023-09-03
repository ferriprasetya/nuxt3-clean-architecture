import { AxiosResponse } from "axios";
import { PokemonDetail } from "../domain/Pokemon";
import getIdFromUrl from "@/utils/GetIdFromUrl";

export class PokemonMapper {
  public convertPokemonListFromApi(res: AxiosResponse): PokemonDetail[] {
    const { data } = res;
    return data.results
      ? data.results.map(
          (pokemon: any) =>
            new PokemonDetail({
              name: pokemon.name,
              id: getIdFromUrl(pokemon.url),
            }),
        )
      : [];
  }

  public convertPokemonDetailFromApi(res: AxiosResponse): PokemonDetail {
    const { data } = res;

    return new PokemonDetail({
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
    });
  }
}
