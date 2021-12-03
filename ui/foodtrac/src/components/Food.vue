<template>
  <v-card>
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      category: {{ category }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        to="/foods"
      >
        <v-icon>mdi-arrow-left</v-icon> Back
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
    category: ''
  }),
  mounted () {
    // try to get the food id from the URL
    // fallback to the id  set in the props
    const id = this.$route.params.id || this.id
    // get the data for the instructor to be displayed
    api.service('foods').get(id).then(
      result => {
        this.name = result.name
        this.category = result.category
      }
    )
  }
}
</script>
