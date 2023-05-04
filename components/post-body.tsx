import Paragraph from './notion-blocks/paragraph'
import LineItem from './notion-blocks/line-item'
import CodeSnippet from './notion-blocks/code-snippet'
import Block from '../interfaces/block'

type BlockProps = {
  allBlocks: Block[]
  block: Block
}

type PostProps = {
  content: Block[]
}

function getItemNumberOfSameType(blocks, originalBlock) {
  let count = 0

  for (let i = blocks.indexOf(originalBlock); i >= 0; i--) {
    let block = blocks[i]
    if (block.type === originalBlock.type) {
      count++
    } else {
      return count
    }
  }
  return count
}

const BlockRenderer = ({ allBlocks, block }: BlockProps) => {
  const blockType = block['type']
  const richText = block[blockType].rich_text || []
  const plainText = richText.map(rt => rt.plain_text).join('')

  switch (blockType) {
    case 'paragraph':
      return <Paragraph richText={richText} />
    case 'numbered_list_item':
      return (
        <LineItem bullet={getItemNumberOfSameType(allBlocks, block)}>
          {plainText}
        </LineItem>
      )
    case 'bulleted_list_item':
      return <LineItem bullet="•">{plainText}</LineItem>
    case 'heading_1':
      return <h2 className="text-xl">{plainText}</h2>
    case 'heading_2':
      return <h3 className="text-lg font-bold">{plainText}</h3>
    case 'heading_3':
      return (
        <h4 className="text-xs font-bold tracking-wide uppercase">
          {plainText}
        </h4>
      )
    case 'divider':
      return (
        <div className="text-center">
          <hr className="border-day-accent border-2 w-1/6 inline-block" />
        </div>
      )
    case 'code':
      return <CodeSnippet lang={block[blockType].language} code={plainText} />
  }

  return null
}

const PostBody = ({ content }: PostProps) => {
  return (
    <div className="mx-auto mt-8">
      {content.map(block => (
        <BlockRenderer key={block.id} allBlocks={content} block={block} />
      ))}
    </div>
  )
}

export default PostBody
