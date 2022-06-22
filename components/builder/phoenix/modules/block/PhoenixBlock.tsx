import styles from './Block.module.scss'

export default function PhoenixBlock({ data, style, children }: any) {
  // If exist
  if (data?.config)
    return (
      <section className={styles.block} style={style}>
        <div
          className={styles.container}
          style={{ maxWidth: data?.style?.container?.containerWidth }}
        >
          {children}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
