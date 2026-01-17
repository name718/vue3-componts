import { describe, it, expect } from 'vitest'
import { createNamespace } from '../create'

describe('createNamespace', () => {
  it('creates BEM block class', () => {
    const bem = createNamespace('button')
    expect(bem.b()).toBe('z-button')
  })

  it('creates BEM element class', () => {
    const bem = createNamespace('button')
    expect(bem.e('icon')).toBe('z-button__icon')
  })

  it('creates BEM modifier class', () => {
    const bem = createNamespace('button')
    expect(bem.m('primary')).toBe('z-button--primary')
  })

  it('creates BEM state class', () => {
    const bem = createNamespace('button')
    expect(bem.is('disabled', true)).toBe('is-disabled')
    expect(bem.is('disabled', false)).toBe('')
  })

  it('creates BEM state class with condition', () => {
    const bem = createNamespace('button')
    expect(bem.is('disabled', true)).toBe('is-disabled')
    expect(bem.is('disabled', false)).toBe('')
  })

  it('creates BEM block-element-modifier class', () => {
    const bem = createNamespace('button')
    expect(bem.em('icon', 'primary')).toBe('z-button__icon--primary')
  })

  it('handles multiple modifiers', () => {
    const bem = createNamespace('input')
    expect(bem.m('large')).toBe('z-input--large')
    expect(bem.m('disabled')).toBe('z-input--disabled')
  })

  it('handles multiple elements', () => {
    const bem = createNamespace('form')
    expect(bem.e('item')).toBe('z-form__item')
    expect(bem.e('label')).toBe('z-form__label')
  })

  it('creates correct namespace prefix', () => {
    const bem = createNamespace('custom')
    expect(bem.b()).toBe('z-custom')
  })
})
