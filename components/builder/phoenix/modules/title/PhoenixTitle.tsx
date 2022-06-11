import styles from './Title.module.scss'

export default function PhoenixTitle({ data }: any) {
  // Obtain data to render component
  const { config } = data

  console.log(config)

  // If exist
  if (config)
    return (
      <section className={styles.title}>
        <div className={styles.container}>
          {config?.map(({ type, title }: any) => {
            const Component = type
            return (
              <Component>{title}</Component>
            )
          })}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
