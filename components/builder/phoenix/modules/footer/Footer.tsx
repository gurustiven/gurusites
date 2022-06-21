/* eslint-disable @next/next/no-img-element */
import styles from './Footer.module.scss'

export default function PhoenixFooter({ data, style, children }: any) {
  return (
    <footer className={styles.footer} style={style}>
      {children}
      <div
        className={styles.container}
        style={{ maxWidth: data?.style?.general?.containerWidth }}
      >
        <div className={styles.copyright}>
          <p>&copy; GuruSites</p>
          <a className={styles.made}>
            <img src="/madewith.svg" alt="Made with GuruSites" />
          </a>
        </div>
      </div>
    </footer>
  )
}
