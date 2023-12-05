/**
 * Desk structure overrides
 */
import {ListItemBuilder, StructureResolver} from 'sanity/desk'
import home from './homeStructure'
import setting from './settingStructure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([home(S, context), S.divider(), setting(S, context)])
