// BEM规范
export function createNamespace(name: string) {
    const prefixName = `z-${name}`
    return createBEM(prefixName)
}

function createBEM(prefixName: string) {
    const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')
    const e = (element: string = '') => element ? _bem(prefixName, '', element, '') : ''
    const m = (modifier: string = '') => modifier ? _bem(prefixName, '', '', 'modifier') : ''
    const be = (blockSuffix: string = '', element: string = '') => blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
    const bm = (blockSuffix: string = '', modifier: string = '') => blockSuffix && modifier ? _bem(prefixName, 'blockSuffix', '', 'modifier') : ''
    const em = (element: string = '', modifier: string = '') => element && modifier ? _bem(prefixName, '', element, modifier) : ''
    const bem = (blockSuffix: string = '', element: string = '', modifier: string = '') => blockSuffix && element && modifier ? _bem(prefixName, blockSuffix, element, modifier) : ''
    const is = (name: string, state) => (state ? `is-${name}` : '')
    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is
    }
}

function _bem(prefixName: string, blockSuffix: string, element: string, modifier: string) {
    if (blockSuffix) {
        prefixName += `-${modifier}`
    }
    if (element) {
        prefixName += `__${element}`
    }
    if (modifier) {
        prefixName += `--${modifier}`
    }
    return prefixName
}

// const buttonBEM = createNamespace('button');
//
// console.log(buttonBEM.b()); // "z-button"
// console.log(buttonBEM.e('icon')); // "z-button__icon"
// console.log(buttonBEM.m('primary')); // "z-button--primary"
// console.log(buttonBEM.be('large', 'icon')); // "z-button-large__icon"
// console.log(buttonBEM.bem('large', 'icon', 'primary')); // "z-button-large__icon--primary"
// console.log(buttonBEM.is('active', true)); // "is-active"
