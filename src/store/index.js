import { createStore } from "vuex";
import defaultMenu from "../defaultMenu";

if (!localStorage.getItem("menu"))
  localStorage.setItem("menu", JSON.stringify(defaultMenu));

export default createStore({
  state: {
    allergens: [],
    /**
     * @type {{
     *  title: {
     *    sv: String,
     *    en: String,
     *  },
     *  description: {
     *    sv: String,
     *    en: String,
     *  },
     *  price: String,
     *  protein: String,
     *  allergens: String[],
     * }[]}
     */
    menu: JSON.parse(localStorage.getItem("menu")),
    proteins: [],
    editorMode: false,
    sort: "name_ascending",
  },
  getters: {},
  mutations: {
    toggleAllergen(state, allergen) {
      if (state.allergens.includes(allergen))
        state.allergens.splice(state.allergens.indexOf(allergen), 1);
      else state.allergens.push(allergen);
    },
    removeAllergen(state, allergen) {
      if (state.allergens.includes(allergen))
        state.allergens.splice(state.allergens.indexOf(allergen), 1);
    },
    addAllergen(state, allergen) {
      if (!state.allergens.includes(allergen)) state.allergens.push(allergen);
    },
    toggleProtein(state, protein) {
      if (state.proteins.includes(protein))
        state.proteins.splice(state.proteins.indexOf(protein), 1);
      else state.proteins.push(protein);
    },
    editormode(state, payload) {
      state.editorMode = payload;
    },
    updateMenuItem(state, payload) {
      function itterateKey(object, keys, value) {
        console.log;
        if (keys.length == 1) {
          object[keys[0]] = value;
          return;
        }
        itterateKey(object[keys[0]], keys.slice(1), value);
      }
      itterateKey(
        state.menu.find((item) => payload.object == item),
        payload.key.split("."),
        payload.value
      );
      localStorage.setItem("menu", JSON.stringify(state.menu));
    },
    newItem(state) {
      state.menu.push({
        title: {
          sv: "Nytt alternativ",
          en: "New item",
        },
        description: {
          sv: "Detta är ett nytt alternativ på menyn",
          en: "This is a new item on the menu",
        },
        price: "??KR",
        allergens: [],
        protein: "pig",
      });
    },
    deleteItem(state, object) {
      state.menu.splice(state.menu.indexOf(object), 1);
    },
    reset(state) {
      state.menu = defaultMenu;
      localStorage.setItem("menu", JSON.stringify(defaultMenu));
    },
    sort(state, payload) {
      state.sort = payload;
    },
  },
  actions: {},
  modules: {},
});
