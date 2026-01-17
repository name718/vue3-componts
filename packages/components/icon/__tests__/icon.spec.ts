import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Icon from '../src/icon.vue'

describe('Icon', () => {
  it('renders properly', () => {
    const wrapper = mount(Icon, {
      slots: {
        default: '<svg></svg>'
      }
    })
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('renders with custom color', () => {
    const wrapper = mount(Icon, {
      props: {
        color: 'red'
      },
      slots: {
        default: '<svg></svg>'
      }
    })

    const iconElement = wrapper.find('.z-icon')
    expect(iconElement.attributes('style')).toContain('color: red')
  })

  it('renders with custom size', () => {
    const wrapper = mount(Icon, {
      props: {
        size: 24
      },
      slots: {
        default: '<svg></svg>'
      }
    })

    const iconElement = wrapper.find('.z-icon')
    expect(iconElement.attributes('style')).toContain('font-size: 24px')
  })

  it('renders with both color and size', () => {
    const wrapper = mount(Icon, {
      props: {
        color: 'blue',
        size: 32
      },
      slots: {
        default: '<svg></svg>'
      }
    })

    const iconElement = wrapper.find('.z-icon')
    const style = iconElement.attributes('style')
    expect(style).toContain('color: blue')
    expect(style).toContain('font-size: 32px')
  })

  it('has correct class name', () => {
    const wrapper = mount(Icon)
    expect(wrapper.classes()).toContain('z-icon')
  })
})
