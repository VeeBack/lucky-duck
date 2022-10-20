<template>
  <div>
    <div class="icon" @click="open">
      <i class="fa-solid fa-sort" />
    </div>
    <div class="sort-menu" v-if="isOpen">
      <p
        :class="$store.state.sort == 'name_ascending' ? 'active' : ''"
        @click="sort('name_ascending')"
      >
        {{ $t("sort.name_ascending") }}
      </p>
      <p
        :class="$store.state.sort == 'name_decending' ? 'active' : ''"
        @click="sort('name_decending')"
      >
        {{ $t("sort.name_decending") }}
      </p>
      <p
        :class="$store.state.sort == 'price_ascending' ? 'active' : ''"
        @click="sort('price_ascending')"
      >
        {{ $t("sort.price_ascending") }}
      </p>
      <p
        :class="$store.state.sort == 'price_decending' ? 'active' : ''"
        @click="sort('price_decending')"
      >
        {{ $t("sort.price_decending") }}
      </p>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
    sort(_sort) {
      store.commit("sort", _sort);
    },
  },
};
</script>

<style scoped>
.sort-menu {
  position: fixed;
  bottom: calc(1% + 55px + 8px);
  right: 16px;
  height: fit-content;
  width: fit-content;
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.sort-menu p {
  padding: 12px;
  margin: 0;
}
.active {
  background-color: lightgray;
}
.icon {
  position: fixed;
  bottom: 1%;
  right: 16px;
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.5);
}
.fa-solid {
  padding: 1.25rem;
  height: 15px;
  width: 15px;
  text-align: center;
}
</style>
