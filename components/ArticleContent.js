import styles from './ArticleContent.module.css'

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

function parseContent(content) {
  const lines = content.trim().split('\n')
  const elements = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className={styles.h2}>{line.slice(3)}</h2>
      )
      i++

    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className={styles.h3}>{line.slice(4)}</h3>
      )
      i++

    } else if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={key++} className={styles.h4}>{line.slice(5)}</h4>
      )
      i++

    } else if (line.startsWith('| ')) {
      // Table block
      const tableLines = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      const headers = tableLines[0].split('|').filter(c => c.trim()).map(c => c.trim())
      const rows = tableLines.slice(2).map(r =>
        r.split('|').filter(c => c.trim()).map(c => c.trim())
      )
      elements.push(
        <div key={key++} className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>{headers.map((h, idx) => <th key={idx}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => <td key={ci}>{renderInline(cell)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    } else if (/^\d+\./.test(line)) {
      // Ordered list
      const items = []
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ''))
        i++
      }
      elements.push(
        <ol key={key++} className={styles.ol}>
          {items.map((item, idx) => <li key={idx}>{renderInline(item)}</li>)}
        </ol>
      )

    } else if (line.startsWith('- ')) {
      // Unordered list
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={key++} className={styles.ul}>
          {items.map((item, idx) => <li key={idx}>{renderInline(item)}</li>)}
        </ul>
      )

    } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      elements.push(
        <p key={key++} className={styles.italic}>
          <em>{line.slice(1, -1)}</em>
        </p>
      )
      i++

    } else if (line.startsWith('**') && !line.endsWith('**')) {
      // Bold paragraph opener
      elements.push(
        <p key={key++} className={styles.boldPara}>{renderInline(line)}</p>
      )
      i++

    } else if (line.trim() === '') {
      i++

    } else {
      elements.push(
        <p key={key++} className={styles.p}>{renderInline(line)}</p>
      )
      i++
    }
  }

  return elements
}

export default function ArticleContent({ content }) {
  return (
    <div className={styles.content} itemProp="articleBody">
      {parseContent(content)}
    </div>
  )
}
