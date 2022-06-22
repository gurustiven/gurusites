import { Box, Button, HStack } from '@guruhotel/aura-ui'
import { v4 as uuid_v4 } from 'uuid'
import { ImageIcon, ColumnsIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import Sidebar from 'components/builder/interface/shared/Sidebar'
import { useApp } from 'components/context/AppContext'

interface ModulesConfigActionsNewProps {
  isBlock?: boolean
  parentModuleId?: any
  columnId?: any
}

export default function ModulesConfigActionsNew({
  isBlock,
  parentModuleId,
  columnId,
}: ModulesConfigActionsNewProps) {
  // Get theme
  const { theme, setTheme, pageIndex, pageId } = useApp()

  // Set some constants
  const [themeCopy, setThemeCopy] = useState({ ...theme })
  const moduleIndex = isBlock
    ? themeCopy?.pages?.[pageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(parentModuleId)
    : themeCopy?.pages?.[pageIndex]?.modules
        ?.map(({ id }: any) => id)
        .indexOf(module?.id)
  const columnIndex = themeCopy?.pages?.[pageIndex]?.modules?.[
    moduleIndex
  ]?.config?.columns
    ?.map(({ id }: any) => id)
    .indexOf(columnId)

  // Refresh data for constants
  useEffect(() => setThemeCopy({ ...theme }), [theme])

  // Add new module
  function addModulesConfigActionsNew(module: string, defaultStyle?: object) {
    const values = { ...theme }

    if (pageIndex !== -1) {
      if (isBlock) {
        if (moduleIndex !== -1) {
          if (columnIndex !== -1) {
            values?.pages[pageIndex]?.modules[moduleIndex]?.config?.columns[
              columnIndex
            ]?.modules?.push({
              id: uuid_v4(),
              name: module,
              config: [],
              style: defaultStyle || {},
              pageId,
            })
          }
        }
      } else {
        values?.pages[pageIndex]?.modules?.push({
          id: uuid_v4(),
          name: module,
          config: [],
          style: defaultStyle || {},
          pageId,
        })
      }
    }
    setTheme(values)
  }

  return (
    <Sidebar
      title="New module"
      position="right"
      trigger={
        <Button type="button">
          <PlusCircledIcon />
        </Button>
      }
    >
      <HStack spacing="2">
        <ModulesConfigActionsNewButton
          icon={<ImageIcon />}
          label="Content"
          onClick={() =>
            addModulesConfigActionsNew('content', {
              general: {
                containerWidth: theme?.general?.container?.maxWidth,
              },
            })
          }
        />
        <ModulesConfigActionsNewButton
          icon={<ImageIcon />}
          label="Photo slider"
          onClick={() =>
            addModulesConfigActionsNew('slider', {
              general: {
                containerWidth: '100%',
              },
              desktop: {
                background: 'black',
              },
            })
          }
        />
        <ModulesConfigActionsNewButton
          icon={<ColumnsIcon />}
          label="Block"
          onClick={() =>
            addModulesConfigActionsNew('block', {
              container: {
                width: '100%',
              },
              desktop: {
                background: 'black',
              },
            })
          }
        />
        <ModulesConfigActionsNewButton
          icon={<ColumnsIcon />}
          label="Title"
          onClick={() =>
            addModulesConfigActionsNew('title', {
              container: {
                width: '100%',
              },
              desktop: {
                lineHeight: '1.5',
                paddingBottom: '12px',
                paddingTop: '12px',
              },
            })
          }
        />
      </HStack>
    </Sidebar>
  )
}

function ModulesConfigActionsNewButton({ icon, label, onClick }: any) {
  return (
    <button onClick={onClick} type="button">
      <Box as="span">{icon}</Box>
      <Box as="span">{label}</Box>
    </button>
  )
}
