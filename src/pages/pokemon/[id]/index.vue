<template>
  <div class="container">
    <h1>Pokemon Detail</h1>
    <LazyCard class="detail-container">
      <img :src="pokemonData.image" alt="pokemon-img" loading="lazy" />
      <h3>{{ pokemonData.name }}</h3>
    </LazyCard>
  </div>
</template>

<script lang="ts" setup>
import { PokemonDetail } from "@/infrastructures/dependencies/pokemon-modules/domain/Pokemon";
definePageMeta({
  layout: "navigation",
});
const route = useRoute();

const { getPokemonDetail } = usePokemonStore();
const pokemonId = route.params.id;

const pokemonData = ref(new PokemonDetail());

const onGetPokemonDetail = async () => {
  const resp = await getPokemonDetail(pokemonId);
  pokemonData.value = resp;
};
await onGetPokemonDetail();
</script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

h3 {
  font-size: 2rem;
  text-transform: capitalize;
}
</style>
