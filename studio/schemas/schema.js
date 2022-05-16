import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import project from './documents/project.js'
import collaborator from './documents/collaborator.js'
import about from './documents/about.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    project,
    collaborator,
    about
  ]),
})
