<template>
  <div class="home-page">
    <div class="hero-section">
      <h1 class="hero-title">Bienvenido a Tu Tienda de Juegos de Mesa</h1>
      <p class="hero-text">Descubre una gran variedad de juegos para todas las edades y gustos. Perfectos para tus reuniones con familia y amigos.</p>
      <NuxtLink to="/dashboard/">
        <v-btn color="primary" outlined>Explora nuestros juegos</v-btn>
      </NuxtLink>
    </div>

    <div class="counter-section">
      <h2>Visitas a nuestra tienda: {{ this.$store.state.count }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #fafafa;
  color: #444;
}

.hero-section {
  background-color: #e0f7fa;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.hero-title {
  font-size: 2.5rem;
  color: #00796b;
  margin-bottom: 20px;
}

.hero-text {
  font-size: 1.2rem;
  color: #00695c;
  margin-bottom: 25px;
}

.v-btn {
  font-size: 1rem;
  color: #00796b;
  border-color: #00796b;
}

.counter-section {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #00796b;
}
</style>