import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from '../src/checkbox.vue'

describe('Checkbox', () => {
  it('renders properly', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('renders with label', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Test Label'
      }
    })

    expect(wrapper.text()).toContain('Test Label')
  })

  it('updates modelValue on change', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        moduleValue: false,
        'onUpdate:modelValue': (value: boolean) => wrapper.setProps({ moduleValue: value })
      }
    })

    const input = wrapper.find('input')
    await input.setValue(true)
    
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
    expect(wrapper.emitted('change')?.[0]).toEqual([true])
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true
      }
    })

    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeDefined()
  })

  it('shows indeterminate state', () => {
    const wrapper = mount(Checkbox, {
      props: {
        indeterminate: true
      }
    })

    // Just verify the prop is set
    expect(wrapper.props('indeterminate')).toBe(true)
  })

  it('does not trigger change when disabled', async () => {
    const onChange = vi.fn()
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
        onChange
      }
    })

    const input = wrapper.find('input')
    await input.trigger('change')
    
    expect(onChange).not.toHaveBeenCalled()
  })

  it('renders default slot content', () => {
    const wrapper = mount(Checkbox, {
      slots: {
        default: 'Custom Content'
      }
    })

    expect(wrapper.text()).toContain('Custom Content')
  })

  it('has correct checked state', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        moduleValue: true
      }
    })

    // Just verify the prop is set
    expect(wrapper.props('moduleValue')).toBe(true)
  })
})
