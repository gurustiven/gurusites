import { useApp } from 'components/context/AppContext'
import { Box, HStack } from '@guruhotel/aura-ui'
import { v4 as uuid_v4 } from 'uuid'
import { ImageIcon, ColumnsIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import Sidebar from 'components/builder/interface/shared/Sidebar'
import styles from './New.module.scss'
import useIndex from 'components/builder/phoenix/utils/useIndex'
import { ReactNode } from 'react'

interface ModulesConfigActionsNewProps {
  isBlock?: boolean
  parentModuleId?: any
  columnId?: any
  children: ReactNode
}

export default function ModulesConfigActionsNew({
  isBlock,
  parentModuleId,
  columnId,
  children,
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
      themeCopy?.pages[modulePageIndex]?.modules[moduleIndex]?.config?.items[
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
    <Sidebar title="New module" position="right" trigger={children}>
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
                background: '#A4A3BD',
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
                margin: '8px 0',
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
                margin: '8px 0',
                padding: '4px 0',
              },
            })
          }
        />
        <ModulesConfigActionsNewButton
          icon={<ColumnsIcon />}
          label="Paragraph"
          onClick={() =>
            addModulesConfigActionsNew('paragraph', {
              container: {
                width: '100%',
              },
              desktop: {
                lineHeight: '1.5',
                margin: '8px 0',
                padding: '4px 0',
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
