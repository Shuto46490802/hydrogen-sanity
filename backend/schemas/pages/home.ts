import {defineField} from 'sanity'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    {
      name: 'sections',
      title: 'Sections',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // sections
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      group: 'sections',
      of: [{type: 'section.heroSlider'}],
    }),

    // seo
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.home',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: 'Index',
        title: 'Home',
      }
    },
  },
}
