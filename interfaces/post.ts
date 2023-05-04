import type Block from './block'

type PostType = {
  slug: string
  title: string
  date: string
  contentBlocks: Block[]
}

export default PostType
