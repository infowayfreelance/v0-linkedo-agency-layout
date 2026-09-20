import type { ContentBlock } from "./types"

export function renderContentBlocks(blocks: ContentBlock[]) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={index} className="text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-8">
            {block.text}
          </h2>
        )
      case "h3":
        return (
          <h3 key={index} className="text-xl sm:text-2xl font-semibold text-foreground mb-3 mt-6">
            {block.text}
          </h3>
        )
      case "p":
        return (
          <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
            {block.text}
          </p>
        )
      case "ul":
        return (
          <ul
            key={index}
            className="list-disc pl-6 space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed mb-6"
          >
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        )
      case "table":
        return (
          <div key={index} className="overflow-x-auto mb-6 rounded-lg border border-border">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-card">
                  {block.headers.map((header, headerIndex) => (
                    <th
                      key={headerIndex}
                      className="p-3 sm:p-4 font-semibold text-foreground border-b border-border"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-border last:border-0">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-3 sm:p-4 text-muted-foreground align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case "source":
        return (
          <p key={index} className="text-sm text-muted-foreground/70 italic mb-6">
            {block.text}
          </p>
        )
      default:
        return null
    }
  })
}
