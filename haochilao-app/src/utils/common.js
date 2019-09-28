/**
 * 节流
 * @param {*} func 要执行的函数
 * @param {*} delay 延迟的时间ms
 */
export function delayAction (func, delay = 100) {
  var prev = Date.now()
  return () => {
    console.log('22222',this)
    var context = this
    var args = arguments
    var now = Date.now()
    if (now - prev >= delay) {
      func.apply(context, args)
      prev = Date.now()
    }
  }
}