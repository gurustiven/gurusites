import ModulesConfigActions from './interface/config/actions/ModulesConfigActions'
import PhoenixBlockConfig from './phoenix/modules/block/config/PhoenixBlockConfig'
import PhoenixBlockRender from './phoenix/modules/block/config/PhoenixBlockRender'
import PhoenixContentConfig from './phoenix/modules/content/config/PhoenixContentConfig'
import PhoenixContentRender from './phoenix/modules/content/config/PhoenixContentRender'
import PhoenixSliderConfig from './phoenix/modules/slider/config/PhoenixSliderConfig'
import PhoenixSliderRender from './phoenix/modules/slider/config/PhoenixSliderRender'
import PhoenixTitleConfig from './phoenix/modules/title/config/PhoenixTitleConfig'
import PhoenixTitleRender from './phoenix/modules/title/config/PhoenixTitleRender'

export default function Modules({
  moduleData,
  isBlock,
  parentModuleId,
  columnId,
}: any) {
  if (moduleData?.name === 'slider') {
    // Modules: Images slider
    return (
      <ModulesConfigActions
        key={moduleData?.id}
        moduleData={moduleData}
        module={<PhoenixSliderRender module={moduleData} />}
        config={
          <PhoenixSliderConfig
            columnId={columnId}
            isBlock={isBlock}
            module={moduleData}
            parentModuleId={parentModuleId}
          />
        }
        isBlock={isBlock}
        columnId={columnId}
        parentModuleId={parentModuleId}
      />
    )
  } else if (moduleData?.name === 'block') {
    // Modules: Block content
    return (
      <ModulesConfigActions
        key={moduleData?.id}
        moduleData={moduleData}
        module={<PhoenixBlockRender module={moduleData} />}
        config={
          <PhoenixBlockConfig
            columnId={columnId}
            isBlock={isBlock}
            module={moduleData}
            parentModuleId={parentModuleId}
          />
        }
        isBlock={isBlock}
        columnId={columnId}
        parentModuleId={parentModuleId}
      />
    )
  } else if (moduleData?.name === 'title') {
    // Modules: Title content
    return (
      <ModulesConfigActions
        key={moduleData?.id}
        moduleData={moduleData}
        module={<PhoenixTitleRender module={moduleData} />}
        config={
          <PhoenixTitleConfig
            columnId={columnId}
            isBlock={isBlock}
            module={moduleData}
            parentModuleId={parentModuleId}
          />
        }
        isBlock={isBlock}
        columnId={columnId}
        parentModuleId={parentModuleId}
      />
    )
  } else if (moduleData?.name === 'content') {
    // Modules: Content content
    return (
      <ModulesConfigActions
        key={moduleData?.id}
        moduleData={moduleData}
        module={<PhoenixContentRender module={moduleData} />}
        config={
          <PhoenixContentConfig
            columnId={columnId}
            isBlock={isBlock}
            module={moduleData}
            parentModuleId={parentModuleId}
          />
        }
        isBlock={isBlock}
        columnId={columnId}
        parentModuleId={parentModuleId}
      />
    )
  }

  return null
}
