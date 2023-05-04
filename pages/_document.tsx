import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="en"
      className="font-pt text-[18px] slashed-zero diagonal-fractions linining-num bg-day-bg text-day-text dark:bg-night-bg dark:text-night-text"
    >
      <Head>
        <link href="https://use.typekit.net/peg0hnw.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
