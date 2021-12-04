<template>
    <v-card>
        <v-card-title>
            Add an item
        </v-card-title>
        <v-card-actions>
          <v-btn
            to="/foods"
            color="primary"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-title>
          Current items
        </v-card-title>
  <v-toolbar>
    <v-tabs
      dark
      background-color="primary"
      grow
    >
      <v-tab>Fruits</v-tab>

      <v-tab>Vegetables </v-tab>

      <v-tab>Others</v-tab>
    </v-tabs>
  </v-toolbar>
        <v-card-text>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'Home'
}
</script>
