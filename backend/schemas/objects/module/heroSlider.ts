import {ImagesIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.heroSlider',
  title: 'Hero Slider',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
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
