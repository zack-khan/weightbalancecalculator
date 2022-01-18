<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
:root {
  color: white;
  font-family: 'Ubuntu', sans-serif;
  --darkColor: #121212;
  --primary: #BB86FC;
  --secondary: #03DAC5;
  --moduleShadow: 0px 0px 20px 5px rgba(0,0,0,0.66);
  background-color: var(--darkColor);
}
</style>
