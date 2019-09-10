// 设置默认溢出显示数量
var spillDataNum = 10;

// 设置隐藏函数
var timeout = false;
let setRowDisableNone = function (topNum, showRowNum, binding) {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    binding.value.call(null, topNum, topNum + showRowNum + spillDataNum);
  });
};
let lastScrollTop;
let lastEndIndex;

export default {
  name: 'loadmore',
  componentUpdated: function (el, binding, vnode, oldVnode) {
    setTimeout(() => {
      const dataSize = vnode.data.attrs['data-size'];
      const oldDataSize = oldVnode.data.attrs['data-size'];
      if(dataSize === oldDataSize){
        return;
      }
      const selectWrap = el.querySelector('.el-table__body-wrapper');
      const selectTable = selectWrap.querySelector('table');
      const selectTbody = selectWrap.querySelector('table tbody');
      const selectRow = selectWrap.querySelector('table tr');
      if (!selectRow) {
        return;
      }
      const rowHeight = selectRow.clientHeight;
      let showRowNum = Math.round(selectWrap.clientHeight / rowHeight);
      selectTable.style.height = `${rowHeight * dataSize}px`;
      let createElementTRHeight = (dataSize - showRowNum - spillDataNum) * rowHeight;

      let startRow = selectTbody.querySelector('#startRow');
      let endRow = selectTbody.querySelector('#endRow');
      if(!startRow) {
        const createStartRowElement = document.createElement('tr');
        createStartRowElement.setAttribute('id', 'startRow');
        createStartRowElement.setAttribute('style', `height: ${lastScrollTop - spillDataNum * rowHeight > 0 ? lastScrollTop - spillDataNum * rowHeight : 0}px;`);
        selectTbody.prepend(createStartRowElement);
        startRow = selectTbody.querySelector('#startRow');
      }
      if(!endRow) {
        const createEndRowElement = document.createElement('tr');
        createEndRowElement.setAttribute('id', 'endRow');
        createEndRowElement.setAttribute('style', `height: ${createElementTRHeight}px;`);
        selectTbody.append(createEndRowElement);
        endRow = selectTbody.querySelector('#endRow');
      }
      

      // 监听滚动后事件
      selectWrap.addEventListener('scroll', function () {
        let topPx = this.scrollTop - spillDataNum * rowHeight;
        // let topNum = Math.round(topPx / rowHeight);
        let topNum
        if(lastScrollTop >= this.scrollTop) {
          topNum = Math.floor(topPx / rowHeight);
        } else {
          topNum = Math.ceil(topPx / rowHeight);
        }
        lastScrollTop = this.scrollTop;
        console.log(showRowNum, "=== showRowNum ===");
        let minTopNum = dataSize - spillDataNum - showRowNum;
        if (topNum > minTopNum) {
          topNum = minTopNum;
        }
        if (topNum < 0) {
          topNum = 0;
          topPx = 0;
        }
        let endIndex = topNum + showRowNum + spillDataNum;
        console.log(endIndex, "endIndex");
        let endNum = dataSize - (endIndex + 1) > 0 ? dataSize - (endIndex + 1) : 0;
        endRow.style.height = `${(endNum) * rowHeight}px`;
        startRow.style.height = `${topNum * rowHeight}px`;
        
        if(endIndex == lastEndIndex && endIndex == dataSize) {
          return
        }
        lastEndIndex = endIndex;
        setRowDisableNone(topNum, showRowNum, binding);
      })
    });
  }
};