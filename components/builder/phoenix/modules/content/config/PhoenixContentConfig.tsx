import { useApp } from 'components/context/AppContext'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import RickText from 'components/builder/interface/shared/Slate'
import StickToFooter from 'components/builder/interface/config/stick/StickToFooter'
import { useEffect, useState } from 'react'

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
  const { theme, setTheme } = useApp()

  // Get current module page index based on prop
  const modulePageIndex = theme?.pages
    .map(({ id }: any) => id)
    .indexOf(module?.pageId)

  // Set some constants
  const [themeCopy, setThemeCopy] = useState({ ...theme })
  const moduleIndex = isBlock
    ? themeCopy?.pages[modulePageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(parentModuleId)
    : themeCopy?.pages[modulePageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(module?.id)
  const columnIndex = themeCopy?.pages?.[modulePageIndex]?.modules?.[
    moduleIndex
  ]?.config?.columns
    ?.map(({ id }: any) => id)
    .indexOf(columnId)
  const moduleIndexChild = themeCopy?.pages?.[modulePageIndex]?.modules?.[
    moduleIndex
  ]?.config?.columns?.[columnIndex]?.modules
    ?.map(({ id }: any) => id)
    .indexOf(module?.id)

  // Refresh data for constants
  useEffect(() => setThemeCopy({ ...theme }), [theme])

  // Update parent
  function update(name: any, value: any) {
    const values = { ...theme }
    if (modulePageIndex !== -1) {
      if (isBlock) {
        if (moduleIndex !== -1)
          if (columnIndex !== -1)
            moduleIndexChild !== -1 &&
              (values.pages[modulePageIndex].modules[
                moduleIndex
              ].config.columns[columnIndex].modules[moduleIndexChild].config[
                name
              ] = value)
      } else {
        if (moduleIndex !== -1)
          values.pages[modulePageIndex].modules[moduleIndex].config = {
            [name]: value,
          }
      }
    }
    setTheme(values)
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
