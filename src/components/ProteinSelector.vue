<template>
  <div class="footer">
    <div class="nav-footer"></div>
    <div class="sort-icon"></div>

    <!-----------Icons------------>
    <div class="icon-bar">
      <ProteinSelection protein="pig" />
      <hr />
      <ProteinSelection protein="cow" />
      <hr />
      <ProteinSelection protein="bird" />
      <hr />
      <ProteinSelection protein="carrot" />
      <hr />
      <ProteinSelection protein="fish" />
    </div>
  </div>
</template>

<script>
import ProteinSelection from "./ProteinSelection.vue";

export default {
  components: { ProteinSelection },
};
</script>

<style scoped>
.icon-bar {
  display: flex;
  width: 30%;
  background-color: beige;
  overflow: auto;
  position: fixed;
  bottom: 1%;
  left: 35%;
  border-radius: 5px;
}
hr {
  border: 0;
  border-top: 1px solid rgb(20, 15, 15);
}
</style>
