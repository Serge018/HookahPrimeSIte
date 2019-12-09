<template>
  <div id="app">
    <Header/>
    <AboutUs/>
    <Clients/>
    <Masters/> 
    <Hookah/>
    <Ceremonies/>
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
import Scrollbar from 'smooth-scrollbar';
import './utils/device.js';

const isDesktop = (device.desktop());

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
  },
  mounted() {
    if (isDesktop) {
      Scrollbar.init(this.$el, {
        damping: 0.1,
        renderByPixels: true
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
    width: 100%;
    height: 100%;
}
</style>
