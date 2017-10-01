<template lang="pug">
  div.m-user-info
    h2 使用者頁
    p.user ID: {{ user.email }}
    SignOut
</template>
<script>
import SignOut from '../components/Sign-out';

export default {
  data() {
    return {

    };
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
    },
  },
  components: {
    SignOut,
  },
};
</script>
<style lang="scss" scoped>

</style>
