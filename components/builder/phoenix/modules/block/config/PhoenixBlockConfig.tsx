import { Button, Box } from '@guruhotel/aura-ui'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import { v4 as uuid_v4 } from 'uuid'
import { useApp } from 'components/context/AppContext'
import { useEffect, useState } from 'react'
import StickToFooter from 'components/builder/interface/config/stick/StickToFooter'

interface PhoenixBlockConfigProps {
  module: any
  isBlock?: boolean
  columnId?: any
  parentModuleId?: any
}

export default function PhoenixBlockConfig({
  module,
  isBlock,
  columnId,
  parentModuleId,
}: PhoenixBlockConfigProps) {
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
          (values.pages[modulePageIndex].modules[moduleIndex].config[name] =
            value)
      }

    setTheme(values)
  }

  // Add new item
  function newColumn() {
    const values = { ...theme }

    if (modulePageIndex !== -1)
      if (isBlock) {
        if (moduleIndex !== -1)
          if (columnIndex !== -1)
            if (moduleIndexChild !== -1)
              if (
                values?.pages[modulePageIndex]?.modules[moduleIndex]?.config
                  ?.columns[columnIndex]?.modules[moduleIndexChild].config
                  .columns
              ) {
                values?.pages[modulePageIndex]?.modules[
                  moduleIndex
                ]?.config?.columns[columnIndex]?.modules[
                  moduleIndexChild
                ].config.columns.push({
                  id: uuid_v4(),
                  modules: [],
                })
              } else {
                values.pages[modulePageIndex].modules[
                  moduleIndex
                ].config.columns[columnIndex].modules[moduleIndexChild].config =
                  {
                    columns: [{ id: uuid_v4(), modules: [] }],
                  }
              }
      } else {
        if (
          values.pages[modulePageIndex].modules[moduleIndex]?.config.columns
        ) {
          values.pages[modulePageIndex].modules[
            moduleIndex
          ].config.columns.push({
            id: uuid_v4(),
            modules: [],
          })
        } else {
          values.pages[modulePageIndex].modules[moduleIndex].config = {
            columns: [{ id: uuid_v4(), modules: [] }],
          }
        }
      }

    setTheme(values)
  }

  return (
    <ModulesConfigTabs module={module}>
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
