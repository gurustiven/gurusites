import styles from './Slider.module.scss'

export default function PhoenixSlider({ data, style }: any) {
  // If exist
  if (data?.config)
    return (
      <section className={styles.slider} style={style}>
        <div className={styles.container} style={{ maxWidth: data?.style?.container?.containerWidth }}>
          {data?.config?.items?.map(({ source }: any) => (<div className={styles.item} style={{ backgroundImage: `url(${source})` }}></div>))}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
