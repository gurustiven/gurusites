import styles from './New.module.scss'
import { Box, Button, HStack } from '@guruhotel/aura-ui'
import { useApp } from '../../../../context/AppContext'
import { v4 as uuid_v4 } from 'uuid'
import { ImageIcon, ColumnsIcon } from '@radix-ui/react-icons'
import Sidebar from '../../shared/Sidebar'
import NewModuleButton from './NewModuleButton'
import { useEffect, useState } from 'react'

interface NewModuleProps {
  pageId: any
  isBlock?: boolean
  moduleId?: any
  columnId?: any
}

export default function NewModule({
  pageId,
  isBlock,
  moduleId,
  columnId,
}: NewModuleProps) {
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

  // Refresh data for constants
  useEffect(() => setThemeCopy({ ...theme }), [theme])

  // Add new module
  function addNewModule(module: string, defaultStyle?: object) {
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
            })
          }
        }
      } else {
        values?.pages[pageIndex]?.modules?.push({
          id: uuid_v4(),
          name: module,
          config: [],
          style: defaultStyle || {},
        })
      }
    }
    setTheme(values)
  }

  return (
    <Box className={styles.new}>
      <Sidebar
        title="New module"
        position="right"
        trigger={
          <Button colorScheme="darkie" variant="outline">
            Add new module +
          </Button>
        }
      >
        <HStack spacing="2">
          <NewModuleButton
            icon={<ImageIcon />}
            label="Content"
            onClick={() =>
              addNewModule('content', {
                general: {
                  containerWidth: theme?.general?.container?.maxWidth,
                },
              })
            }
          />
          <NewModuleButton
            icon={<ImageIcon />}
            label="Photo slider"
            onClick={() =>
              addNewModule('slider', {
                general: {
                  containerWidth: '100%',
                },
                desktop: {
                  background: 'black',
                },
              })
            }
          />
          <NewModuleButton
            icon={<ColumnsIcon />}
            label="Block"
            onClick={() =>
              addNewModule('block', {
                container: {
                  width: '100%',
                },
                desktop: {
                  background: 'black',
                },
              })
            }
          />
          <NewModuleButton
            icon={<ColumnsIcon />}
            label="Title"
            onClick={() =>
              addNewModule('title', {
                container: {
                  width: '100%',
                },
              })
            }
          />
        </HStack>
      </Sidebar>
    </Box>
  )
}
