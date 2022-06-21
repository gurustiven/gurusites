import styles from '../Block.module.scss'
import Modules from 'components/builder/Modules'
import useWindowSize from 'utils/useWindowSize'
import PhoenixBlock from '../PhoenixBlock'
import ModulesConfigActionsNew from 'components/builder/interface/config/actions/new/ModulesConfigActionsNew'

export default function PhoenixBlockRender({ module }: any) {
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

  return (
    <PhoenixBlock data={module} style={style()}>
      {module?.config?.columns?.map((column: any, key: any) => (
        <div className={styles.column} key={key}>
          <div style={{ position: 'relative', zIndex: '20' }}>
            {column?.modules?.map((moduleData: any) => {
              return (
                <Modules
                  key={moduleData?.id}
                  moduleData={moduleData}
                  parentModuleId={module?.id}
                  columnId={column?.id}
                  isBlock
                />
              )
            })}
          </div>
          <ModulesConfigActionsNew
            isBlock
            parentModuleId={module?.id}
            columnId={column?.id}
          />
        </div>
      ))}
    </PhoenixBlock>
  )
}
