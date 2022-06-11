import styles from './Slider.module.scss'

export default function PhoenixSlider({ data }: any) {
  // Obtain data to render component
  const { config } = data

  // If exist
  if (config)
    return (
      <div className={styles.slider}>
        {config?.map(({ url }: any) => (<div className={styles.item} style={{ backgroundImage: `url(${url})` }}></div>))}
      </div>
    )

  // If doesn't exist
  return null
}
