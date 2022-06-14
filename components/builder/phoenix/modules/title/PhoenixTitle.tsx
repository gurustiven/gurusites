import styles from './Title.module.scss'

export default function PhoenixTitle({ data }: any) {
  // Obtain data to render component
  const { config } = data

  // If exist
  if (config)
    return (
      <section className={styles.title}>
        <div className={styles.container}>
          {config?.map(({ type, title }: any, key: any) => {
            const Component = type
            return (
              <Component key={key}>{title}</Component>
            )
          })}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
