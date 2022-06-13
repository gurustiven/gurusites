import { useApp } from 'components/context/AppContext'
import PhoenixHeader from '../Header'

export default function PhoenixHeaderRender() {
  // Get theme
  const { theme } = useApp()

  // Get header config
  const getHeader = theme?.[0]?.header

  // Update style from theme
  function style() {
    return Object.assign(
      {},
      getHeader?.style
    );
  }

  return (
    <PhoenixHeader data={getHeader} style={style()} />
  )
}
