import type { PropType } from "vue";
import { ICommonTable } from "./interface";

export default function useProps() {
  return {
    /**数据 */
    tableData: {
      type: Array,
      default: [],
    },
    /**列 */
    tableCol: {
      type: Array as PropType<Array<ICommonTable>>,
      default: [],
    },
    rowDrop: {
      type: Boolean,
      default: false,
    },
    colDrop: {
      type: Boolean,
      default: false,
    },
  };
}
