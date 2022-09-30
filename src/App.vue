
<template>
  <HeaderComponent />
  <RouterView />
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import HeaderComponent from './components/layouts/Header.vue';
</script>

<style lang="scss">

</style>
