<template>
  <ul>
    <li
    v-for="food in foods"
    :key="food.id"
    >
      <router-link
        :to="`foods/${food.id}`"
      >
        {{ food.name }}
      </router-link>
    </li>
  </ul>

</template>

<script>
import api from '@/services/api'
export default {
  name: 'FoodList',
  data: () => ({
    foods: []
  }),
  mounted () {
    api.service('foods').find({}).then(
      result => {
        this.foods = result.data
      }
    )
  }
}
</script>
