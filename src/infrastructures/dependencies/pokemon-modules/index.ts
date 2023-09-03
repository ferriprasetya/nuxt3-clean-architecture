import { container } from "tsyringe";
import { PokemonRepository } from "./data/PokemonRepository";
import { PokemonMapper } from "./data/PokemonMapper";
import { PokemonEndpoints } from "./endpoints/PokemonEndpoints";
import ApiService from "@/infrastructures/services/ApiService";

export class PokemonModules {
  public static init() {
    container.register<PokemonRepository>(PokemonRepository, {
      useFactory: (d) => {
        return new PokemonRepository(
          d.resolve(ApiService),
          d.resolve(PokemonMapper),
          d.resolve(PokemonEndpoints),
        );
      },
    });
  }
}
