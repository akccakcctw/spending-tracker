<template lang="pug">
  div.m-user
    h2 使用者頁
    UserProfile
</template>
<script>
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
    UserProfile,
  },
};
</script>
<style lang="scss" scoped>

</style>
