<template>
  <div>
    <v-app-bar
      image="https://img.freepik.com/foto-gratis/fondo-gotas-agua_23-2148098971.jpg"
      dark height="150">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h2>JUEGA JUEGOS - JESUS DANIEL</h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <carrito class="mr-5" :productos="productos">

      </carrito>
    </v-app-bar>

  </div>
</template>
<script>
export default {
  props: {
    productos: Array,
  }
}
</script>