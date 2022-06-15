/* eslint-disable @next/next/no-img-element */
import styles from './Header.module.scss'

export default function PhoenixHeader({ data, style }: any) {
  return (
    <header className={styles.header} style={style}>
      <div className={styles.container} style={{ maxWidth: data?.style?.container?.containerWidth }}>
        <div className={styles.logo}>
          {data?.logo
            ? <img src={data?.logo} alt={data?.name} style={{ maxHeight: data?.logoMaxHeight }} />
            : <h1>{data?.name ? data?.name : 'Logo'}</h1>
          }
        </div>
        <nav className={styles.navigation}>
          {data?.menu?.length > 0 &&
            <nav className={styles.menu}>
              <ul>
                {data?.menu?.map(({ label, link }: any, key: any) => (
                  <li key={key}><a href={link} style={{ color: data?.style?.desktop?.color }}>{label}</a></li>
                ))}
              </ul>
            </nav>
          }
          <nav className={styles.lang}>
            <ul>
              <li><a style={{ color: data?.style?.desktop?.color }}>ES</a></li>
              <li><a style={{ color: data?.style?.desktop?.color }}>EN</a></li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li><a className={styles.active} style={{ borderColor: data?.style?.desktop?.color, color: data?.style?.desktop?.color }}>Book now</a></li>
            </ul>
          </nav>
        </nav>
      </div>
    </header>
  )
}
