<template>
  <div id="app">
    <Header/>
    <AboutUs/>
    <Clients/>
    <Masters/>
    <Ceremonies/>
    <Hookah/>
    <Footer/>
  </div>
</template>

<script>
import Header from './sections/Header';
import AboutUs from './sections/About_us';
import Clients from './sections/Clients';
import Masters from './sections/Masters';
import Ceremonies from './sections/Ceremonies';
import Hookah from './sections/Hookah';
import Footer from './sections/Footer';

export default {
  name: 'App',
  components: {
    Header,
    AboutUs,
    Clients,
    Masters,
    Ceremonies,
    Hookah,
    Footer
  }
}
</script>

<style>
#app {
  
}
</style>
