type Props = {
  title: string
  author: string
  link: string
}

const BookLink = ({ title, author, link }: Props) => {
  return (
    <div>
      <h3 className="mb-3">
        <a
          href={link}
          className="border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg"
        >
          {title}
        </a>, {author}
      </h3>
    </div>
  )
}

export default BookLink
