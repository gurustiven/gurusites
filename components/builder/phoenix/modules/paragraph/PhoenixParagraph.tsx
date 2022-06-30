import styles from './Paragraph.module.scss'

export default function PhoenixParagraph({ data, style }: any) {
  // If exist
  if (data?.config)
    return (
      <section className={styles.paragraph} style={style}>
        <div
          className={styles.container}
          style={{ maxWidth: data?.style?.general?.containerWidth }}
        >
          {data?.config?.content ? (
            <p>{data?.config?.content}</p>
          ) : (
            <p>This is a paragraph...</p>
          )}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
