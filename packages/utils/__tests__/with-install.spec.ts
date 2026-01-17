import { describe, it, expect, vi } from 'vitest'
import { withInstall } from '../with-install'
import { createApp } from 'vue'

describe('withInstall', () => {
  it('adds install method to component', () => {
    const TestComponent = {
      name: 'TestComponent',
      template: '<div>Test</div>'
    }

    const ComponentWithInstall = withInstall(TestComponent)
    
    expect(ComponentWithInstall.install).toBeDefined()
    expect(typeof ComponentWithInstall.install).toBe('function')
  })

  it('registers component globally when installed', () => {
    const TestComponent = {
      name: 'TestComponent',
      template: '<div>Test</div>'
    }

    const ComponentWithInstall = withInstall(TestComponent)
    const app = createApp({})
    const componentSpy = vi.spyOn(app, 'component')

    ComponentWithInstall.install(app)
    
    expect(componentSpy).toHaveBeenCalledWith('TestComponent', TestComponent)
  })

  it('preserves original component properties', () => {
    const TestComponent = {
      name: 'TestComponent',
      props: ['value'],
      template: '<div>{{ value }}</div>'
    }

    const ComponentWithInstall = withInstall(TestComponent)
    
    expect(ComponentWithInstall.name).toBe('TestComponent')
    expect(ComponentWithInstall.props).toEqual(['value'])
  })
})
