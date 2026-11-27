import { execFileSync, spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { copyFileSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { researchIcon } from '../research/icons.mjs'

const directory = fileURLToPath(new URL('..', import.meta.url))
const baseline = '239874f65f725fd9cc1b6de5129e0a8e1adb3c1e'
const git = (...args) => execFileSync('git', ['-C', join(directory, '..'), ...args])
const hasBaseline = () => spawnSync('git', ['-C', join(directory, '..'), 'cat-file', '-e', `${baseline}^{commit}`]).status === 0

// The deployed lavender site is available as a Git Pages artifact. Keep this
// revision pinned so rebuilding never incorporates unrelated deployment changes.
if (!hasBaseline()) git('fetch', '--no-tags', 'origin', 'refs/heads/gh-pages')
if (!hasBaseline()) throw new Error(`Missing lavender deployment baseline ${baseline}`)

const stage = mkdtempSync(join(directory, '.pages-build-'))
const archive = join(stage, 'baseline.tar')
const read = (path) => readFileSync(join(directory, path), 'utf8')

function replaceOnce(text, before, after) {
  const offset = text.indexOf(before)
  if (offset === -1 || text.indexOf(before, offset + before.length) !== -1) {
    throw new Error(`Expected one deployment integration point: ${before}`)
  }
  return text.slice(0, offset) + after + text.slice(offset + before.length)
}

function writeHashedAsset(original, content, index) {
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 16)
  const next = original.replace(/\.[^.]+$/, (extension) => `-research-${hash}${extension}`)
  writeFileSync(join(stage, next), content)
  rmSync(join(stage, original))
  return replaceOnce(index, original, next)
}

try {
  git('archive', `--output=${archive}`, baseline)
  execFileSync('tar', ['-xf', archive, '-C', stage])
  rmSync(archive)

  const originalScript = 'assets/index-C3GHiirt.js'
  const originalStyle = 'assets/index-Bye9K5ZT.css'
  let script = readFileSync(join(stage, originalScript), 'utf8')
  let index = readFileSync(join(stage, 'index.html'), 'utf8')

  // Extend the existing Computing & Research list in the pinned Pages bundle.
  const clusterPreview = 'assets/cluster-certainty.webp'
  const clusterProject = {
    id: 'cluster-certainty',
    name: 'Cluster / Certainty',
    tag: 'INDEPENDENT RESEARCH / CLUSTERING ROBUSTNESS',
    category: 'Computing & Research',
    image: `/MinseoPortfolio2026/${clusterPreview}`,
    summary: 'An independent study of how missing sales data and imputation change the way stores are grouped.',
    liveUrl: 'https://minseok2626.github.io/Missing-Data-Clustering-Robustness/',
    github: 'https://github.com/MinseoK2626/Missing-Data-Clustering-Robustness',
    text: 'Using synthetic convenience-store data, this study tests how missing sales records affect K-means segmentation. It compares results with a complete-data benchmark to see when clearer-looking clusters still assign stores differently.',
    skills: ['Python', 'K-means', 'Missing-data simulation'],
    highlights: [
      'Compare four imputation methods across three missing-data mechanisms.',
      'Explore 4,800 model fits across 80 synthetic cohorts in the interactive research site.',
      'Inspect when silhouette scores improve even as agreement with the complete-data benchmark declines.',
    ],
  }
  copyFileSync(join(directory, 'public', 'cluster-certainty.webp'), join(stage, clusterPreview))
  script = replaceOnce(script, 'code:Ue.dfa}}],...Ge', `code:Ue.dfa}},${JSON.stringify(clusterProject)}],...Ge`)

  const chapter = read('research/chapter.html').replace(
    /<span data-research-icon="([a-z]+)"><\/span>/g,
    (_, name) => researchIcon(name),
  )
  const position = script.indexOf('name:`Integrated Accounting TA`')
  const accountingEnd = 'skills:[`Accounting`,`Teaching`]}'
  if (position === -1 || script.indexOf(accountingEnd, position) === -1) {
    throw new Error('Integrated Accounting TA insertion point not found')
  }

  // The bundle exposes its JSX runtime and chapter dialog in the same scope.
  // Register one activity and dispatch its body through the original dialog.
  const card = {
    research: true,
    name: 'Research Assistant',
    role: 'Empirical Accounting Research · McIntire',
    category: 'RESEARCH',
    summary: 'Looking beyond the numbers to understand the evidence behind them.',
  }
  const icon = `(0,M.jsx)("span",{dangerouslySetInnerHTML:{__html:${JSON.stringify(researchIcon('document'))}},style:{display:"inline-flex"}})`
  script = script.slice(0, position) + replaceOnce(
    script.slice(position), accountingEnd, `${accountingEnd},{...${JSON.stringify(card)},icon:${icon}}`,
  )
  const chapterNumber = 'label:`CHAPTER 0${s+1} / ${N[s].category}`'
  script = replaceOnce(script, chapterNumber, 'label:`CHAPTER 0${s+1-N.slice(0,s).filter(activity=>activity.research).length} / ${N[s].category}`')
  const open = 'ye=s!==null&&(0,M.jsxs)(Je,'
  const researchDialog = `(0,M.jsx)(Je,{title:"Research beyond the numbers.",label:"ACADEMIC RESEARCH",onClose:()=>c(null),children:(0,M.jsx)("div",{dangerouslySetInnerHTML:{__html:${JSON.stringify(chapter)}}})})`
  script = replaceOnce(script, open, `ye=s!==null&&(N[s].research?${researchDialog}:(0,M.jsxs)(Je,`)
  script = replaceOnce(script, 'children:N[s].skills.map(Wt)})]}),e[44]', 'children:N[s].skills.map(Wt)})]})),e[44]')

  index = writeHashedAsset(originalScript, script, index)
  const styles = readFileSync(join(stage, originalStyle), 'utf8') + '\n' + read('research/chapter.css')
  index = writeHashedAsset(originalStyle, styles, index)
  writeFileSync(join(stage, 'index.html'), index)
  const dist = join(directory, 'dist')
  rmSync(dist, { recursive: true, force: true })
  renameSync(stage, dist)
  console.log('Built the lavender portfolio and Research Assistant chapter in dist.')
} finally {
  rmSync(stage, { recursive: true, force: true })
}
