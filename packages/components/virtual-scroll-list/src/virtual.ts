import { updateType, VirtualOptions, RangeOptions } from './props'

const enum CALC_TYPE {
  INIT = 'INIT',
  FIXED = 'FIXED',
  DYNAMIC = 'DYNAMIC'
}
export const initVirtual = (param: VirtualOptions, update: updateType) => {
  const offsetValue = 0
  let calcType = CALC_TYPE.INIT
  const sizes = new Map<string | number, number>()
  let fixedSizeVal = 0
  let firstRangeAvg = 0
  const range: RangeOptions = {
    start: 0,
    end: 0,
    padFront: 0,
    padBehind: 0
  }
  function isFixed() {
    return calcType === CALC_TYPE.FIXED
  }
  function getEstimateSize() {
    return isFixed() ? fixedSizeVal : firstRangeAvg || param.estimateSize
  }
  function getIndexOffset(idx: number) {
    if (!idx) return 0
    let offset = 0
    for (let i = 0; i < idx; i++) {
      let indexSize = sizes.get(param.uniqueIds[i])
      offset += typeof indexSize === 'number' ? indexSize : getEstimateSize()
    }
    return offset
  }
  function getPadFront() {
    if (isFixed()) {
      return fixedSizeVal * range.start
    } else {
      getIndexOffset(range.start)
    }
    return getEstimateSize() * range.start
  }

  function getPadBehind() {
    return (param.uniqueIds.length - range.end - 1) * getEstimateSize()
  }
  function updateRange(start: number, end: number) {
    range.start = start
    range.end = end
    range.padFront = getPadFront()
    range.padBehind = getPadBehind()
    update({ ...range })
  }
  function checkRange(start: number, end: number) {
    const total = param.uniqueIds.length
    const keeps = param.keeps
    if (total < keeps) {
      start = 0
      end = total - 1
    } else if (end - start < keeps - 1) {
      start = Math.max(0, end - keeps + 1)
    }
    updateRange(start, end)
  }
  function getScrollOvers() {
    if (isFixed()) return Math.floor(offsetValue / getEstimateSize())
    let low = 0
    let hight = param.uniqueIds.length
    let middle = 0
    let middleOffset = 0
    while (low <= hight) {
      middle = low + Math.floor((hight - low) / 2)
      if (middleOffset === offsetValue) {
        return middle
      } else if (middleOffset < offsetValue) {
        low = middle + 1
      } else if (middleOffset > offsetValue) {
        hight = middle + 1
      }
    }
    return low > 0 ? --low : 0
  }
  function getEndByStart(start: number) {
    const computeEnd = start + param.keeps - 1
    const end = Math.min(computeEnd, param.uniqueIds.length - 1)
    return end
  }
  function handleFront() {
    const overs = getScrollOvers()
    if (overs > range.start) return
    const start = Math.max(overs - param.buffer, 0)
    checkRange(start, getEndByStart(start))
  }
  function handleBehind() {
    const overs = getScrollOvers()
    if (overs < range.start + param.buffer) return
    checkRange(overs, getEndByStart(overs))
  }
  function handleScroll(offset: number) {
    debugger
    const direction = offset < offsetValue ? 'FRONT' : 'BEHIND'
    if (direction === 'FRONT') {
      handleFront()
    } else if (direction === 'BEHIND') {
      handleBehind()
    }
  }
  function saveSize(id: string | number, size: number) {
    sizes.set(id, size)
    if (calcType === CALC_TYPE.INIT) {
      fixedSizeVal = size
      calcType = CALC_TYPE.FIXED
    } else if (calcType === CALC_TYPE.FIXED && fixedSizeVal !== size) {
      calcType = CALC_TYPE.DYNAMIC
      fixedSizeVal = 0
    }
    if (calcType === CALC_TYPE.DYNAMIC) {
      if (sizes.size < Math.min(param.keeps, param.uniqueIds.length)) {
        firstRangeAvg = Math.round(
          [...sizes.values()].reduce((acc, val) => acc + val, 0) / sizes.size
        )
      }
    }
  }
  checkRange(0, param.keeps - 1)
  return { handleScroll, saveSize }
}
