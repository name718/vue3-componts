import { updateType, VirtualOptions, RangeOptions } from './props'
export const initVirtual = (param: VirtualOptions, update: updateType) => {
  const offsetValue = 0
  const range: RangeOptions = {
    start: 0,
    end: 0,
    padFront: 0,
    padBehind: 0
  }

  function getPadFront() {
    return param.estimateSize * range.start
  }

  function getPadBehind() {
    return (param.uniqueIds.length - range.end - 1) * param.estimateSize
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
  function getSCrollOvers() {
    return Math.floor(offsetValue / param.estimateSize)
  }
  function getEndByStart(start: number) {
    const computeEnd = start + param.keeps - 1
    const end = Math.min(computeEnd, param.uniqueIds.length - 1)
    return end
  }
  function handleFront() {
    const overs = getSCrollOvers()
    if (overs > range.start) return
    const start = Math.max(overs - param.buffer, 0)
    checkRange(start, getEndByStart(start))
  }
  function handleBehind() {
    const overs = getSCrollOvers()
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
  checkRange(0, param.keeps - 1)
  return { handleScroll }
}
