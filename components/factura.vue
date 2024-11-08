<template>
    <v-dialog
      v-model="mostrar"
      width="auto"
      persistent
    >
      <v-card
        max-width="800"
        prepend-icon="mdi-update"
        title="Productos Comprados"
      >

      <v-card-text>
        <v-data-table
          :headers="titulos"
          :items="this.$store.getters.procomprados"
          density="compact"
        >
        <template v-slot:item.imagen="{ value }">
          <img width="40px" height="40px" :src="value">
        </template>
      
      </v-data-table>
        </v-card-text>

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Cerrar"
            @click="cerrar()"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>
<script>

export default {
    props: {
    show: {
        type: Boolean,
        default: false
    },
   
},
data() {
        return {
            mostrar : false,
            titulos: [
              { title: 'Titulo', align: 'start', sortable: false,key: 'titulo' },
              { title: 'Descripción', align: 'start',key: 'descripcion' },
              { title: 'Cantidad', align: 'start',key: 'cantidad' },
              { title: 'Imagen', align: 'start',key: 'imagen' }
           ],  
          }
    },
    methods:{
      cerrar(){
        this.$emit('cerrar')
      }
    },
 watch:{
    show(){
        this.mostrar = this.show
    }
 }   
}
</script>