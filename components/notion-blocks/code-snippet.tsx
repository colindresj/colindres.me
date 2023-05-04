import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useEffect, useState } from 'react'

const CodeSnippet = ({ lang = 'javascript', code }) => {
  const [style, setStyle] = useState({})

  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism/material-dark').then(
      mod => setStyle(mod.default)
    )
  })

  return (
    <SyntaxHighlighter language={lang} style={style}>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeSnippet
