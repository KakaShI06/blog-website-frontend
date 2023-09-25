import fs from 'fs'
import path from 'path'
import RenderMarkDown from '@/components/RenderedMarkdown'
import Layout from '@/components/Layout'

export default function CenterDiv() {
  const markdownFilePath = path.join(
    process.cwd(),
    'public',
    'markdown/center-div.md'
  )
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8')

  return (
    <Layout>
      <RenderMarkDown content={markdownContent} />
    </Layout>
  )
}
