import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test Button'
      }
    })
    expect(wrapper.text()).toContain('Test Button')
  })

  it('renders with different types', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info']
    
    types.forEach(type => {
      const wrapper = mount(Button, {
        props: { type: type as any }
      })
      expect(wrapper.find('button').classes()).toContain(`z-button--${type}`)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large']
    
    sizes.forEach(size => {
      const wrapper = mount(Button, {
        props: { size: size as any }
      })
      expect(wrapper.find('button').classes()).toContain(`z-button--${size}`)
    })
  })

  it('handles click events', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: {
        onClick
      }
    })

    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })

    const button = wrapper.find('button')
    expect(button.attributes('disabled')).toBeDefined()
  })

  it('shows loading state', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      }
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('renders round button', () => {
    const wrapper = mount(Button, {
      props: {
        round: true
      }
    })

    // Just verify the component renders
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders with icon slot', () => {
    const wrapper = mount(Button, {
      slots: {
        icon: '<span class="test-icon">Icon</span>'
      }
    })

    expect(wrapper.find('.test-icon').exists()).toBe(true)
  })

  it('does not trigger click when disabled', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: {
        disabled: true,
        onClick
      }
    })

    await wrapper.find('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('does not trigger click when loading', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: {
        loading: true,
        onClick
      }
    })

    await wrapper.find('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('handles mousedown events', async () => {
    const onMousedown = vi.fn()
    const wrapper = mount(Button, {
      props: {
        onMousedown
      }
    })

    await wrapper.find('button').trigger('mousedown')
    expect(onMousedown).toHaveBeenCalledTimes(1)
  })

  it('renders with correct native type', () => {
    const wrapper = mount(Button, {
      props: {
        nativeType: 'submit'
      }
    })

    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })
})
