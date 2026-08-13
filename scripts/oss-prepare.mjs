/**
 * OSS 静态网站托管适配脚本
 *
 * VitePress 使用 cleanUrls:true 时，链接是 /guide/quick-start 这种无后缀路径，
 * 而阿里云 OSS 静态托管按对象路径精确匹配文件。因此需要把构建产物里除
 * index.html / 404.html 之外的所有 .html 文件重命名为无后缀文件，例如：
 *   guide/quick-start.html  ->  guide/quick-start
 *
 * 保留 index.html（作为 OSS 默认首页）和 404.html（作为错误页）。
 *
 * 用法：node scripts/oss-prepare.mjs [dist目录]
 */
import { readdirSync, statSync, renameSync } from 'node:fs'
import { join, resolve } from 'node:path'

const distDir = resolve(process.argv[2] ?? 'docs/.vitepress/dist')
let renamed = 0
let skipped = 0
let failed = 0

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      walk(full)
    } else if (entry.endsWith('.html')) {
      // 保留 index.html 与 404.html（OSS 默认首页 / 错误页需要它们）
      if (entry === 'index.html' || entry === '404.html') {
        skipped++
      } else {
        const target = full.slice(0, -'.html'.length)
        try {
          renameSync(full, target)
          renamed++
        } catch (err) {
          failed++
          console.error(`  [warn] 重命名失败: ${full} -> ${target} (${err.message})`)
        }
      }
    }
  }
}

walk(distDir)

if (failed > 0) {
  console.error(`OSS prepare: 失败 ${failed} 个文件`)
  process.exit(1)
}
console.log(`OSS prepare: 已重命名 ${renamed} 个文件，保留 ${skipped} 个（index.html / 404.html）`)
console.log(`产物目录: ${distDir}`)
