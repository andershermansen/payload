import type { CollectionConfig } from 'payload'

import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'text',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'richText',
      type: 'richText',
    },
    {
      name: 'richText2',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              {
                slug: 'testblock',
                fields: [
                  {
                    name: 'testfield',
                    type: 'text',
                  },
                ],
              },
            ],
          }),
        ],
      }),
    },
    {
      name: 'parentCategory',
      type: 'relationship',
      filterOptions: () => {
        return {
          parent: {
            exists: false,
          },
        }
      },
      label: 'Main category',
      relationTo: 'categories',
    },
    {
      name: 'subCategories',
      type: 'relationship',
      filterOptions: ({ siblingData }: FilterOptionsProps<any>) => {
        const data = siblingData as { parentCategory?: string }
        const parentCategory = data?.parentCategory
        if (parentCategory) {
          return {
            parent: {
              equals: parentCategory,
            },
          }
        }
        return false
      },
      hasMany: true,
      label: 'Sub categories',
      relationTo: 'categories',
    },
    // {
    //   type: 'row',
    //   fields: [],
    // },
    // {
    //   name: 'associatedMedia',
    //   type: 'upload',
    //   access: {
    //     create: () => true,
    //     update: () => false,
    //   },
    //   relationTo: mediaSlug,
    // },
  ],
  versions: {
    drafts: true,
  },
}
