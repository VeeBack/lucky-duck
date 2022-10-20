<template>
  <div @click="remove">
    <i class="fa-solid fa-2x" :class="`fa-${allergen}`"></i>
  </div>
</template>

<script>
import store from "../store";

export default {
  props: ["allergen"],
  methods: {
    remove() {
      store.commit("removeAllergen", this.allergen);
    },
  },
};
</script>

<style></style>
