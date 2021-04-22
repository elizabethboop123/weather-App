<template>
  <v-card-text>
    <v-row align="center">
      <v-col
        class="display-3"
        style="font-family: 'Consolas' !important;"
        cols="6"
      >
        {{ currentDay.temp }}&deg;C
        <p class="subtitle-2" style="font-size: 12px !important;">
          Temperatura {{ currentDay.ftemp }}&deg;C
        </p>
      </v-col>
      <v-col cols="6">
        <Sky :skyUrl="currentDay.skyUrl" />
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
import Sky from '@/components/card/Sky'
import { mapGetters } from 'vuex'
export default {
  name: 'w-body',
  computed: mapGetters(['currentDay']),
  components: {
    Sky,
  },
}
</script>


<style>
.container{
    padding: 100px;
}
</style>
