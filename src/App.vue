<template lang="pug">
  div#app
    h1.title {{ mainTitle }}
    transition(name="fade", mode="out-in")
      router-view
</template>

<script>
import { mapGetters } from 'vuex';
import { headMeta, headLink } from './head';

export default {
  name: 'app',
  data() {
    return {
      mainTitle: 'Spending Tracker',
    };
  },
  computed: mapGetters({
    loading: 'getLoading',
    user: 'getUser',
  }),
  head: {
    title: {
      inner: '大撒幣～～～',
    },
    meta() {
      return headMeta;
    },
    link: headLink,
  },
  created() {
    if (this.isLogin()) {
      this.gotoUser();
    }
  },
  methods: {
    isLogin() {
      return this.user !== null;
    },
    gotoUser() {
      this.$router.push('/user');
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
