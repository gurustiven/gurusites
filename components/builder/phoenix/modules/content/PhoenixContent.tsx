import styles from './Content.module.scss'

export default function PhoenixContent({ module }) {
  const { config } = module
  return (
    <section className={styles.content}>
      <div className={styles.container}>
        {config[0]?.content && config[0]?.content?.map((paragraph) => (<p>{paragraph?.children?.[0]?.text}</p>))}
      </div>
    </section>
  )
}
