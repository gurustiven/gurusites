import { useApp } from 'components/context/AppContext'
import styles from './Header.module.scss'

export default function PhoenixHeader() {
  // Get theme
  const { theme, setTheme } = useApp()

  // Get header config
  const getHeader = theme?.[0]?.header

  // Set some constants
  const hotelName = getHeader?.name ? getHeader?.name : "Hotel name"

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {getHeader?.logo
            ? <img src={getHeader?.logo} alt={hotelName} />
            : <h1>{hotelName}</h1>
          }
        </div>
        {getHeader?.menu?.length &&
          <nav className={styles.navigation}>
            <ul>
              {getHeader?.menu?.map(({ label }: any) => (
                <li><a>{label}</a></li>
              ))}
            </ul>
          </nav>
        }
        <div className={styles.lang}>
          <nav className={styles.navigation}>
            <ul>
              <li><a>ES</a></li>
              <li><a>EN</a></li>
            </ul>
          </nav>
          <nav className={styles.navigation}>
            <ul>
              <li><a className={styles.active}>Book now</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
