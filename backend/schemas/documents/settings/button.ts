import {defineField} from 'sanity'

export default {
  name: 'button',
  title: 'Button',
  type: 'document',
  fields: [
    // sections
    defineField({
      name: 'styles',
      title: 'Styles',
      type: 'array',
      of: [{type: 'button.style'}],
    }),
  ],
  //   preview: {
  //     prepare() {
  //       return {
  //         // media: icon,
  //         subtitle: 'Index',
  //         title: 'Home',
  //       }
  //     },
  //   },
}
