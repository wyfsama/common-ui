<template>
  <CommonTable colDrop :tableData="tableData" :tableCol="cols"></CommonTable>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { cols } from "./tableCfg/baseCols.ts";

const tableData = reactive([
  {
    id: 1,
    date: "2016-05-03",
    name: "小满",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "T小屋",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "小红",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "小沈",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
</script>

<style scoped>
</style>