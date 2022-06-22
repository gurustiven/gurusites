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
  let moduleProps = {
    key: moduleData?.id,
    moduleData,
    isBlock,
    columnId,
    parentModuleId,
    module: moduleData,
  }

  if (moduleData?.name === 'slider') {
    // Modules: Images slider
    return (
      <ModulesConfigActions
        {...moduleProps}
        module={<PhoenixSliderRender module={moduleData} />}
        config={<PhoenixSliderConfig {...moduleProps} />}
      />
    )
  } else if (moduleData?.name === 'block') {
    // Modules: Block content
    return (
      <ModulesConfigActions
        {...moduleProps}
        module={<PhoenixBlockRender module={moduleData} />}
        config={<PhoenixBlockConfig {...moduleProps} />}
      />
    )
  } else if (moduleData?.name === 'title') {
    // Modules: Title content
    return (
      <ModulesConfigActions
        {...moduleProps}
        module={<PhoenixTitleRender module={moduleData} />}
        config={<PhoenixTitleConfig {...moduleProps} />}
      />
    )
  } else if (moduleData?.name === 'content') {
    // Modules: Content content
    return (
      <ModulesConfigActions
        {...moduleProps}
        module={<PhoenixContentRender module={moduleData} />}
        config={<PhoenixContentConfig {...moduleProps} />}
      />
    )
  }

  return null
}
