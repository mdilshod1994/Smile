<template>
  <div class="main">
    <Header />
    <Banner />
    <About />
    <Slider />
    <Footer />
    <SmileBgAnimation />
    <DownloadImage />
    <Support />
  </div>
</template>

<script>
import About from '~/components/About.vue';
import Banner from '~/components/Banner.vue';
import Header from '~/components/Header.vue';
import Slider from '~/components/Slider.vue';
import Footer from '~/components/Footer.vue';
import SmileBgAnimation from '~/components/SmileBgAnimation.vue';
import DownloadImage from '~/components/UI/modals/DownloadImage.vue';
import Support from '~/components/UI/modals/Support.vue';

export default {
  name: "IndexPage",
  components: { Header, Banner, About, Slider, Footer, SmileBgAnimation, DownloadImage, Support },
  mounted() {
    if (this.$route.path === '/') {
      document.querySelector('body').style.background = 'none'
    }
  },
}
</script>
