import {DatabaseIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.featuredProducts',
  title: 'Featured Products',
  type: 'object',
  icon: DatabaseIcon,
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
      description: "Automatically display collection's title if empty",
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{type: 'collection'}],
      group: 'content',
    }),
  ],
  preview: {
    select: {
      collection: 'collection',
    },
    prepare(selection) {
      return {
        title: `Featured Products`,
      }
    },
  },
})
