<template>
    <v-card>
        <v-card-title>
            Add item
        </v-card-title>
        <v-card-actions>
          <v-btn
            to="/foods"
          >
            Cancel
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            @click="add"
          >
            Confirm
          </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'AddFood',
  data: () => ({
    id: '',
    name: '',
    category: '',
    shelf_life: ''
  }),
  mounted () {
    this.name = this.food.name
    this.category = this.food.category
    this.shelf_life = this.food.shelf_life
  },
  methods: {
    add () {
      // get the food
      api.service('foods').get('')
        .then(() => this.$router.push('/foods'))
    }
  }
}
</script>
