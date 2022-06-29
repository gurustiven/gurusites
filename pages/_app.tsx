import '../styles/variables.scss'
import { globalCss } from '@guruhotel/aura-ui'
import { AuraUIProvider } from '@guruhotel/aura-ui'
import type { AppProps } from 'next/app'
import { AppProvider } from '../components/context/AppContext'

const globalStyles = globalCss({
  body: { color: '$darkie11' },
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <AppProvider>
      <AuraUIProvider>
        <Component {...pageProps} />
      </AuraUIProvider>
    </AppProvider>
  )
}

export default MyApp
