import type { Block } from 'payload'

export const FormBlock: Block = {
  slug: 'form',
  interfaceName: 'FormBlock',
  labels: {
    singular: 'Form',
    plural: 'Forms',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'fields',
      type: 'array',
      fields: [
        {
          name: 'fieldType',
          type: 'select',
          required: true,
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Textarea', value: 'textarea' },
            { label: 'Select', value: 'select' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: {
            description: 'Field name for form submission',
          },
        },
        {
          name: 'required',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'placeholder',
          type: 'text',
        },
        {
          name: 'options',
          type: 'textarea',
          admin: {
            description: 'For select fields, one option per line',
            condition: (_, siblingData) => siblingData?.fieldType === 'select',
          },
        },
      ],
    },
    {
      name: 'submitButtonLabel',
      type: 'text',
      defaultValue: 'Submit',
    },
  ],
}



