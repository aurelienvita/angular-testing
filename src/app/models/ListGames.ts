import type { Game } from './Game'

export interface ListGames {
  page: number
  itemsPerPage: number
  total: number
  totalPages: number
  items: Game[]
}
