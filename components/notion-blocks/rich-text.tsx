import { createElement } from 'react'

const elementMap = {
  bold: 'b',
  italic: 'i',
  underline: 'u',
  strikethrough: 's',
  link: 'a',
  color: 'span'
}

function elementTagFromType(type: string): string {
  if (!elementMap.hasOwnProperty(type)) {
    return type
  }

  return elementMap[type]
}

function getAppliedFormats(text) {
  const annotations = Object.keys(text.annotations)
    .filter(k => !!text.annotations[k] && text.annotations[k] !== 'default')
    .map(k => ({ type: k, value: text.annotations[k] }))

  if (!!text.text.link) {
    return [
      ...annotations,
      {
        type: 'link',
        href: text.text.link.url,
        className:
          'border-b-2 border-day-accent text-day-accent hover:bg-day-accent hover:text-day-bg dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night-bg'
      }
    ]
  }

  return annotations
}

const RichTextFormat = ({ annotations, innerText }) => {
  if (!annotations.length) return innerText

  const [{ type, value, ...props }, ...rest] = annotations

  return createElement(
    elementTagFromType(type),
    props,
    <RichTextFormat annotations={rest} innerText={innerText} />
  )
}

const RichText = ({ richText }) => {
  return richText
    .filter(t => t.type === 'text')
    .map((text, i) => {
      const annotations = getAppliedFormats(text)

      return (
        <RichTextFormat
          key={i}
          annotations={annotations}
          innerText={text?.text?.content}
        />
      )
    })
}

export default RichText
