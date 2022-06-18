import styles from './New.module.scss'
import { Box, Button, HStack } from '@guruhotel/aura-ui'
import { useApp } from '../../../../context/AppContext'
import { v4 as uuid_v4 } from 'uuid'
import { ImageIcon, ColumnsIcon } from '@radix-ui/react-icons'
import Sidebar from '../../shared/Sidebar'
import NewModuleButton from './NewModuleButton'

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

  // Add new module
  function addNewModule(module: string, defaultStyle?: object) {
    const values = { ...theme }
    const index = values?.pages?.map(({ id }: any) => id).indexOf(pageId)
    if (index !== -1) {
      if (isBlock) {
        const indexModule = values?.pages[index]?.modules
          ?.map(({ id }: any) => id)
          .indexOf(moduleId)
        if (indexModule !== -1) {
          const indexColumn = values?.pages[index]?.modules[
            indexModule
          ]?.config?.columns
            ?.map(({ id }: any) => id)
            .indexOf(columnId)
          if (indexColumn !== -1) {
            values?.pages[index]?.modules[indexModule]?.config?.columns[
              indexColumn
            ]?.modules?.push({
              id: uuid_v4(),
              name: module,
              config: [],
              style: defaultStyle || {},
            })
          }
        }
      } else {
        values?.pages[index]?.modules?.push({
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
            label="Photo slider"
            onClick={() =>
              addNewModule('slider', {
                general: {
                  containerWidth: '100%',
                },
                desktop: {
                  backgroundColor: 'black',
                },
              })
            }
          />
          {!isBlock && (
            <NewModuleButton
              icon={<ColumnsIcon />}
              label="Block"
              onClick={() =>
                addNewModule('block', {
                  container: {
                    width: '100%',
                  },
                  desktop: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                  },
                })
              }
            />
          )}
        </HStack>
      </Sidebar>
    </Box>
  )
}
