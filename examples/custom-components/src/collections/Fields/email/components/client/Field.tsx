'use client'
import type { EmailFieldClientComponent } from 'payload'

import { EmailField } from '@payloadcms/ui'
import React from 'react'

export const CustomEmailFieldClient: EmailFieldClientComponent = (props) => {
  const { field } = props

  return <EmailField field={field} />
}