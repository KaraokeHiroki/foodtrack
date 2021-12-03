<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Foodtrac icon"
          contain
          src="./assets/foodtrac_icon.png"
          transition="scale-transition"
          width="50"
        />

        <v-img
          alt="Foodtrac name"
          contain
          width="200"
          src="./assets/foodtrac_logo.png"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
<v-bottom-navigation
    :value="value"
    color="primary"
    app
  >
      <v-btn to="/">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/foods">
        <span>Foods</span>

        <v-icon>mdi-food-apple</v-icon>
      </v-btn>

      <v-btn to="/notifications">
        <span>Notifications</span>

        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn to="/education">
        <span>Education</span>

        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    value: '/'
  })
}
</script>
