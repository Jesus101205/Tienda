<template>
  <v-card class="mx-auto" max-width="344">
    <v-img height="300px" width="300px" class="justify-center" :src="info.imagen" contain></v-img>

    <v-card-title>
      {{ info.titulo }} {{ this.$store.state.count }}
    </v-card-title>

    <v-card-subtitle>
      {{ info.descripcion }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="compra()" color="orange-lighten-2" :text="info.precio"></v-btn>

      <v-spacer></v-spacer>


    </v-card-actions>

  </v-card>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: 0
    },
  },
  methods: {
    compra() {

      this.info.cantidad = 1
      this.$store.commit('agregarcompra', this.info)

    }
  },
}

</script>