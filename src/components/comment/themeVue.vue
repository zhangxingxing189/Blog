<script setup lang="ts">
import {theme,setTheme,loadTheme} from "@/components/comment/theme.ts";
loadTheme();
</script>

<template>
  <IconSun v-if="theme==='dark'" @click="setTheme('')"/>
  <IconMoon v-if="theme===''" @click="setTheme('dark')"/>
</template>

<style scoped>

</style>