import { isNotionClientError } from '@notionhq/client'

import {
  getPostFromNotionBySlug,
  getPostsFromNotion,
  getBooksFromNotion
} from './notion'

export async function getPostBySlug(slug: string) {
  let post

  try {
    post = await getPostFromNotionBySlug(slug)
  } catch (err: unknown) {
    if (isNotionClientError(err)) {
      console.error(err)
      post = null
    }
  }

  return post
}

export async function getAllPosts() {
  let posts

  try {
    posts = await getPostsFromNotion()
  } catch (err: unknown) {
    if (isNotionClientError(err)) {
      console.error(err)
      posts = []
    }
  }

  return posts
}

export async function getAllBooks() {
  let books

  try {
    books = await getBooksFromNotion()
  } catch (err: unknown) {
    if (isNotionClientError(err)) {
      console.error(err)
      books = []
    }
  }

  return books
}
