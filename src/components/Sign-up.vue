<template lang="pug">
  div.m-sign-up
    h2.title 註冊
    el-form(ref="form" :model="form").form
      el-form-item(label="電子郵件")
        el-input(v-model="form.email", type="email")
      el-form-item(label="密碼")
        el-input(v-model="form.password", type="password")
      el-form-item(label="密碼確認")
        el-input(v-model="form.passwordConfirm", type="password")
      el-form-item
        el-button(@click="handleSignUp") 註冊
</template>

<script>
import swal from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
    };
  },
  methods: {
    passwordConfirm() {
      return this.form.password === this.form.passwordConfirm;
    },
    handleSignUp() {
      if (!this.passwordConfirm()) {
        swal(
          'Oops...',
          'Something went wrong!',
          'error',
        );
        return;
      }
      firebase.auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.push('/login');
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
