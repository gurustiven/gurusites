import { Fragment } from 'react'
import styles from './Title.module.scss'

export default function PhoenixTitle({ data, style }: any) {
  // If exist
  if (data?.config)
    return (
      <section className={styles.title} style={style}>
        <div
          className={styles.container}
          style={{ maxWidth: data?.style?.general?.containerWidth }}
        >
          {data?.config?.content ? (
            <h1>{data?.config?.content}</h1>
          ) : (
            <h1>This is a heading</h1>
          )}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
