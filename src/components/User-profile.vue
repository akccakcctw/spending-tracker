<template lang="pug">
  div.m-user-profile
    span 個人資料
    el-form(ref="form").form
      el-form-item(label="名稱")
        el-input(v-model="form.name")
      el-form-item(label="頭像")
        el-input(v-model="form.photoURL", placeholder="請輸入圖片網址")
      el-form-item(label="信箱")
        el-input(v-model="form.email", type="email")
      el-form-item
        el-button(@click="resetPassword") 修改密碼
      el-form-item
        el-button(@click="onSubmit", type="primary") 確認修改
</template>

<script>
import { mapGetters } from 'vuex';
import swal from 'sweetalert2';

export default {
  name: 'userProfile',
  data() {
    return {
      form: {
        name: this.$store.getters.getUser.displayName,
        photoURL: this.$store.getters.getUser.photoURL,
        email: this.$store.getters.getUser.email,
      },
    };
  },
  computed: {
    ...mapGetters([
      'getUser',
    ]),
  },
  methods: {
    resetPassword() {
      const email = this.$store.getters.getUser.email;
      firebase.auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          // Email sent
        })
        .catch((err) => { throw err; });
    },
    onSubmit() {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: this.form.name,
        photoURL: this.form.photoURL,
      })
        .then(() => {
          // Update successful
          swal(
            'Success',
            '用戶資料修改完成',
            'success',
          );
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

