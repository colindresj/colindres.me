import Container from '../components/container'
import Thoughts from '../components/thoughts'
import Books from '../components/books'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Footer from '../components/footer'
import { getAllPosts, getAllBooks } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Book from '../interfaces/book'

type Props = {
  allPosts: Post[]
  allBooks: Book[]
}

export default function Index({ allPosts, allBooks }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`${CMS_NAME}`}</title>
        </Head>
        <Container>
          <>
            <Intro />
            {allPosts.length > 0 && <Thoughts posts={allPosts} />}
            {allBooks.length > 0 && <Books books={allBooks} />}
            <Footer />
          </>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts()
  const allBooks = await getAllBooks()

  return {
    props: { allPosts, allBooks },
    revalidate: 30 // In seconds
  }
}
