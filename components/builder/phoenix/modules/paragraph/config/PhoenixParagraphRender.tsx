import useWindowSize from 'utils/useWindowSize'
import PhoenixParagraph from '../PhoenixParagraph'

export default function PhoenixParagraphRender({ module }: any) {
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

  return <PhoenixParagraph data={module} style={style()} />
}
