import { Fragment } from 'react'
import styles from './Content.module.scss'

export default function PhoenixContent({ data, style }: any) {
  // If exist
  if (data?.config)
    return (
      <section className={styles.content} style={style}>
        <div
          className={styles.container}
          style={{ maxWidth: data?.style?.general?.containerWidth }}
        >
          {!data?.config?.content && <p>Your content goes here...</p>}
          {data?.config?.content?.map(({ type, children }: any, key: any) => {
            switch (type) {
              case 'block-quote':
                return (
                  <blockquote key={key}>
                    {children?.map(({ text }: any, k: any) => (
                      <Fragment key={k}>{text}</Fragment>
                    ))}
                  </blockquote>
                )
              case 'bulleted-list':
                return (
                  <ul key={key}>
                    {children?.map(({ text }: any, k: any) => (
                      <Fragment key={k}>{text}</Fragment>
                    ))}
                  </ul>
                )
              case 'heading-one':
                return (
                  <h1 key={key}>
                    {children?.map(({ text }: any, k: any) => (
                      <Fragment key={k}>{text}</Fragment>
                    ))}
                  </h1>
                )
              case 'heading-two':
                return (
                  <h2 key={key}>
                    {children?.map(({ text }: any, k: any) => (
                      <Fragment key={k}>{text}</Fragment>
                    ))}
                  </h2>
                )
              case 'list-item':
                return (
                  <li key={key}>
                    {children?.map(({ text }: any, k: any) => (
                      <Fragment key={k}>{text}</Fragment>
                    ))}
                  </li>
                )
              case 'numbered-list':
                return (
                  <ol key={key}>
                    {children?.map(({ text }: any, k: any) => (
                      <Fragment key={k}>{text}</Fragment>
                    ))}
                  </ol>
                )
              default:
                return (
                  <p key={key}>
                    {children?.map(
                      ({ text, bold, italic, code }: any, k: any) => {
                        if (bold) return <b key={k}>{text}</b>
                        if (italic) return <i key={k}>{text}</i>
                        if (code) return <code key={k}>{text}</code>
                        return <Fragment key={k}>{text}</Fragment>
                      }
                    )}
                  </p>
                )
            }
          })}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
