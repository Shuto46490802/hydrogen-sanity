import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('button')
    .child(S.editor().title('Button').schemaType('button').documentId('button')),
)
