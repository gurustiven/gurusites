import ModulesConfigActions from "components/builder/interface/config/ModulesConfigActions"
import NewModule from "components/builder/interface/layout/modules/NewModule"
import PhoenixSliderConfig from "../slider/config/PhoenixSliderConfig"
import PhoenixSliderRender from "../slider/config/PhoenixSliderRender"

export default function PhoenixBlock({ data, style, pageId }: any) {
  // If exist
  if (data?.config)
    return (
      <section style={style}>
        <div style={{ maxWidth: data?.style?.container?.containerWidth }}>
          {JSON.stringify(data)}
          {data?.config?.columns?.map((column: any, key: any) => (
            <div key={key}>
              {JSON.stringify(column)}
              <div style={{ position: 'relative', zIndex: '20' }}>
                {column?.modules?.map((moduleData: any) => {

                  // Modules: Images slider
                  if (moduleData?.name === 'slider') {
                    return (
                      <ModulesConfigActions
                        key={moduleData?.id}
                        module={<PhoenixSliderRender module={moduleData} />}
                        config={<PhoenixSliderConfig isBlock columnId={column?.id} pageId={pageId} module={moduleData} moduleId={data?.id} />}
                      />
                    )
                  }

                  return null
                })}
              </div>
              <NewModule isBlock moduleId={data?.id} columnId={column?.id} pageId={pageId} />
            </div>
          ))}
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
