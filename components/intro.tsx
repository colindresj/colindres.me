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
          I'm currently a Partner at{' '}
          <a
            href="https://alleycorp.com"
            className="border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg"
          >
            AlleyCorp
          </a>
          , an NYC-based venture studio and investment firm. I spend a lot of
          my time working with founders and thinking about new startups. Before
          AlleyCorp, I worked as a software engineer at a few venture-backed
          early-stage companies. I was on the founding team of Workframe
          (acquired NYSE:NMRK), an AlleyCorp incubation.
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
