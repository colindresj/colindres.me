import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const Thoughts = ({ posts }: Props) => {
  return (
    <section className="mt-16 mb-16">
      <h2 className="text-xl">Thoughts</h2>
      <p className="mt-2 mb-4">
        Occasionally, I'll write about things I find interesting, important, or
        have recently learned:
      </p>
      <div className="ml-4 grid grid-cols-1 gap-x-16gap-y-20">
        {posts.map(post => (
          <PostPreview key={post.slug} title={post.title} slug={post.slug} />
        ))}
      </div>
    </section>
  )
}

export default Thoughts
