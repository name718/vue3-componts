import { ExtractPropTypes, PropType } from 'vue'

export const checkboxProps = {
  moduleValue: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>
  },
  disabled: {
    type: Boolean
  },
  indeterminate: {
    type: Boolean
  },
  label: {
    type: String as PropType<string>
  }
} as const

export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>
export const checkboxEmits = {
  'update:modelValue': (value: string | boolean | number) =>
    typeof value === 'boolean',
  change: (value: boolean) => typeof value === 'boolean'
}

export type CheckboxEmits = typeof checkboxEmits
