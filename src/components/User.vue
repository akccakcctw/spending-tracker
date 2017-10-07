<template lang="pug">
  div.m-user
    h2 使用者頁
    el-tabs(v-model="activeTab", @tab-click="handleTabClick")
      el-tab-pane(label="用戶資料", name="first")
        UserProfile
      el-tab-pane(label="用戶設定", name="second")
        UserSettings
</template>
<script>
import UserProfile from '../components/User-profile';
import UserSettings from '../components/User-settings';

export default {
  data() {
    return {
      activeTab: 'first',
    };
  },
  components: {
    UserProfile,
    UserSettings,
  },
  methods: {
    handleTabClick() {},
  },
};
</script>
<style lang="scss" scoped>

</style>
