import {defineField} from 'sanity'

export default defineField({
  name: 'heroSlider.slide',
  title: 'Slide',
  type: 'object',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'layout', title: 'Layout'},
  ],
  fields: [
    // Content
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'desktopImage',
      title: 'Desktop Image',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'ctas',
      title: 'CTAs',
      type: 'array',
      of: [{type: 'text'}],
      group: 'content',
    }),

    // Layout
    defineField({
      name: 'verticalAlignment',
      title: 'Vertical Alignment',
      type: 'string',
      options: {
        list: [
          {
            title: 'Top',
            value: 'top',
          },
          {
            title: 'Center',
            value: 'center',
          },
          {
            title: 'Bottom',
            value: 'bottom',
          },
        ],
        layout: 'dropdown',
      },
      initialValue: 'center',
      group: 'layout',
    }),
    defineField({
      name: 'horizontalAlignment',
      title: 'Horizontal Content Alignment',
      type: 'string',
      options: {
        list: [
          {
            title: 'Left',
            value: 'left',
          },
          {
            title: 'Center',
            value: 'center',
          },
          {
            title: 'Right',
            value: 'right',
          },
        ],
        layout: 'dropdown',
      },
      initialValue: 'left',
      group: 'layout',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'desktopImage',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      }
    },
  },
})
