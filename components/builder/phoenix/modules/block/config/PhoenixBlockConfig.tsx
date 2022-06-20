import { Button, Box } from '@guruhotel/aura-ui'
import ModulesConfigTabs from 'components/builder/interface/config/ModulesConfigTabs'
import { v4 as uuid_v4 } from 'uuid'
import { useApp } from 'components/context/AppContext'
import { useEffect, useState } from 'react'

interface PhoenixBlockConfigProps {
  module: any
  pageId: any
  isBlock?: boolean
  columnId?: any
  moduleId?: any
}

export default function PhoenixBlockConfig({
  module,
  pageId,
  isBlock,
  columnId,
  moduleId,
}: PhoenixBlockConfigProps) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Set some constants
  const [themeCopy, setThemeCopy] = useState({ ...theme })
  const pageIndex = themeCopy?.pages?.map(({ id }: any) => id).indexOf(pageId)
  const moduleIndex = isBlock
    ? themeCopy?.pages?.[pageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(moduleId)
    : themeCopy?.pages?.[pageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(module?.id)
  const columnIndex = themeCopy?.pages?.[pageIndex]?.modules?.[
    moduleIndex
  ]?.config?.columns
    ?.map(({ id }: any) => id)
    .indexOf(columnId)
  const moduleIndexChild = themeCopy?.pages?.[pageIndex]?.modules?.[
    moduleIndex
  ]?.config?.columns?.[columnIndex]?.modules
    ?.map(({ id }: any) => id)
    .indexOf(module?.id)

  // Refresh data for constants
  useEffect(() => setThemeCopy({ ...theme }), [theme])

  // Update parent
  function update(name: any, value: any) {
    const values = { ...theme }

    if (pageIndex !== -1) {
      if (isBlock) {
        if (moduleIndex !== -1)
          if (columnIndex !== -1)
            moduleIndexChild !== -1 &&
              (values.pages[pageIndex].modules[moduleIndex].config.columns[
                columnIndex
              ].modules[moduleIndexChild].config[name] = value)
      } else {
        moduleIndex !== -1 &&
          (values.pages[pageIndex].modules[moduleIndex].config[name] = value)
      }
    }

    setTheme(values)
  }

  // Add new item
  function newColumn() {
    const values = { ...theme }

    if (pageIndex !== -1)
      if (isBlock) {
        if (moduleIndex !== -1)
          if (columnIndex !== -1)
            if (moduleIndexChild !== -1)
              if (
                values?.pages[pageIndex]?.modules[moduleIndex]?.config?.columns[
                  columnIndex
                ]?.modules[moduleIndexChild].config.columns
              ) {
                values?.pages[pageIndex]?.modules[moduleIndex]?.config?.columns[
                  columnIndex
                ]?.modules[moduleIndexChild].config.columns.push({
                  id: uuid_v4(),
                  modules: [],
                })
              } else {
                values.pages[pageIndex].modules[moduleIndex].config.columns[
                  columnIndex
                ].modules[moduleIndexChild].config = {
                  columns: [{ id: uuid_v4(), modules: [] }],
                }
              }
      } else {
        if (values.pages[pageIndex].modules[moduleIndex].config.columns) {
          values.pages[pageIndex].modules[moduleIndex].config.columns.push({
            id: uuid_v4(),
            modules: [],
          })
        } else {
          values.pages[pageIndex].modules[moduleIndex].config = {
            columns: [{ id: uuid_v4(), modules: [] }],
          }
        }
      }

    setTheme(values)
  }

  return (
    <ModulesConfigTabs pageId={pageId} module={module}>
      {module?.config?.columns?.map(({ id }: any) => (
        <PhoenixBlockConfigItems
          key={id}
          itemId={id}
          columns={module?.config?.columns}
          setColumns={(e: any) => update('columns', e)}
        />
      ))}
      <Button
        variant="outline"
        onClick={() => newColumn()}
        css={{ marginTop: '12px', width: '100%' }}
      >
        Add column +
      </Button>
    </ModulesConfigTabs>
  )
}

function PhoenixBlockConfigItems({ itemId, columns, setColumns }: any) {
  // Remove current item
  const removeItem = () => {
    const values = [...columns]
    const index = values?.map(({ id }: any) => id).indexOf(itemId)
    index !== -1 && values.splice(index, 1)
    setColumns(values)
  }

  return (
    <Box
      css={{
        border: '1px solid $darkie4',
        borderRadius: '8px',
        margin: '12px 0',
        padding: '12px',
      }}
    >
      <Button
        colorScheme="red"
        variant="link"
        css={{ width: '100%' }}
        onClick={() => removeItem()}
        type="button"
      >
        Remove -
      </Button>
    </Box>
  )
}
