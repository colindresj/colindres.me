import { useRouter } from 'next/router'
import Link from 'next/link'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Waves from '../../components/waves'
import Head from 'next/head'
import { CMS_NAME, REVALIDATE_SEC } from '../../lib/constants'
import type PostType from '../../interfaces/post'

type Props = {
  post: PostType
  preview?: boolean
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <section className="my-16">
          <Link href="/">
            <Waves />
          </Link>
        </section>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="pb-16">
              <Head>
                <title>{`${post.title} | ${CMS_NAME}`}</title>
              </Head>
              <PostHeader title={post.title} date={post.date} />
              <PostBody content={post.contentBlocks} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug)

  return {
    props: { post },
    revalidate: REVALIDATE_SEC
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
