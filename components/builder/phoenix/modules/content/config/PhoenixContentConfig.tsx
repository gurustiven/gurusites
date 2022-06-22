import { useApp } from 'components/context/AppContext'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import RickText from 'components/builder/interface/shared/Slate'
import StickToFooter from 'components/builder/interface/config/stick/StickToFooter'
import useIndex from 'components/builder/phoenix/utils/useIndex'

interface PhoenixContentConfigProps {
  module: any
  isBlock?: boolean
  columnId?: any
  parentModuleId?: any
}

export default function PhoenixContentConfig({
  module,
  isBlock,
  columnId,
  parentModuleId,
}: PhoenixContentConfigProps) {
  // Get theme
  const { theme, setTheme, pageIndex } = useApp()

  // Refresh data for constants
  const themeCopy = { ...theme }

  // Set some constants
  let {
    modulePageIndex,
    currentPageModule,
    moduleIndex,
    columnIndex,
    moduleIndexChild,
  } = useIndex(isBlock, parentModuleId, columnId, module?.id, module?.pageId)

  // Update parent
  function update(name: any, value: any) {
    // If current module is in block
    if (isBlock)
      currentPageModule[moduleIndex].config.items[columnIndex].modules[
        moduleIndexChild
      ].config[name] = value
    // If current module is not in block
    else currentPageModule[moduleIndex].config[name] = value

    // Update theme
    setTheme(themeCopy)
  }

  return (
    <ModulesConfigTabs
      isBlock={isBlock}
      columnId={columnId}
      module={module}
      parentModuleId={parentModuleId}
    >
      <RickText
        setValue={(e: any) => update('content', e)}
        defaultValue={module?.config?.content}
      />
      <StickToFooter
        moduleIndex={moduleIndex}
        modulePageIndex={modulePageIndex}
        defaultValue={module?.stickToFooter}
      />
    </ModulesConfigTabs>
  )
}
