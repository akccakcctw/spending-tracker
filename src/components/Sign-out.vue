<template lang="pug">
  div.m-sign-out
    button(@click="handleSignOut") 登出
</template>

<script>
export default {
  name: 'signOut',
  data() {
    return {
    };
  },
  methods: {
    handleSignOut() {
      this.$router.push('/login');
      this.$store.dispatch('actionSignOut');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

