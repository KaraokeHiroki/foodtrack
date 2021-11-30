<template>
  <v-card>
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      category: {{ category }}
    </v-card-text>
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
    const id = this.$route.params.id || this.id
    api.service('foods').get(id).then(
      result => {
        this.name = result.name
        this.category = result.category
      }
    )
  }
}
</script>
