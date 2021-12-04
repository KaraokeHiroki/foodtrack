<template>
    <v-card>
        <v-card-title>
            Foods
        </v-card-title>
          <v-autocomplete
            v-model="value"
            :items="items"
            dense
            filled
            label="Search"
          ></v-autocomplete>
        <v-card-text>
          <food-list/>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
    </v-card>
</template>

<script>

import FoodList from './FoodList.vue'
export default {
  components: { FoodList },
  name: 'Foods'

}
</script>
