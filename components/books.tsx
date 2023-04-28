import type Book from '../interfaces/book'
import BookLink from './book-link'

type Props = {
  books: Book[]
}

const Books = ({ books }: Props) => {
  return (
    <section className="mt-16 mb-16">
      <h2 className="text-xl">Books</h2>
      <p className="mt-2 mb-4">Books I'm currently reading:</p>
      <div className="ml-4 grid grid-cols-1 gap-x-16gap-y-20">
        {books.map(book => (
          <BookLink
            key={book.title}
            title={book.title}
            author={book.author}
            link={book.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Books
