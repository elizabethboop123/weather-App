<template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-list-item-title class="headline">
        {{ city }}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ currentDay.weekDay }},
        {{ currentDay.sky }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'w-header',
  props: ['city'],
  computed: mapGetters(['currentDay']),
}
</script>

<style></style>
