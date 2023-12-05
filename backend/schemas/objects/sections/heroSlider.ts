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
    defineField({
      name: 'autoscroll',
      title: 'Autoscroll?',
      type: 'boolean',
    }),
    defineField({
      name: 'scrollSpeed',
      title: 'Scroll Speed',
      type: 'number',
      description: 'Miliseconds',
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
