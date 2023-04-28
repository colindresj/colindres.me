const Footer = () => {
  return (
    <section className="mt-16 mb-16">
      <ul className="flex flex-wrap">
        <li>Contact</li>
        <li className="before:content-['⇝'] before:ml-2 before:mr-2">
          <a
            href="mailto:&#106;&#111;&#114;&#103;&#101;&#064;&#097;&#108;&#108;&#101;&#121;&#099;&#111;&#114;&#112;&#046;&#099;&#111;&#109;"
            className="border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg"
          >
            Email
          </a>
        </li>
        <li className="before:content-['⇝'] before:ml-2 before:mr-2">
          <a
            href="https://github.com/colindresj"
            className="border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg"
          >
            Github
          </a>
        </li>
        <li className="before:content-['⇝'] before:ml-2 before:mr-2">
          <a
            href="https://twitter.com/colindresj_"
            className="border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg"
          >
            Twitter
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Footer
