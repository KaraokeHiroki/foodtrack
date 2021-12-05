<template>
  <v-card>
    <v-card-text>
      Items
    </v-card-text>
      <v-card-text>
        <add-food/>
      </v-card-text>
  </v-card>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'Items',
  data: () => ({
    id: '',
    name: '',
    category: '',
    shelf_life: ''
  }),
  mounted () {
    api.service('addfood').find({}).then(
      result => {
        this.food = result.data
      }
    )
  }
}
</script>
