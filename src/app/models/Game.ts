import type { Country } from './Country'
import type { Genre } from './Genre'
import type { Comment } from './Comment'

export interface Game {
  id: number
  name: string
  price: number
  publishedAt: string
  description: string
  thumbnailCover: string
  thumbnailLogo: null | string
  slug: string
  countries?: Country[]
  comments?: Comment[]
  genres?: Genre[]
  publisher?: {
    id: number
    name: string
    slug: string
  }
  totalDownvotes?: number
  totalUpVotes?: number
  averageRank?: number
}
