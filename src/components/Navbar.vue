<template>
  <div class="floating-nav">
    <header class="flex-container">
      <!-- <div class="Navbar"> -->
      <img src="/img/Lucky_duck1.png" alt="Lucky Duck" @click="secretMenu" />

      <nav class="flex-container">
        <div
          class="editormode"
          @click="editormode"
          v-if="$store.state.editorMode"
        >
          <i class="fa-solid fa-lock fa-2x"></i>
        </div>
        <div id="allergies-icon-container" class="flex-container">
          <AllergenIcon
            v-for="allergen in $store.state.allergens"
            :key="allergen"
            :allergen="allergen"
          />
        </div>

        <div class="dropdown">
          <button
            @click="toggleDropdown"
            class="dropbtn"
            id="dropbtn-allergies"
          >
            {{ $t("navbar.exclude_allergens") }}
            <i class="dropdown-arrow">{{
              dropdown ? "&#x25B2;" : "&#x25BC;"
            }}</i>
          </button>

          <div id="myDropdown" class="dropdown-content" v-if="dropdown">
            <Allergen allergen="wheat" />
            <Allergen allergen="shrimp" />
            <Allergen allergen="egg" />
            <Allergen allergen="fish" />
            <Allergen allergen="peanut" />
            <Allergen allergen="cow" />
          </div>
        </div>

        <img
          class="button-flag"
          :src="`/img/${
            $i18n.locale == 'sv' ? 'sweden.png' : 'united-kingdom.png'
          }`"
          @click="toggleLanguage"
        />
      </nav>
    </header>
  </div>
  <PinForm v-model:open="pinOpen" />
</template>

<script>
import Allergen from "./Allergen.vue";
import PinForm from "./PinForm.vue";
import AllergenIcon from "./AllergenIcon.vue";

import store from "../store";

export default {
  components: { Allergen, AllergenIcon, PinForm },
  data() {
    return {
      dropdown: false,
      pinOpen: false,
      secret: {
        clicks: 0,
        lastClick: 0,
      },
    };
  },
  methods: {
    secretMenu() {
      if (this.lastClick + 2000 < Date.now()) this.clicks = 0;
      this.clicks++;
      this.lastClick = Date.now();
      if (this.clicks > 5) this.pinOpen = true;
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    toggleLanguage() {
      const { $i18n } = this;
      $i18n.locale = $i18n.locale == "sv" ? "en" : "sv";
    },
    editormode() {
      store.commit("editormode", false);
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
header {
  padding: 5px 20px;
  justify-content: space-between;
  height: 56px;
  background-color: white;
}
#allergies-icon-container {
  margin-right: 16px;
}
#allergies-icon-container div {
  color: white;
  height: 35px;
  width: 40px;
  margin-left: 16px;
  padding: 5px;
  border-radius: 5px;
  align-self: center;
  background-color: #d9534f;
  text-align: center;
}
.editormode {
  color: white;
  height: 35px;
  width: 40px;
  margin-left: 16px;
  padding: 5px;
  border-radius: 5px;
  align-self: center;
  background-color: #ffe600;
  text-align: center;
}
.editormode i {
  height: 35px;
  line-height: 35px;
  vertical-align: middle;
}
#allergies-icon-container i {
  height: 35px;
  line-height: 35px;
  vertical-align: middle;
}
.dropbtn {
  max-height: 56px;
  min-width: 200px;
  padding: 16px;
  font-size: 16px;
  background-color: #6c757d;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.button-flag {
  margin: 0 0 0 16px;
  max-height: 30px;
  align-self: center;
  border-radius: 5px;
}
.dropbtn:hover,
.dropbtn:focus {
  background-color: #5c636a;
}
.dropdown {
  align-self: center;
  display: inline-block;
}
.dropdown-content {
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  user-select: none;
}
.dropdown-content div {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
}
.dropdown-content i {
  margin-right: 10px;
}
#myDropdown div:hover {
  background-color: #ddd;
}
#allergies-icon-container div:hover {
  background-color: #b02a37;
}
.showBlock {
  display: block;
}
.hide {
  display: none;
}
.flex-container {
  display: flex;
}
.floating-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
</style>
