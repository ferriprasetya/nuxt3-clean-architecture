export class PokemonDetail {
  name = "";
  id: number = null;
  image = "";

  constructor(fields?: Partial<PokemonDetail>) {
    Object.assign(this, fields);
  }
}
