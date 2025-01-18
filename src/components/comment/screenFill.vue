<script setup lang="ts">
import { ref } from 'vue';
let isFullscreen = ref(false);
function fillScreen() {
  document.documentElement?.requestFullscreen();
  isFullscreen.value = true;
}
function exitFullscreen() {
  document?.exitFullscreen();
  isFullscreen.value = false;
}

</script>

<template>
  <IconFullscreen v-if="!isFullscreen" title="全屏" @click="fillScreen"/>
  <IconFullscreenExit v-else title="退出全屏" @click="exitFullscreen"/>
</template>

<style scoped>

</style>