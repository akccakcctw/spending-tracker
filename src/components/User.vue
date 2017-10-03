<template lang="pug">
  div.m-user
    h2 使用者頁
    p.user ID: {{ user.email }}
    UserProfile
    SignOut
</template>
<script>
import SignOut from '../components/Sign-out';
import UserProfile from '../components/User-profile';

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
    UserProfile,
  },
};
</script>
<style lang="scss" scoped>

</style>
