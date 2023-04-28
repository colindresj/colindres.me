import { POSTS_DB_ID, BOOKS_DB_ID } from './constants'
import PostType from '../interfaces/post'
import BookType from '../interfaces/book'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env['NOTION']
})

function notionPostToNextPost(post): PostType {
  const props = post.properties

  return {
    title: props?.Name?.title[0]?.plain_text || '',
    date: props['Published Date']?.date.start || '',
    slug: props?.Slugs?.rollup?.array.pop()?.title[0]?.plain_text || '',
    contentBlocks: []
  }
}

function notionBookToNextBook(book): BookType {
  const props = book.properties

  return {
    title: props?.Name?.title[0]?.plain_text || '',
    author: props?.Author?.rich_text[0]?.plain_text || '',
    link: props?.Link?.url || ''
  }
}

export async function getPostsFromNotion() {
  const res = await notion.databases.query({
    database_id: POSTS_DB_ID,
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'Published'
          }
        },
        {
          property: 'Permalinks',
          relation: {
            is_not_empty: true
          }
        }
      ]
    },
    sorts: [
      {
        property: 'Published Date',
        direction: 'descending'
      }
    ]
  })

  if (!res.results.length) return []

  return res.results.map(notionPostToNextPost)
}

export async function getPostFromNotionBySlug(slug: string) {
  const res = await notion.databases.query({
    database_id: POSTS_DB_ID,
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'Published'
          }
        },
        {
          property: 'Slugs',
          rollup: {
            any: {
              rich_text: {
                contains: slug
              }
            }
          }
        }
      ]
    }
  })

  const post = res.results[0]

  if (!post) return null

  const res2 = await notion.blocks.children.list({
    block_id: post.id,
    page_size: 100
  })

  const postWithBlocks = notionPostToNextPost(post)

  if (res2?.results?.length) {
    postWithBlocks.contentBlocks = res2?.results
  }

  return postWithBlocks
}

export async function getBooksFromNotion() {
  const res = await notion.databases.query({
    database_id: BOOKS_DB_ID,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending'
      }
    ]
  })

  if (!res?.results?.length) return []

  return res.results.map(notionBookToNextBook)
}
