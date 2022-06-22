import { useApp } from 'components/context/AppContext'
import { Box, Button, HStack } from '@guruhotel/aura-ui'
import { v4 as uuid_v4 } from 'uuid'
import { ImageIcon, ColumnsIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import Sidebar from 'components/builder/interface/shared/Sidebar'
import styles from './New.module.scss'
import useIndex from 'components/builder/useIndex'

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

  // Refresh data for constants
  const themeCopy = { ...theme }

  // Get child module from page module
  const currentPageModuleChild = theme?.pages.map(({ modules }: any) =>
    modules.filter(({ id }: any) => id === parentModuleId)
  )

  // Set some constants
  const { modulePageIndex, moduleIndex, columnIndex } = useIndex(
    isBlock,
    parentModuleId,
    columnId,
    module?.id,
    currentPageModuleChild?.flat(1)[0]?.pageId
  )

  // Add new module
  function addModulesConfigActionsNew(module: string, defaultStyle?: object) {
    if (isBlock) {
      // Push new module to current block
      themeCopy?.pages[modulePageIndex]?.modules[moduleIndex]?.config?.columns[
        columnIndex
      ]?.modules?.push({
        id: uuid_v4(),
        name: module,
        config: [],
        style: defaultStyle || {},
        pageId: currentPageModuleChild?.flat(1)[0]?.pageId,
      })
    } else {
      // Push new module to current page
      themeCopy?.pages[pageIndex]?.modules?.push({
        id: uuid_v4(),
        name: module,
        config: [],
        style: defaultStyle || {},
        pageId,
      })
    }

    // Update theme
    setTheme(themeCopy)
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
    <button onClick={onClick} type="button" className={styles.new}>
      <Box as="span" className={styles.icon}>
        {icon}
      </Box>
      <Box as="span">{label}</Box>
    </button>
  )
}
