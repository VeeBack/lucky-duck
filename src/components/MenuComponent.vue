<template>
  <div class="meal">
    <button class="delete" @click="deleteItem" v-if="$store.state.editorMode">
      <i class="fa-solid fa-trash" />
    </button>
    <div class="menu-text">
      <h3>
        <span
          :contenteditable="$store.state.editorMode"
          @input="updateTitle"
          @blur="_updateTitle"
        >
          {{ menuItem.title[$i18n.locale] }}
        </span>
        <br />
        <span
          :contenteditable="$store.state.editorMode"
          @input="updatePrice"
          @blur="_updatePrice"
        >
          {{ menuItem.price }}
        </span>
      </h3>
      <p
        :contenteditable="$store.state.editorMode"
        @input="updateDescription"
        @blur="_updateDescription"
      >
        {{ menuItem.description[$i18n.locale] }}
      </p>
      <p class="ingredients">
        <span class="protein">
          <i class="fa" :class="`fa-${menuItem.protein}`" />
        </span>
        <span class="allergens">
          <i
            v-for="allergen in menuItem.allergens"
            :key="allergen"
            class="fa"
            :class="`fa-${allergen}`"
          />
        </span>
      </p>
      <span class="editorMode" v-if="$store.state.editorMode">
        <select v-model="menuItem.protein">
          <option value="pig">pig</option>
          <option value="cow">cow</option>
          <option value="bird">bird</option>
          <option value="carrot">vegetarian</option>
          <option value="fish">fish</option>
        </select>
        <p>
          <input type="checkbox" v-model="menuItem.allergens" value="wheat" />
          <i class="fa-solid fa-wheat" />
        </p>
        <p>
          <input type="checkbox" v-model="menuItem.allergens" value="shrimp" />
          <i class="fa-solid fa-shrimp" />
        </p>
        <p>
          <input type="checkbox" v-model="menuItem.allergens" value="egg" />
          <i class="fa-solid fa-egg" />
        </p>
        <p>
          <input type="checkbox" v-model="menuItem.allergens" value="fish" />
          <i class="fa-solid fa-fish" />
        </p>
        <p>
          <input type="checkbox" v-model="menuItem.allergens" value="peanut" />
          <i class="fa-solid fa-peanut" />
        </p>
        <p>
          <input type="checkbox" v-model="menuItem.allergens" value="cow" />
          <i class="fa-solid fa-cow" />
        </p>
      </span>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      titleUpdate: 0,
      priceUpdate: 0,
      descriptionUpdate: 0,
    };
  },
  props: ["menuItem"],
  emits: ["update:menuItem"],
  methods: {
    _updateTitle(event) {
      store.commit("updateMenuItem", {
        key: `title.${this.$i18n.locale}`,
        object: this.menuItem,
        value: event.target.innerText,
      });
    },
    updateTitle(event) {
      clearTimeout(this.titleUpdate);
      this.titleUpdate = setTimeout(() => this._updateTitle(event), 2500);
    },
    _updatePrice(event) {
      store.commit("updateMenuItem", {
        key: "price",
        object: this.menuItem,
        value: event.target.innerText,
      });
    },
    updatePrice(event) {
      clearTimeout(this.priceUpdate);
      this.priceUpdate = setTimeout(() => this._updatePrice(event), 2500);
    },
    _updateDescription(event) {
      store.commit("updateMenuItem", {
        key: `description.${this.$i18n.locale}`,
        object: this.menuItem,
        value: event.target.innerText,
      });
    },
    updateDescription(event) {
      clearTimeout(this.descriptionUpdate);
      this.descriptionUpdate = setTimeout(
        () => this._updateDescription(event),
        2500
      );
    },
    deleteItem() {
      store.commit("deleteItem", this.menuItem);
    },
  },
  watch: {
    "menuItem.protein"() {
      store.commit("updateMenuItem", {
        key: "protein",
        object: this.menuItem,
        value: this.menuItem.protein,
      });
    },
  },
};
</script>

<style scoped>
.editorMode p {
  margin: 0;
}
.meal .menu-text {
  width: 220px;
  height: fit-content;
  padding: 0.6rem;
  border-radius: 15px;
  border: 2px solid black;
  box-shadow: 6px 6px 6px 6px rgb(56, 41, 3);
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #fff;
}
.ingredients {
  margin-bottom: 0;
}
.allergens {
  float: right;
  color: rgb(245 0 0);
}
.allergens > * {
  padding-left: 8px;
}
.meal {
  position: relative;
}
.delete {
  background-color: red;
  color: white;
  border: none;
  padding: 1rem;
  position: absolute;
  top: -1rem;
  right: -1rem;
  border-radius: 4px;
}
</style>
