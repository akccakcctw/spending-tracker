<template lang="pug">
  header.m-header
    el-menu.el-menu(theme="dark", :default-active="activeIndex", mode="horizontal", @select="handleSelect")
      .logo Spending Tracker
      template(v-if="!isLoggedIn")
        router-link(to="/sign-up")
          el-menu-item(index="1") 註冊
        router-link(to="login")
          el-menu-item(index="2") 登入
      template(v-if="isLoggedIn")
        .user-name {{ user.displayName || user.email }}
        SignOut
</template>

<script>
import SignOut from './Sign-out';

export default {
  data() {
    return {
      activeIndex: '1',
      user: this.$store.state.user,
    };
  },
  computed: {
    isLoggedIn: {
      get() {
        return this.$store.state.user;
      },
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    SignOut,
  },
};
</script>

<style lang="scss" scoped>
.m-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.el-menu {
  justify-content: flex-end;
  align-items: center;
  display: flex;
  .logo {
    color: white;
    flex: 1;
    text-align: left;
    padding: 1em;
  }
  .user-name {
    color: #FFF;
  }
}
</style>
