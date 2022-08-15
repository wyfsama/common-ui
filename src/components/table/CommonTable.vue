<template>
  <el-table :data="tableData" border row-key="id" style="width: 100%">
    <el-table-column v-for="col in tableCol" v-bind="col" width="300" />
  </el-table>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Sortable from "sortablejs";
import useProps from "./useProps";

const props = defineProps(useProps());

onMounted(() => {
  props.rowDrop && rowDrop();
  props.colDrop && colDrop();
});

const rowDrop = () => {
  const tbody = document.querySelector(
    ".el-table__body-wrapper .el-table__body tbody"
  );
  console.log("tbody", tbody);
  Sortable.create(tbody, {
    onEnd({ newIndex, oldIndex }) {
      const currRow = props.tableData.splice(oldIndex, 1)[0];
      props.tableData.splice(newIndex, 0, currRow);
    },
  });
};

const colDrop = () => {
  const tr = document.querySelector(".el-table__header-wrapper tr");
  console.log("tr", tr);
  Sortable.create(tr, {
    onEnd({ newIndex, oldIndex }) {
      const currCol = props.tableCol.splice(oldIndex, 1)[0];
      props.tableCol.splice(newIndex, 0, currCol);
    },
  });
};
</script>