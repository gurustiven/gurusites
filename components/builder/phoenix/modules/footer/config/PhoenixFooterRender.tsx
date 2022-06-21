import Modules from 'components/builder/Modules'
import { useApp } from 'components/context/AppContext'
import useWindowSize from 'utils/useWindowSize'
import PhoenixFooter from '../Footer'

export default function PhoenixFooterRender() {
  // Get theme
  const { theme } = useApp()

  // Obtain windows width for medias
  const { width } = useWindowSize()

  // Get footer config
  const getFooter = theme?.footer

  // Update style from theme
  function style() {
    return Object.assign(
      {},
      width < 1024
        ? { ...getFooter?.style?.desktop, ...getFooter?.style?.mobile }
        : getFooter?.style?.desktop
    )
  }

  // Filter modules by stick
  const filterModulesByStick = theme?.pages?.map((page: any) =>
    page?.modules?.filter((module: any) => module?.stickToFooter)
  )

  return (
    <PhoenixFooter data={getFooter} style={style()}>
      {filterModulesByStick.flat(1)?.map((moduleData: any) => (
        <Modules key={moduleData?.id} moduleData={moduleData} />
      ))}
    </PhoenixFooter>
  )
}
