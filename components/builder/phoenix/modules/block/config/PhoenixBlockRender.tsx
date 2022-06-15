import useWindowSize from 'utils/useWindowSize'
import PhoenixBlock from '../PhoenixBlock';

export default function PhoenixBlockRender({ module, pageId }: any) {
  // Obtain windows width for medias
  const { width } = useWindowSize()

  // Update style from theme
  function style() {
    return Object.assign(
      {},
      width < 1024 ? { ...module?.style?.desktop, ...module?.style?.mobile } : module?.style?.desktop
    );
  }

  return (
    <PhoenixBlock pageId={pageId} data={module} style={style()} />
  )
}
