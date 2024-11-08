// store/index.js
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // Define tu estado inicial aquí

      comprasrealizadas: [],

      productos: [
        {
          imagen:
            "https://m.media-amazon.com/images/I/81sDS1Q6X9S._AC_SX679_.jpg",
          precio: "25.00$",
          titulo: "Catan",
          descripcion: "Juego de estrategia y negociación",
          id: 1,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/714k0EwENnL._AC_SX679_.jpg",
          precio: "30.00$",
          titulo: "Ticket to Ride",
          descripcion: "Juego de construcción de rutas ferroviarias",
          id: 2,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/61qI7y93BDL._AC_SX679_.jpg",
          precio: "45.00$",
          titulo: "Dixit",
          descripcion: "Juego de cartas con ilustraciones y adivinanza",
          id: 3,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/61hjzGgebgL._AC_SY879_.jpg",
          precio: "60.00$",
          titulo: "Carcassonne",
          descripcion: "Juego de estrategia y construcción de ciudades",
          id: 4,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/811YPz8YufL._AC_SY879_.jpg",
          precio: "55.00$",
          titulo: "Pandemic",
          descripcion: "Juego cooperativo de estrategia y supervivencia",
          id: 5,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/91A0nIsV57S._AC_SX679_.jpg",
          precio: "50.00$",
          titulo: "Azul",
          descripcion: "Juego de mosaicos y colocación de piezas",
          id: 6,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/614u7plTGfL._AC_SX679_.jpg",
          precio: "40.00$",
          titulo: "Exploding Kittens",
          descripcion: "Juego de cartas de humor y estrategia",
          id: 7,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/61EkS-aNwjL._AC_SY879_.jpg",
          precio: "20.00$",
          titulo: "Uno",
          descripcion: "Clásico juego de cartas para toda la familia",
          id: 8,
        }
      ],
    };
  },
  mutations: {
    agregarcompra(state, producto) {
      if (state.comprasrealizadas.length > 0) {
        let r = state.comprasrealizadas.findIndex((e) => {
          return e.id == producto.id;
        });
        console.log(state.comprasrealizadas);
        if (r == -1) state.comprasrealizadas.push(producto);
        else {
          state.comprasrealizadas[r].cantidad += 1;
        }
      } else state.comprasrealizadas.push(producto);
    },
    eliminaritem(state, posicion) {
      state.comprasrealizadas.splice(posicion, 1);
    },
  },
  actions: {
    agregarcompra({ commit }) {
      commit("agregarcompra");
    },

    eliminaritem({ commit }) {
      commit("eliminaritem");
    },
  },

  getters: {
    count: (state) => state.count,
    productos: (state) => state.productos,
    compras: (state) => {
      const cantidad = state.comprasrealizadas.reduce((accumulator, objeto) => {
        return accumulator + objeto.cantidad;
      }, 0);
      return cantidad;
    },
    procomprados: (state) => state.comprasrealizadas,
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  return {
    provide: {
      store: store,
    },
  };
});
