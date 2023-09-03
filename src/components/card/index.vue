<template>
  <div class="card-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.card-container {
  padding: 1rem 2rem;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
}
</style>
