import type { CollectionConfig } from 'payload'

export const somethingsSlug = 'somethings'

export const SomethingCollection: CollectionConfig = {
  slug: somethingsSlug,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'mediaRelation',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
