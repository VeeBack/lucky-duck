<template>
  <span
    @click="toggle"
    :class="$store.state.proteins.includes(protein) ? 'active' : ''"
  >
    <i class="fa" :class="`fa-${protein}`" />
  </span>
</template>

<script>
import store from "../store";

export default {
  props: ["protein"],
  methods: {
    toggle() {
      store.commit("toggleProtein", this.protein);
    },
  },
};
</script>

<style scoped>
span {
  float: left;
  width: 20%;
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: rgb(27, 14, 51);
  align-items: center;
  justify-content: center;
  font-size: 28px;
}
.active {
  background-color: green;
  color: white;
}
</style>
