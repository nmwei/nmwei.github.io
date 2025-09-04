import rss from './rss.mjs'
import fs from 'fs'
import path from 'path'

async function postbuild() {
  await rss()

  // 在 docs 目录中创建 .nojekyll 文件
  if (process.env.EXPORT) {
    const nojekyllPath = path.join(process.cwd(), 'docs', '.nojekyll')
    fs.writeFileSync(nojekyllPath, '# This file tells GitHub Pages to not use Jekyll\n')
    console.log('✅ Created .nojekyll file for GitHub Pages')
  }
}

postbuild()
