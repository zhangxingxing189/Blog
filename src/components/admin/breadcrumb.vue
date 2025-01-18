<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div id="breadcrumb">
    <a-breadcrumb>
      <template v-for="r in route.matched">
        <a-breadcrumb-item>
          <router-link :to="r.path">{{ r.meta.title }}</router-link>
        </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
  </div>
</template>

<style scoped></style>
