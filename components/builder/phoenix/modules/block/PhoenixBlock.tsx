import styles from './Block.module.scss'
import ModulesConfigActions from 'components/builder/interface/config/ModulesConfigActions'
import NewModule from 'components/builder/interface/layout/modules/NewModule'
import PhoenixSliderConfig from '../slider/config/PhoenixSliderConfig'
import PhoenixSliderRender from '../slider/config/PhoenixSliderRender'
import PhoenixBlockRender from './config/PhoenixBlockRender'
import PhoenixBlockConfig from './config/PhoenixBlockConfig'
import { useRouter } from 'next/router'

export default function PhoenixBlock({ data, style }: any) {
  const router = useRouter()
  const { p: pageId } = router.query

  // If exist
  if (data?.config)
    return (
      <section className={styles.block} style={style}>
        <div
          className={styles.container}
          style={{ maxWidth: data?.style?.container?.containerWidth }}
        >
          {data?.config?.columns?.map((column: any, key: any) => (
            <div className={styles.column} key={key}>
              <div style={{ position: 'relative', zIndex: '20' }}>
                {column?.modules?.map((moduleData: any) => {
                  // Modules: Images slider
                  if (moduleData?.name === 'slider') {
                    return (
                      <ModulesConfigActions
                        key={moduleData?.id}
                        module={<PhoenixSliderRender module={moduleData} />}
                        config={
                          <PhoenixSliderConfig
                            isBlock
                            columnId={column?.id}
                            pageId={pageId}
                            module={moduleData}
                            moduleId={data?.id}
                          />
                        }
                      />
                    )
                  } else if (moduleData?.name === 'block') {
                    return (
                      <ModulesConfigActions
                        key={moduleData?.id}
                        module={<PhoenixBlockRender module={moduleData} />}
                        config={
                          <PhoenixBlockConfig
                            isBlock
                            columnId={column?.id}
                            pageId={pageId}
                            module={moduleData}
                            moduleId={data?.id}
                          />
                        }
                      />
                    )
                  }

                  return null
                })}
              </div>
              <NewModule
                isBlock
                moduleId={data?.id}
                columnId={column?.id}
                pageId={pageId}
              />
            </div>
          ))}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
