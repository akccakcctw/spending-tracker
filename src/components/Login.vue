<template lang="pug">
  div.m-login
    form#login(@submit.prevent="handleLogin")
      h2.title 登入
      label.label(for="email")
        span.text 電子郵件
        input.input#email(type="email", v-model="formData.email")
      label.label(for="password")
        span.text 密碼
        input.input#password(type="password", v-model="formData.password")
      button.btn(type="submit") 登入
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'login',
  data() {
    return {
      title: 'Spending Tracker',
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('actionLogin', {
        email: this.formData.email,
        password: this.formData.password,
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
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
