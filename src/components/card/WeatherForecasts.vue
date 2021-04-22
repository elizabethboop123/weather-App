<template>
  <v-list>
    <v-list-item v-for="day in forecasts" :key="day.id">
      <v-list-item-title class="text-left">{{ day.weekDay }}</v-list-item-title>
      <v-img :src="day.skyUrl" width="32px"></v-img>
      <v-list-item-subtitle class="text-right"
        >{{ day.tempMax }}&deg;C / {{ day.tempMin }}&deg;C</v-list-item-subtitle
      >
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['forecasts']),
    loading() {
      return !this.forecasts
    },
  },
}
</script>

<style></style>
