import fs from 'fs'
import path from 'path'
import RenderMarkDown from '@/components/RenderedMarkdown'
import Layout from '@/components/Layout'
import './style.css'

export default function ModuleBundler() {
  const markdownFilePath = path.join(
    process.cwd(),
    'public',
    'markdown/module-bundler.md'
  )
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8')

  return (
    <Layout>
      <RenderMarkDown content={markdownContent} />
    </Layout>
  )
}
