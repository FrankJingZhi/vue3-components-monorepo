/**
 * 编写样式需要遵循的BEM规范
 * B: block 代码块  w-icon-box
 * E: element 元素  w-icon-box__button
 * M: modifier 装饰 w-icon-box__button--disabled
 * state 状态 is-checked
 */

function createBEM(
  prefixName?: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `--${element}`
  }
  if (modifier) {
    prefixName += `__${modifier}`
  }
  return prefixName
}

function _bem(prefixName: string) {
  const b = (blockSuffix?: string) => createBEM(prefixName, blockSuffix, '', '')
  const e = (element?: string) => createBEM(prefixName, '', element, '')
  const m = (modifier?: string) => createBEM(prefixName, '', '', modifier)
  const be = (blockSuffix?: string, element?: string) =>
    createBEM(prefixName, blockSuffix, element, '')
  const bm = (blockSuffix?: string, modifier?: string) =>
    createBEM(prefixName, blockSuffix, '', modifier)
  const em = (element?: string, modifier?: string) =>
    createBEM(prefixName, '', element, modifier)
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    createBEM(prefixName, blockSuffix, element, modifier)
  const is = (state: boolean, name?: string) => (state ? `is-${name}` : '')
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  }
}

export function createNamespace(name: string) {
  const prefixName = `w-${name}`
  return _bem(prefixName)
}

const bem = createNamespace('icon')
console.log(bem.b('box'))
console.log(bem.e('button'))
console.log(bem.m('disabled'))

console.log(bem.be('box', 'button'))
console.log(bem.bm('box', 'disabled'))
console.log(bem.em('button', 'disabled'))

console.log(bem.bem('box', 'button', 'disabled'))

console.log(bem.is(true, 'disabled'))
