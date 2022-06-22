import { useApp } from 'components/context/AppContext'
import useWindowSize from 'utils/useWindowSize'
import PhoenixHeader from '../Header'

export default function PhoenixHeaderRender() {
  // Get theme
  const { theme } = useApp()

  // Obtain windows width for medias
  const { width } = useWindowSize()

  // Get header config
  const getHeader = theme?.header

  // Update style from theme
  function style() {
    return Object.assign(
      {},
      width < 1024
        ? { ...getHeader?.style?.desktop, ...getHeader?.style?.mobile }
        : getHeader?.style?.desktop
    )
  }

  return <PhoenixHeader data={getHeader} style={style()} />
}
