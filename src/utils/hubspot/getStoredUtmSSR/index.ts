'use server'

import { getMiddlewareData } from '../getMiddlewareData'

export const getStoredUtmSSR = async () => {
  const { cookiesUtmStoredData } = await getMiddlewareData()

  return cookiesUtmStoredData
}
