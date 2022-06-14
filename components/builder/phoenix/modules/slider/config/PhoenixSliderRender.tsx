import useWindowSize from 'utils/useWindowSize'
import PhoenixSlider from '../PhoenixSlider'

export default function PhoenixSliderRender({ module }: any) {
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
    <PhoenixSlider data={module} style={style()} />
  )
}
