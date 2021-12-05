<template>
  <v-card>
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      category: {{ category }}
    </v-card-text>
    <v-card-text>
      shelf_life: {{ shelf_life }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        to="/foods"
      >
        <v-icon>mdi-arrow-left</v-icon> Back
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
        to="/food/add"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'Food',
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    name: '',
    category: '',
    shelf_life: ''
  }),
  mounted () {
    const id = this.$route.params.id || this.id
    api.service('foods').get(id).then(
      result => {
        this.name = result.name
        this.category = result.category
        this.shelf_life = result.shelf_life
      }
    )
  },
  methods: {
    addFood () {
    }
  }
}
</script>
