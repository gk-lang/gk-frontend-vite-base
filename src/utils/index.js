export const getCssVar = (prop, dom = document.documentElement) => {
  return getComputedStyle(dom).getPropertyValue(prop);
};
export const setCssVar = (prop, val, dom = document.documentElement) => {
  dom.style.setProperty(prop, val);
};
/**
 * @param str 需要转下划线的驼峰字符串
 * @returns 字符串下划线
 */
export const humpToUnderline = (str) => {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
};
/**
 * @param str 需要转驼峰的下划线字符串
 * @returns 字符串驼峰
 */
export const underlineToHump = (str) => {
  if (!str) return "";
  return str.replace(/\-(\w)/g, (_, letter) => {
    return letter.toUpperCase();
  });
};
/**
 * 驼峰转横杠
 */
export const humpToDash = (str) => {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
};
/**
 * 查找数组对象的某个下标
 * @param {Array} ary 查找的数组
 * @param {Functon} fn 判断的方法
 */
export const findIndex = (ary, fn) => {
  if (ary.findIndex) {
    return ary.findIndex(fn);
  }
  let index = -1;
  ary.some((item, i, ary) => {
    const ret = fn(item, i, ary);
    if (ret) {
      index = i;
      return ret;
    }
  });
  return index;
};
