<template>
    <v-card>
    <v-card-title>
            Foods
        </v-card-title>
        <v-card-text>
            <ul>
                <li>
                v-for="food in foods"
                :key="foods.id"
                >
                {{ food.name }}
                </li>
            </ul>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
    </v-card>
</template>

<script>
import api from '@/services/api'
export default {
    name: 'Foods',
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



