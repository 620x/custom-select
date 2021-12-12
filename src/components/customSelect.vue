<template>
  <div class="custom-select">
    <p class="label" :class="{disabled: disabled}" @click="isDropDown = !isDropDown">{{ selectedOption.length ? selectedOption: placeHolder }}</p>
    <div v-if="isDropDown" class="options">
      <p class="option" v-for="option in options" :key="option.id" @click="setOption(option)">
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Option } from "@/interfaces/custom-select";

export default Vue.extend({
  name: "customSelect",
  props: {
    options: {
      type: Array,
      default() {
        return []
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data: () => {
    return {
      placeHolder: 'Выберите значение',
      isDropDown: false,
      selectedOption: '',
    };
  },
  methods: {
    setOption(option: Option): void {
      this.$emit('input', option);
      this.selectedOption = option.name;
      this.isDropDown = false;
    },
  },
});
</script>

<style lang="less" scoped>
  .custom-select {
    width: 250px;
    .label {
      height: 30px;
      line-height: 30px;
      background-color: #1abc9c;
      color: #FFFFFF;
      text-align: center;
      cursor: pointer;
      &.disabled {
        background-color: #95a5a6;
        pointer-events: none;
      }
      &:hover {
        background-color: #16a085;
      }
    }

    .option {
      width: 100%;
      background-color: #1abc9c;
      color: #FFFFFF;
      text-align: center;
      margin: 0;
      height: 30px;
      line-height: 30px;
      border: 1px solid #FFFFFF;
      cursor: pointer;
      &:hover {
        background-color: #16a085;
      }
    }
  }
</style>
