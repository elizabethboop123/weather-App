<template>
  <v-img
    class="sky"
    :src="skyUrl"
    light
    position="left"
    height="96px"
    width="96px"
    max-width="96px"
    contain
  ></v-img>
</template>

<script>
export default {
  props: ['skyUrl'],
}
</script>

