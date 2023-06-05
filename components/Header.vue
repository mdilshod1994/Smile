<template>
  <header class="header p-r">
    <div class="header__wrapper">
      <div class="header__inner">
        <nuxt-link to="/" class="header__logo ">
          <img src="@/assets/imgs/logo.png" alt="">
        </nuxt-link>
        <div class="header__actions ">
          <a href="tel:+7(902)7928800" class="header__actions-link">
            +7 (902) 792 88 00
          </a>
          <button class="header__actions-btn btn" @click="openSupport">
            Служба поддержки
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  methods:{
    openSupport(){
      this.$store.dispatch('support/modal_s')
    }
  }
}
</script>
