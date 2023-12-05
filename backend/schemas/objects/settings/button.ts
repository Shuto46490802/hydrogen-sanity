import {defineField} from 'sanity'

export default defineField({
  name: 'button.style',
  title: 'Button Style',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'text',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
    }),
    defineField({
      name: 'textHoverColor',
      title: 'Text Hover Color',
      type: 'color',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'color',
    }),
    defineField({
      name: 'bgHoverColor',
      title: 'Background Hover Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare(selection) {
      return {
        title: selection.label
      }
    },
  },
})
