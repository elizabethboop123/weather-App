<template>
  <weather-card v-model="city" />
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import WeatherCard from '@/components/WeatherCard'
export default {
  components: { WeatherCard },
  data() {
    return {
      city: 'Joinville',
      apiKey: '439d4b804bc8187953eb36d2a8c26a02',
    }
  },
  computed: mapGetters(['currentDay']),
  watch: {
    $route: 'update',
  },
  methods: {
    ...mapMutations(['clearCurrentDay', 'clearForecasts']),
    ...mapActions(['fetchCurrentDay', 'fetchForecasts']),
    async update() {
      this.clearCurrentDay()
      this.clearForecasts()

      this.city = this.$route.params.city
      await this.fetchCurrentDay({
        city: this.city,
        apiKey: this.apiKey,
      })

      await this.fetchForecasts({
        coords: this.currentDay.coords,
        apiKey: this.apiKey,
      })
    },
  },
  async created() {
    await this.update()
  },
}
</script>
