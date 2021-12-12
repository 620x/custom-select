<template>
  <div id="app">
    <h1>Компонент custom-select:</h1>
    <h3>Custom select</h3>
    <customSelect
        :options="this.$store.state.options"
        :disabled="false"
        @input="onSelectChange($event)"
    />
    <h3>Custom select (disabled)</h3>
    <customSelect
        :options="this.$store.state.options"
        :disabled="true"
        @input="onSelectChange($event)"
    />
    <h3>Custom select</h3>
    <customSelect
        :options="this.$store.state.options"
        :disabled="false"
        @input="onSelectChange($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import customSelect from "@/components/customSelect.vue";
import { Option } from "@/interfaces/custom-select";

export default Vue.extend({
  name: "App",
  components: {
    customSelect,
  },
  methods: {
    onSelectChange(value: Option): void {
      // do something with selected option data
      console.log(value);
    }
  }
});
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
