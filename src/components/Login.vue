<template lang="pug">
  div.m-login
    h2.title 登入
    el-form(ref="form" :model="form").form
      el-form-item(label="電子郵件")
        el-input(v-model="form.email", type="email")
      el-form-item(label="密碼")
        el-input(v-model="form.password", type="password")
      el-form-item
        el-button(@click="handleLogin") 登入
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'login',
  data() {
    return {
      title: 'Spending Tracker',
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('actionLogin', {
        email: this.form.email,
        password: this.form.password,
      })
        .then(() => {
          this.$router.push('/user');
        })
        .catch((err) => { throw err; });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 350px;
  margin: 0 auto;
}
</style>
