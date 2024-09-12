import Link from 'next/link'
import Waves from '../components/waves'

const Intro = () => {
  return (
    <section className="my-16">
      <Link href="/">
        <Waves />
      </Link>
      <h1 className="text-xl">Jorge Colindres</h1>
      <div className="mt-2">
        <p className="mb-4">
          I'm currently co-founder of <a
            href="https://radical-ai.com"
            className="border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg"
          >
            Radical AI
          </a>. Before that, I was a Partner at <a
            href="https://alleycorp.com"
            className="border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg"
          >
            AlleyCorp
          </a>
          , an NYC-based venture studio and investment firm, and part of the founding team of two other startups.
        </p>
        <p>
          I received a BS and a BA from Boston University, as well as an MBA
          from Dartmouth College.
        </p>
      </div>
    </section>
  )
}

export default Intro
