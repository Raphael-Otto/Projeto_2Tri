<script setup>
import HeaderComp from "@/components/templates/HeaderComp.vue";
</script>

<template>
  <HeaderComp />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: auto;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;
  background-color: white;
  font-weight: normal;
}

</style>
