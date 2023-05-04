import RichText from './rich-text'

const Paragraph = ({ richText }) => {
  return (
    <p className="my-4">
      <RichText richText={richText} />
    </p>
  )
}

export default Paragraph
