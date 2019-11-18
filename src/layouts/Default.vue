<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" /> 
      </div>

      <div class="header__right"></div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss">
    .main {
        margin: 0 auto;
        max-width: 40em;
    }
    img {
        max-width: 100%;
    }
</style>
