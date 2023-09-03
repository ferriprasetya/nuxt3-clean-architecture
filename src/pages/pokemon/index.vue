<template>
  <div>
    <h1>Pokemon List</h1>
  </div>
  <div class="list-container">
    <LazyCard
      v-for="pokemon in pokemonList"
      :key="pokemon.name"
      class="card-container"
      @click="() => goToDetail(pokemon.id)"
    >
      <div class="pokemon-card">
        <PokeBallIcon />
        <h1>{{ pokemon.name }}</h1>
      </div>
    </LazyCard>
  </div>
</template>

<script lang="ts" setup>
import PokeBallIcon from "@/assets/icons/pokeball-icon.vue";
definePageMeta({
  layout: "navigation",
});

const { getPokemonList } = usePokemonStore();
const router = useRouter();
await getPokemonList();

const { pokemonList } = storeToRefs(usePokemonStore());

const goToDetail = (id: number) => {
  const path = `/pokemon/${id ?? "not-found"}`;
  router.push(path);
};
</script>

<style scoped>
.list-container {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.pokemon-card {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.pokemon-card:hover {
  scale: 1.1;
}

.card-container {
  width: 80%;
}
</style>
