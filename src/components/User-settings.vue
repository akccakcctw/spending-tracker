<template lang="pug">
  div.m-user-profile
    span 設定
    el-form(ref="form").form
      el-form-item(label="預算")
        el-input(v-model="form.budget", type="number")
      el-form-item
        el-button(@click="onSubmit", type="primary") 確認修改
</template>

<script>
export default {
  name: 'userSettings',
  data() {
    return {
      form: {
        budget: '',
      },
    };
  },
  methods: {
    onSubmit() { },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 350px;
  margin: 0 auto;
}
</style>
