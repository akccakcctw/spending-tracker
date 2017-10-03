<template lang="pug">
  div.m-sign-out
    el-button.sign-out(@click="handleSignOut", type="text") 登出
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
.sign-out {
  padding: 0 20px;
  height: 60px;
}
</style>

