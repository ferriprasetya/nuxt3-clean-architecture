<template>
  <div class="container">
    <div class="navigation">
      <p @click="goBack">&lt; Back</p>
      <p @click="goToHome">Home</p>
    </div>
    <div class="content">
      <Suspense>
        <slot />
        <template #fallback>
          <div class="loading">
            <h1>Loading...</h1>
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.back();
};
const goToHome = () => {
  router.push("/");
};
</script>

<style scoped>
.container {
  height: 100vh;
  padding: 0 2rem;
}

.navigation {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}

.navigation > * {
  cursor: pointer;
}

.content {
  overflow: auto;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
