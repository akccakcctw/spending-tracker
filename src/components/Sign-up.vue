<template lang="pug">
  div.m-sign-up
    form#sign-up(@submit.prevent="handleSignUp")
      h2.title 註冊
      label.label(for="email")
        span.text 電子郵件
        input.input#email(type="email", v-model="formData.email")
      label.label(for="password")
        span.text 密碼
        input.input#password(type="password", v-model="formData.password")
      label.label(for="password-confirm")
        span.text 密碼確認
        input.input#password-confirm(type="password", v-model="formData.passwordConfirm")
      button.btn(type="submit") 註冊
</template>

<script>
import swal from 'sweetalert2';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
    };
  },
  methods: {
    passwordConfirm() {
      return this.password === this.passwordConfirm;
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
        .createUserWithEmailAndPassword(this.formData.email, this.formData.password)
        .then(() => {
          this.$router.push('/login');
        })
        .catch((err) => { throw err; });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
