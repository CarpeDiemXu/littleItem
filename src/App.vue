<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapMutations(['changeLoginState', 'exitLoginState']),
  },
  created() {
    const isLogin = window.localStorage.getItem('isLogin')
    if (isLogin) {
      this.changeLoginState()
    } else {
      this.exitLoginState()
    }
  },
}
</script>

<style>
</style>
