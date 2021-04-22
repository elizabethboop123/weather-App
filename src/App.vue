<template>
  <v-app id="app" app style="backgroundColor:#f1f3f4">
    <div>
      <v-toolbar dark prominent src="./assets/logo.jpg">
        <h1>Previsão do Tempo</h1>
      </v-toolbar>
    </div>
    <v-main>
      <div class="justify-center d-flex ">
        <v-img
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          width="200"
        />
      </div>
      <div class="justify-center d-flex ">
        <v-text-field
          @keyup.enter="findCity"
          v-model="search"
          style="padding-top: 1%; position: absolute; width: 460px"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          placeholder="Digite o nome da cidade"
        ></v-text-field>
      </div>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    findCity() {
      this.$router.push("/weather/" + this.search);
      this.search = "";
    },
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
