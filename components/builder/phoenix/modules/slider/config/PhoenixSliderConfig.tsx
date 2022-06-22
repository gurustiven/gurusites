import { v4 as uuid_v4 } from 'uuid'
import { Input, Button, Box, Separator } from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import ImageUpload from 'components/builder/interface/shared/ImageUpload'
import { useEffect, useState } from 'react'
import StickToFooter from 'components/builder/interface/config/stick/StickToFooter'

interface PhoenixSliderConfigProps {
  module: any
  isBlock?: boolean
  columnId?: any
  parentModuleId?: any
}

export default function PhoenixSliderConfig({
  module,
  isBlock,
  columnId,
  parentModuleId,
}: PhoenixSliderConfigProps) {
  // Get theme
  const { theme, setTheme, pageIndex } = useApp()

  // Get current module page index based on prop
  const modulePageIndex = theme?.pages
    .map(({ id }: any) => id)
    .indexOf(module?.pageId)

  // Set some constants
  const [themeCopy, setThemeCopy] = useState({ ...theme })

  const currentPageModule = themeCopy?.pages[modulePageIndex]?.modules

  const moduleIndex = isBlock
    ? currentPageModule?.map(({ id }: any) => id).indexOf(parentModuleId)
    : currentPageModule?.map(({ id }: any) => id).indexOf(module?.id)

  const columnIndex = currentPageModule?.[moduleIndex]?.config?.columns
    ?.map(({ id }: any) => id)
    .indexOf(columnId)

  const moduleIndexChild = currentPageModule?.[moduleIndex]?.config?.columns?.[
    columnIndex
  ]?.modules
    ?.map(({ id }: any) => id)
    .indexOf(module?.id)

  // Refresh data for constants
  useEffect(() => setThemeCopy({ ...theme }), [theme])

  // Update parent
  function update(name: any, value: any) {
    if (modulePageIndex !== -1)
      if (isBlock) {
        if (moduleIndex !== -1)
          if (columnIndex !== -1)
            moduleIndexChild !== -1 &&
              (currentPageModule[moduleIndex].config.columns[
                columnIndex
              ].modules[moduleIndexChild].config[name] = value)
      } else {
        moduleIndex !== -1 &&
          (currentPageModule[moduleIndex].config[name] = value)
      }

    setTheme(themeCopy)
  }

  // Add new item
  function newItem() {
    if (modulePageIndex !== -1)
      if (isBlock) {
        if (moduleIndex !== -1)
          if (columnIndex !== -1)
            if (moduleIndexChild !== -1)
              if (
                currentPageModule[moduleIndex]?.config?.columns[columnIndex]
                  ?.modules[moduleIndexChild].config.items
              ) {
                currentPageModule[moduleIndex]?.config?.columns[
                  columnIndex
                ]?.modules[moduleIndexChild].config.items.push({
                  id: uuid_v4(),
                  source: '',
                  text: '',
                })
              } else {
                currentPageModule[moduleIndex].config.columns[
                  columnIndex
                ].modules[moduleIndexChild].config = {
                  items: [{ id: uuid_v4(), source: '', text: '' }],
                }
              }
      } else {
        if (moduleIndex !== -1)
          if (currentPageModule[moduleIndex].config.items) {
            currentPageModule[moduleIndex].config.items.push({
              id: uuid_v4(),
              source: '',
              text: '',
            })
          } else {
            currentPageModule[moduleIndex].config = {
              items: [{ id: uuid_v4(), source: '', text: '' }],
            }
          }
      }

    setTheme(themeCopy)
  }

  return (
    <ModulesConfigTabs
      isBlock={isBlock}
      columnId={columnId}
      module={module}
      parentModuleId={parentModuleId}
    >
      {module?.config?.items?.map(({ id }: any) => (
        <PhoenixSliderConfigItems
          key={id}
          itemId={id}
          items={module?.config?.items}
          setItems={(e: any) => update('items', e)}
        />
      ))}
      <Button
        variant="outline"
        onClick={() => newItem()}
        css={{ marginTop: '12px', width: '100%' }}
      >
        Add photo +
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

function PhoenixSliderConfigItems({ itemId, items, setItems }: any) {
  const index = items?.map(({ id }: any) => id).indexOf(itemId)
  const getItem = items[index]

  // Update parent
  function update(name: any, value: any) {
    const values = [...items]
    const index = values?.map(({ id }: any) => id).indexOf(itemId)
    index !== -1 && (values[index][name] = value)
    setItems(values)
  }

  // Remove current item
  const removeItem = () => {
    const values = [...items]
    const index = values?.map(({ id }: any) => id).indexOf(itemId)
    index !== -1 && values.splice(index, 1)
    setItems(values)
  }

  return (
    <Box>
      <ImageUpload
        defaultValue={getItem?.source}
        onChange={(e: any) => update('source', e)}
      />
      <Input
        id="itemText"
        defaultValue={getItem?.text}
        placeholder="Image Text"
        css={{ margin: '4px 0', width: '100%' }}
        onChange={(e) => update('text', e.target.value)}
        size="sm"
      />
      <Button
        colorScheme="red"
        onClick={() => removeItem()}
        size="xs"
        type="button"
        variant="link"
      >
        Remove -
      </Button>
      <Separator css={{ margin: '12px 0' }} />
    </Box>
  )
}
