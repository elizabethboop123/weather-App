const assetsUrl =
  'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/'
export default {
  Drizzle: 'Chuvoso',
  Thunderstorm: 'Tempestade',
  Rain: 'Chuva',
  Snow: 'Neve',
  Mist: 'Névoa',
  Sand: 'Tempestade de areia',
  Tornado: 'Тоrnado',
  Clear: 'Céu limpo',
  Clouds: 'Nublado',
}

export function getCelsium(value) {
  return Math.round(value - 273.15)
}
export function getUrl(value, isDayNow) {
  switch (value) {
    case 'Smoke':
    case 'Sand':
    case 'Snow':
      return `${assetsUrl}snow.png`
    case 'Rain':
    case 'Thunderstorm':
      return `${assetsUrl}thunderstorm.png`
    case 'Clear':
      return isDayNow ? `${assetsUrl}sun.png` : `${assetsUrl}moon.png`
    case 'Clouds':
      return `${assetsUrl}cloudy.png`
    case 'Tornado':
      return `${assetsUrl}tornado.png`
  }
}
