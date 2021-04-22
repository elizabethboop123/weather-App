import weatherTranslate from '@/utils/weather.util'
import { getCelsium, getUrl } from '@/utils/weather.util'
const days = [
  'Domigo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]
export default {
  state: {
    currentDay: undefined,
    forecasts: undefined,
  },
  mutations: {
    setCurrentDay(state, day) {
      state.currentDay = day
    },
    setForecasts(state, forecasts) {
      state.forecasts = forecasts
    },
    clearCurrentDay(state) {
      state.currentDay = void 0
    },
    clearForecasts(state) {
      state.forecasts = void 0
    },
  },
  actions: {
    async fetchCurrentDay({ commit }, { city, apiKey }) {
      try {
        const response = await fetch(
          `https://openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )

        const data = await response.json()

        const dt = new Date(data.dt * 1000)
        const currentDay = {
          sky: weatherTranslate[data.weather[0].main].toLowerCase(),
          skyUrl: getUrl(
            data.weather[0].main,
            dt.getHours() > 6 && dt.getHours() < 20
          ),
          temp: Math.ceil(data.main.temp),
          ftemp: Math.ceil(data.main.feels_like),
          pressure: data.main.pressure,
          wind: data.wind.speed,
          weekDay: days[dt.getDay()],
          coords: data.coord,
          datetime: dt,
        }
        commit('setCurrentDay', currentDay)
      } catch {
        commit('setCurrentDay', { error: 'Cidade não encontrada' })
      }
    },
    async fetchForecasts({ commit }, { coords, apiKey }) {
      try {
        const response = await fetch(
          `https://openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
        )
        const data = await response.json()

        const forecasts = []
        const daily = data.daily
        daily.splice(1, 4).forEach((a) => {
          const dt = new Date(a.dt * 1000)
          forecasts.push({
            tempMin: Math.ceil(a.temp.min),
            tempMax: Math.ceil(a.temp.max),
            pressure: a.pressure,
            weekDay: days[dt.getDay()],
            wind: {
              speed: a.wind_speed,
              deg: a.wind_deg,
            },
            sky: weatherTranslate[a.weather[0].main],
            skyUrl: getUrl(
              a.weather[0].main,
              dt.getHours() > 6 && dt.getHours() < 20
            ),
          })
        })
        commit('setForecasts', forecasts)
      } catch {
        commit('setForecasts', { error: 'Não foi possível completar a pesquisa!' })
      }
    },
  },
  getters: {
    currentDay: (s) => s.currentDay,
    forecasts: (s) => s.forecasts,
  },
}
