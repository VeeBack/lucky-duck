<template>
  <div @click="toggle">
    <i class="fa-solid fa-lg" :class="`fa-${allergen}`"></i>
    {{ $t(`allergens.${allergen}`) }}
  </div>
</template>

<script>
import store from "../store";

export default {
  props: ["allergen"],
  methods: {
    toggle() {
      store.commit("toggleAllergen", this.allergen);
    },
  },
};
</script>

<style></style>
