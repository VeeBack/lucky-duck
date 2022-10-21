<template>
  <NavBar />
  <div class="menu-component">
    <MenuComponent
      v-for="item in filteredMenu"
      :key="item.title.sv"
      :menuItem="item"
    />
    <div v-if="$store.state.editorMode">
      <button class="addItem" @click="newItem">{{ $t("new_item") }}</button>
      <br />
      <button class="reset" @click="reset">{{ $t("reset_items") }}</button>
    </div>
  </div>
  <ProteinSelector />
  <SortIcon />
</template>

<script>
import NavBar from "./components/Navbar.vue";
import SortIcon from "./components/SortIcon.vue";
import MenuComponent from "./components/MenuComponent.vue";
import ProteinSelector from "./components/ProteinSelector.vue";
import store from "./store";

export default {
  name: "App",
  components: {
    NavBar,
    SortIcon,
    MenuComponent,
    ProteinSelector,
  },
  data() {
    return {
      filteredMenu: this.$store.state.menu,
    };
  },
  methods: {
    updateMenu() {
      this.filteredMenu = store.state.menu
        .filter((item) => {
          if (store.state.proteins.length == 0) return true;
          if (store.state.proteins.includes(item.protein)) return true;
        })
        .filter((item) => {
          for (let i = 0; i < store.state.allergens.length; i++) {
            if (item.allergens.includes(store.state.allergens[i])) return false;
          }
          return true;
        })
        .sort((a, b) => {
          if (store.editorMode) return 0;
          let A;
          let B;
          if (store.state.sort.startsWith("price")) {
            A = parseInt(a.price);
            B = parseInt(b.price);
          }
          if (store.state.sort.startsWith("name")) {
            A = a.title[this.$i18n.locale];
            B = b.title[this.$i18n.locale];
          }
          if (A < B) return store.state.sort.endsWith("ascending") ? -1 : 1;
          if (A > B) return store.state.sort.endsWith("ascending") ? 1 : -1;
          return 0;
        });
    },
    newItem() {
      store.commit("newItem");
    },
    reset() {
      store.commit("reset");
    },
  },
  watch: {
    "$store.state.menu": {
      deep: true,
      handler: "updateMenu",
    },
    "$store.state.proteins": {
      deep: true,
      handler: "updateMenu",
    },
    "$store.state.allergens": {
      deep: true,
      handler: "updateMenu",
    },
    "$store.state.sort": {
      deep: true,
      handler: "updateMenu",
    },
  },
};
</script>

<style>
body {
  margin: 0;
  background-image: url(./assets/background1.jpeg);
  background-size: 100vw;
  background-repeat: repeat;
  font-family: "Roboto Condensed", sans-serif;
  background-position: top;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.menu-component {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3.5rem;
  padding-bottom: 5rem;
  grid-gap: 20px 20px;
  margin: 2%;
  justify-items: center;
  border-radius: 15px;
}
.addItem {
  background-color: limegreen;
  border: none;
  color: white;
  font-size: 1.25rem;
  height: fit-content;
  padding: 1rem;
  border-radius: 8px;
}
.reset {
  background-color: red;
  border: none;
  color: white;
  font-size: 1.25rem;
  height: fit-content;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 8px;
}
</style>
