import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return <h1 className="text-xl">{children}</h1>
}

export default PostTitle
