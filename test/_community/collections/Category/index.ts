import type { CollectionConfig } from 'payload'

import { createBreadcrumbsField, createParentField } from '@payloadcms/plugin-nested-docs'

export const CategoryCollection: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Navn',
              required: true,
            },
          ],
          label: 'Category',
        },
      ],
    },
    createParentField('categories', {
      name: 'parent',
      admin: {
        position: 'sidebar',
      },
      label: 'Parent Category',
    }),
    createBreadcrumbsField('categories', {
      name: 'breadcrumbs',
      admin: {
        position: 'sidebar',
      },
      label: 'Page Breadcrumbs',
    }),
  ],
  labels: {
    plural: 'Categories',
    singular: 'Category',
  },
}
