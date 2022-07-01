import { useApp } from 'components/context/AppContext'
import Head from 'next/head'

export default function LoadFonts() {
  // Get theme
  const { theme } = useApp()

  // Theme fonts
  const { fonts } = theme?.general

  if (fonts)
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          {fonts?.main && (
            <link
              href={`https://fonts.googleapis.com/css2?family=${fonts?.main}:wght@300;400;700&display=swap`}
              rel="stylesheet"
            />
          )}
          {fonts?.secondary && (
            <link
              href={`https://fonts.googleapis.com/css2?family=${fonts?.secondary}:wght@300;400;700&display=swap`}
              rel="stylesheet"
            />
          )}
        </Head>
        <style global jsx>{`
          #phoenix--layout * {
            font-family: ${fonts?.main}, sans-serif;
          }
        `}</style>
      </>
    )

  return null
}
