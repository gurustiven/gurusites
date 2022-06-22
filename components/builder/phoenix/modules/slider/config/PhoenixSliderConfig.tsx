import { v4 as uuid_v4 } from 'uuid'
import { Input, Button, Box, Separator } from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import ImageUpload from 'components/builder/interface/shared/ImageUpload'
import StickToFooter from 'components/builder/interface/config/stick/StickToFooter'
import useIndex from 'components/builder/useIndex'

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
      currentPageModule[moduleIndex].config.columns[columnIndex].modules[
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
      currentPageModule[moduleIndex]?.config?.columns?.[columnIndex]

    // Set values to add
    const valuesToPush = { id: uuid_v4(), source: '', text: '' }

    // If current module is in block
    if (isBlock) {
      if (childColumn?.modules[moduleIndexChild].config.items)
        childColumn?.modules[moduleIndexChild].config.items.push(valuesToPush)
      else
        childColumn.modules[moduleIndexChild].config = {
          items: [valuesToPush],
        }
      // If current module is not in block
    } else {
      if (currentPageModule[moduleIndex].config.items)
        currentPageModule[moduleIndex].config.items.push({
          id: uuid_v4(),
          source: '',
          text: '',
        })
      else
        currentPageModule[moduleIndex].config = {
          items: [valuesToPush],
        }
    }

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
