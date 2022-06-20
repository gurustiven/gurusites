import useWindowSize from 'utils/useWindowSize'
import PhoenixTitle from '../PhoenixTitle'

export default function PhoenixTitleRender({ module }: any) {
  // Obtain windows width for medias
  const { width } = useWindowSize()

  // Update style from theme
  function style() {
    return Object.assign(
      {},
      width < 1024
        ? { ...module?.style?.desktop, ...module?.style?.mobile }
        : module?.style?.desktop
    )
  }

  return <PhoenixTitle data={module} style={style()} />
}
