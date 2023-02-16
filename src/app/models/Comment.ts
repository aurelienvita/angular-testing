export interface Comment {
  id: number
  content: string
  upVotes: number
  downVotes: number
  rank: number
  createdAt: number
  account: {
    nickname: string
    slug: string
  }
}
