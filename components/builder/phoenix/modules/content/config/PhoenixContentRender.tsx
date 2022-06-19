import useWindowSize from 'utils/useWindowSize'
import PhoenixContent from '../PhoenixContent'

export default function PhoenixContentRender({ module }: any) {
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

  return <PhoenixContent data={module} style={style()} />
}
