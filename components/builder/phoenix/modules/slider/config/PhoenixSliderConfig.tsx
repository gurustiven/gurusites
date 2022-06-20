import { v4 as uuid_v4 } from 'uuid'
import { Input, Button, Box, Separator } from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import ImageUpload from 'components/builder/interface/shared/ImageUpload'
import { useEffect, useState } from 'react'

interface PhoenixSliderConfigProps {
  module: any
  pageId: any
  isBlock?: boolean
  columnId?: any
  moduleId?: any
}

export default function PhoenixSliderConfig({
  module,
  pageId,
  isBlock,
  columnId,
  moduleId,
}: PhoenixSliderConfigProps) {
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

    if (pageIndex !== -1)
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

    setTheme(values)
  }

  // Add new item
  function newItem() {
    const values = { ...theme }

    if (pageIndex !== -1)
      if (isBlock) {
        if (moduleIndex !== -1)
          if (columnIndex !== -1)
            if (moduleIndexChild !== -1)
              if (
                values?.pages[pageIndex]?.modules[moduleIndex]?.config?.columns[
                  columnIndex
                ]?.modules[moduleIndexChild].config.items
              ) {
                values?.pages[pageIndex]?.modules[moduleIndex]?.config?.columns[
                  columnIndex
                ]?.modules[moduleIndexChild].config.items.push({
                  id: uuid_v4(),
                  source: '',
                  text: '',
                })
              } else {
                values.pages[pageIndex].modules[moduleIndex].config.columns[
                  columnIndex
                ].modules[moduleIndexChild].config = {
                  items: [{ id: uuid_v4(), source: '', text: '' }],
                }
              }
      } else {
        if (moduleIndex !== -1)
          if (values.pages[pageIndex].modules[moduleIndex].config.items) {
            values.pages[pageIndex].modules[moduleIndex].config.items.push({
              id: uuid_v4(),
              source: '',
              text: '',
            })
          } else {
            values.pages[pageIndex].modules[moduleIndex].config = {
              items: [{ id: uuid_v4(), source: '', text: '' }],
            }
          }
      }

    setTheme(values)
  }

  return (
    <ModulesConfigTabs
      isBlock={isBlock}
      columnId={columnId}
      pageId={pageId}
      module={module}
      moduleId={moduleId}
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
