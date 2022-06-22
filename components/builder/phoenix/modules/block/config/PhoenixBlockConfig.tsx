import { Button, Box } from '@guruhotel/aura-ui'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import { v4 as uuid_v4 } from 'uuid'
import { useApp } from 'components/context/AppContext'
import { useEffect, useState } from 'react'
import StickToFooter from 'components/builder/interface/config/stick/StickToFooter'
import useIndex from 'components/builder/phoenix/utils/useIndex'

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

  // Set values to add
  const valuesToPush = { id: uuid_v4(), modules: [] }

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

  // Add new item
  function newItem() {
    // Get current column in block
    const childColumn =
      currentPageModule[moduleIndex]?.config?.items?.[columnIndex]

    // If current module is in block
    if (isBlock)
      if (childColumn?.modules[moduleIndexChild].config.items)
        childColumn.modules[moduleIndexChild].config.items.push(valuesToPush)
      else
        childColumn.modules[moduleIndexChild].config = {
          items: [valuesToPush],
        }
    // If current module is not in block
    else if (currentPageModule[moduleIndex].config.items)
      currentPageModule[moduleIndex].config.items.push(valuesToPush)
    else
      currentPageModule[moduleIndex].config = {
        items: [valuesToPush],
      }

    // Update theme
    setTheme(themeCopy)
  }

  return (
    <ModulesConfigTabs module={module}>
      {module?.config?.items?.map(({ id }: any) => (
        <PhoenixBlockConfigItems
          key={id}
          itemId={id}
          items={module?.config?.items}
          setColumns={(e: any) => update('items', e)}
        />
      ))}
      <Button
        variant="outline"
        onClick={() => newItem()}
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

function PhoenixBlockConfigItems({ itemId, items, setColumns }: any) {
  // Remove current item
  const removeItem = () => {
    const values = [...items]
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
