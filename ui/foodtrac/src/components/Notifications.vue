<template>
  <v-sheet class="pa-5">
    <v-switch
      v-model="switch1"
      inset
      :label="`Notify Me: ${switch1.toString()}`"
    ></v-switch>
  </v-sheet>
</template>

<script>
export default {
  name: 'notifications',
  data () {
    return {
      switch1: true,
      switch2: false
    }
  }
}
</script>
