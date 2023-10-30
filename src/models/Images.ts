import { z } from 'zod'

// definindo o tipo de cada informação que contem o meu formulário "BasicImageSchema"
const BasicImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
})

// definindo o tipo de cada informação que contem o meu formulário "PhotoSchema"
export const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
})

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  photos: z.array(PhotoSchema),
})

// definindo type Photo, com base no schema "PhotoSchema"
export type Photo = z.infer<typeof PhotoSchema>
export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>
