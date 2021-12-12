<template>
  <div id="app">
    <customSelect
        :options="options"
        :disabled="false"
    />
    <customSelect
        :options="options"
        :disabled="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import customSelect from "@/components/customSelect.vue";

export default Vue.extend({
  name: "App",
  components: {
    customSelect,
  },
  data: () => {
    return {
      options: [
        {name: 'Option 1', id: 1},
        {name: 'Option 2', id: 2},
        {name: 'Option 3', id: 3},
        {name: 'Option 4', id: 4},
      ]
    };
  },
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
