import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import button from './buttonStructure'

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Settings')
    .child(
      S.list()
        .title('Settings')
        .items([button(S, context)]),
    ),
)
