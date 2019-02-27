const option = require('loader-utils')
/**
 * 临时解决方案,后期需要把'//'处理掉
 * @param {Object} source 键值对
 */
module.exports = function (source) {
  const options = option.getOptions(this);
  Object.keys(options).forEach(item=>{
    const reg = new RegExp('//'+item,'g')
    if(reg.test(source)){
      source = source.replace(reg, options[item]);
    }
  })
  return source;
}