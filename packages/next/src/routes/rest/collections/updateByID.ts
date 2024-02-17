import httpStatus from 'http-status'

import { isNumber } from 'payload/utilities'
import { updateByIDOperation } from 'payload/operations'
import { CollectionRouteHandlerWithID } from '../types'

export const updateByID: CollectionRouteHandlerWithID = async ({ req, collection, id }) => {
  const { searchParams } = req
  const depth = searchParams.get('depth')
  const autosave = searchParams.get('autosave') === 'true'
  const draft = searchParams.get('draft') === 'true'

  const doc = await updateByIDOperation({
    id,
    autosave,
    collection,
    data: req.data,
    depth: isNumber(depth) ? Number(depth) : undefined,
    draft,
    req,
  })

  let message = req.t('general:updatedSuccessfully')

  if (draft) message = req.t('version:draftSavedSuccessfully')
  if (autosave) message = req.t('version:autosavedSuccessfully')

  return Response.json(
    {
      message,
      doc,
    },
    {
      status: httpStatus.OK,
    },
  )
}