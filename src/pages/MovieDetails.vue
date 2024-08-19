<template>
  <h1>DETAILS id</h1>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const movieId = route.params.id;
</script>

<style lang="scss" scoped></style>
