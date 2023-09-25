import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
}

function RenderMarkDown({ content }: Props) {
  return <ReactMarkdown className='markdown'>{content}</ReactMarkdown>
}

export default RenderMarkDown
