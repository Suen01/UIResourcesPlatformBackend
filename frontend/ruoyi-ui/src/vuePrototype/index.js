
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/system/config";
import { download } from '@/utils/request'
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from "@/utils/ruoyi";


export default function vuePrototype(Vue) {
// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree
}