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
      this.$store.dispatch('actionSignOut')
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

