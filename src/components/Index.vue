<template lang="pug">
  div.m-index
    h1 {{ msg }}
    ul
      li.li
        router-link(to="/login") 登入
      li.li
        router-link(to="/sign-up") 註冊
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome',
    };
  },
};
</script>

<style scoped>
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
