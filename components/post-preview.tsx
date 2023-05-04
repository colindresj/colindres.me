import Link from 'next/link'

type Props = {
  title: string
  slug: string
}

const PostPreview = ({ title, slug }: Props) => {
  return (
    <div>
      <h3 className="mb-3">
        <Link
          as={`/thoughts/${slug}`}
          href="/thoughts/[slug]"
          className="border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg"
        >
          {title}
        </Link>
      </h3>
    </div>
  )
}

export default PostPreview
