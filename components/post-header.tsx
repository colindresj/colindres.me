import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}

export default PostHeader
