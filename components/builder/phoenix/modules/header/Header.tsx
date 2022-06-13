import styles from './Header.module.scss'

export default function PhoenixHeader({ data, style }: any) {
  return (
    <header className={styles.header} style={style}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {data?.logo
            ? <img src={data?.logo} alt={data?.name} />
            : <h1>{data?.name}</h1>
          }
        </div>
        {
          data?.menu?.length > 0 &&
          <nav className={styles.navigation}>
            <ul>
              {data?.menu?.map(({ label }: any) => (
                <li><a href="#" style={{ color: data?.style?.desktop?.color }}>{label}</a></li>
              ))}
            </ul>
          </nav>
        }
        <div className={styles.lang}>
          <nav className={styles.navigation}>
            <ul>
              <li><a style={{ color: data?.style?.desktop?.color }}>ES</a></li>
              <li><a style={{ color: data?.style?.desktop?.color }}>EN</a></li>
            </ul>
          </nav>
          <nav className={styles.navigation}>
            <ul>
              <li><a className={styles.active} style={{ backgroundColor: data?.style?.desktop?.color, color: data?.style?.desktop?.backgroundColor }}>Book now</a></li>
            </ul>
          </nav>
        </div>
      </div >
    </header >
  )
}
