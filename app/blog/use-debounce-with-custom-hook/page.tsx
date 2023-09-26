import fs from 'fs'
import path from 'path'
import RenderMarkDown from '@/components/RenderedMarkdown'
import Layout from '@/components/Layout'

export default function DebounceHook() {
  const markdownFilePath = path.join(
    process.cwd(),
    'public',
    'markdown/debounce-hook.md'
  )
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8')

  return (
    <Layout>
      <RenderMarkDown content={markdownContent} />
      <p className='mt-4'>Thank You, I Hope You learned something from this blogs. </p>
    </Layout>
  )
}
