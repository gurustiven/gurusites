import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Stack,
} from '@guruhotel/aura-ui'
import { TrashIcon } from '@radix-ui/react-icons'
import useIndex from 'components/builder/phoenix/utils/useIndex'
import { useApp } from 'components/context/AppContext'

export default function ModulesConfigActionsDelete({
  module,
  isBlock,
  parentModuleId,
  columnId,
}: any) {
  // Get theme
  const { theme, setTheme } = useApp()

  // Refresh data for constants
  const themeCopy = { ...theme }

  // Get child module from page module
  const currentPageModuleChild = isBlock
    ? theme?.pages.map(({ modules }: any) =>
        modules.filter(({ id }: any) => id === parentModuleId)
      )
    : themeCopy?.pages.map(({ modules }: any) =>
        modules.filter(({ id }: any) => id === module?.id)
      )

  // Set some constants
  const { modulePageIndex, moduleIndex, columnIndex, moduleIndexChild } =
    useIndex(
      isBlock,
      parentModuleId,
      columnId,
      module?.id,
      currentPageModuleChild?.flat(1)[0]?.pageId
    )

  // Delete function
  function deleteModule() {
    if (isBlock)
      // Push new module to current block
      themeCopy?.pages[modulePageIndex]?.modules[moduleIndex]?.config?.items[
        columnIndex
      ]?.modules.splice(moduleIndexChild, 1)
    // Remove module in current page
    else themeCopy?.pages?.[modulePageIndex]?.modules?.splice(moduleIndex, 1)

    // Update theme
    setTheme(themeCopy)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button">
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent isCentered size="lg" style={{ zIndex: '9999' }}>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete this
          module.
        </AlertDialogDescription>
        <Stack css={{ justifyContent: 'flex-end' }}>
          <AlertDialogCancel asChild>
            <Button colorScheme="gray" css={{ marginRight: 25 }}>
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button colorScheme="red" onClick={() => deleteModule()}>
              Yes, delete module
            </Button>
          </AlertDialogAction>
        </Stack>
      </AlertDialogContent>
    </AlertDialog>
  )
}
