<template lang="pug">
  div.m-user-profile
    span 個人資料
    el-form(ref="form").form
      el-form-item(label="名稱")
        el-input(v-model="form.name")
      el-form-item(label="頭像")
        el-input(v-model="form.photoURL", placeholder="請輸入網址")
      el-form-item(label="信箱")
        el-input(v-model="form.email")
      el-form-item
        el-button(@click="resetPassword") 重設密碼
      el-form-item
        el-button(@click="onSubmit") 確認修改
</template>

<script>
export default {
  name: 'userProfile',
  data() {
    return {
      form: {
        name: this.$store.state.user.displayName,
        email: this.$store.state.user.email,
      },
    };
  },
  methods: {
    resetPassword() {
      const email = this.$store.state.user.email;
      firebase.auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          // Email sent
        })
        .catch((err) => { throw err; });
    },
    onSubmit() {
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 400px;
  margin: 0 auto;
}
</style>

