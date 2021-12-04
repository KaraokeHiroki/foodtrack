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
      api.service('foods').get(this.id, {
        name: this.name,
        category: this.category,
        shelf_life: this.shelf_life
      })
        .then(() => this.$router.push('/foods'))
        .catch(() => alert('Oops'))
    }
  }
}
</script>
