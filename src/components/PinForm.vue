<template>
  <div class="wrapper" @click="close" v-if="open" ref="wrapper">
    <div class="form">
      <h1>Editor mode</h1>

      <input type="password" readonly v-model="digits" />

      <div class="keyRow">
        <button @click="key('1')">1</button>
        <button @click="key('2')">2</button>
        <button @click="key('3')">3</button>
      </div>
      <div class="keyRow">
        <button @click="key('4')">4</button>
        <button @click="key('5')">5</button>
        <button @click="key('6')">6</button>
      </div>
      <div class="keyRow">
        <button @click="key('7')">7</button>
        <button @click="key('8')">8</button>
        <button @click="key('9')">9</button>
      </div>
      <div class="keyRow">
        <button @click="clear">x</button>
        <button @click="key('0')">0</button>
        <button @click="login">></button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      digits: "",
    };
  },
  methods: {
    close(event) {
      if (event.target == this.$refs.wrapper) this.$emit("update:open", false);
    },
    key(digit) {
      this.digits += digit;
    },
    clear() {
      this.digits = "";
    },
    login() {
      if (this.digits == "58259") {
        store.commit("editormode", true);
        this.$emit("update:open", false);
      }
      this.digits = "";
    },
  },
  props: ["open"],
  emits: ["update:open"],
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.form {
  border: 3px solid #f1f1f1;
  z-index: 99999;
  background-color: #fff;
  padding: 16px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 96px;
}
button {
  padding: auto;
  font-size: 1.5rem;
  width: 5rem;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0);
  border: none;
}
input {
  width: calc(100% - 16px - 1rem);
  padding: 1rem;
}
</style>
