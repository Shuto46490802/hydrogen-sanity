import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './desk'
import { colorInput } from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'Shuto Hydrogen',

  projectId: 'g7z3fzjn',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
