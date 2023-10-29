import type { ImagesResult } from '@/models/Images'
import { ImagesSchemaWithPhotos } from '@/models/Images'
import env from './env'

export default async function fetchImages(
  url: string,
): Promise<ImagesResult | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    })
    if (!res.ok) {
      throw new Error('Fetch images error!\n')
    }
    const imagesResults: ImagesResult = await res.json()
    // resultado vem em formato json
    console.log(imagesResults)
    // Parse data com zod schema que contem os dados do meu formulário
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)

    if (parsedData.total_results === 0) return undefined

    return parsedData
  } catch (e) {
    // Will show in terminal console
    if (e instanceof Error) console.log(e.stack)
  }
}