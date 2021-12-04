<template>
    <v-card>
        <v-card-title>
            Add an item
        </v-card-title>
        <v-card-actions>
          <v-btn
            color="primary"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-title>
          Current item
        </v-card-title>
          <v-toolbar>
    <v-tabs
      dark
      background-color="primary"
      grow
    >
      <v-tab>
        <v-badge
          color="pink"
          dot
        >
          Item One
        </v-badge>
      </v-tab>

      <v-tab>
        <v-badge
          color="green"
          content= []
        >
          Item Two
        </v-badge>
      </v-tab>

      <v-tab>
        <v-badge
          color="deep-purple accent-4"
          icon="mdi-vuetify"
        >
          Item Three
        </v-badge>
      </v-tab>
    </v-tabs>
  </v-toolbar>
    </v-card>
</template>

<script>
export default {
  name: 'Home'
}
</script>
