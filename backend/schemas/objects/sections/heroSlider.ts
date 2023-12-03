import {defineField} from 'sanity'

export default defineField({
  name: 'section.heroSlider',
  title: 'Hero Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'slide',
      title: 'Slide',
      type: 'array',
      of: [{type: 'heroSlider.slide'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Slider',
      }
    },
  },
})
