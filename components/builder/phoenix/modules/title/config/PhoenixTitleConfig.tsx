import { useApp } from 'components/context/AppContext'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import RickText from 'components/builder/interface/shared/Slate'
import { Input } from '@guruhotel/aura-ui'
import { useEffect, useState } from 'react'
import StickToFooter from 'components/builder/interface/config/stick/StickToFooter'

interface PhoenixTitleConfigProps {
  module: any
  isBlock?: boolean
  columnId?: any
  moduleId?: any
}

export default function PhoenixTitleConfig({
  module,
  isBlock,
  columnId,
  moduleId,
}: PhoenixTitleConfigProps) {
  // Get theme
  const { theme, setTheme, pageIndex } = useApp()

  // Get current module page index based on prop
  const modulePageIndex = theme?.pages
    .map(({ id }: any) => id)
    .indexOf(module?.pageId)

  // Set some constants
  const [themeCopy, setThemeCopy] = useState({ ...theme })
  const moduleIndex = isBlock
    ? themeCopy?.pages[modulePageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(moduleId)
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

    if (modulePageIndex !== -1)
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
        moduleIndex !== -1 &&
          (values.pages[modulePageIndex].modules[moduleIndex].config = {
            [name]: value,
          })
      }

    setTheme(values)
  }

  return (
    <ModulesConfigTabs
      isBlock={isBlock}
      columnId={columnId}
      module={module}
      moduleId={moduleId}
    >
      <Input
        id="content"
        onChange={(e: any) => update('content', e.target.value)}
        defaultValue={module?.config?.content}
        css={{ width: '100%' }}
      />
      {modulePageIndex === pageIndex && !isBlock && (
        <StickToFooter
          moduleIndex={moduleIndex}
          modulePageIndex={modulePageIndex}
          defaultValue={module?.stickToFooter}
        />
      )}
    </ModulesConfigTabs>
  )
}
