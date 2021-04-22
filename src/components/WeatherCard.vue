<template>
  <v-card max-width="600" width="600" class="mx-auto" elevation="3" shaped>
    <v-alert
      v-if="currentDay.error"
      color="red lighten-2"
      dark
      border="bottom"
    >
      {{ currentDay.error }}
    </v-alert>
    <div class="pa-2" v-else>
      <weather-header :city="value" />
      <weather-body />

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="blue-grey--text">
            Clima para os próximos dias
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <weather-forecasts />
    </div>
  </v-card>
</template>

<script>

import WeatherForecasts from "@/components/card/WeatherForecasts";
import WeatherHeader from "@/components/card/WeatherHeader";
import WeatherBody from "@/components/card/WeatherBody";
import { mapGetters } from "vuex";

export default {
  name: "weather-card",
  props: ["value"],
  components: { WeatherForecasts, WeatherHeader, WeatherBody },
  computed: {
    ...mapGetters(["currentDay"]),
    loading() {
      return !this.currentDay;
    },
  },
};
</script>
