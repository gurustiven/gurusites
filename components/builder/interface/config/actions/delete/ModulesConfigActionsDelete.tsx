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
import { useApp } from 'components/context/AppContext'

export default function ModulesConfigActionsDelete({ module }: any) {
  // Get theme
  const { theme, setTheme } = useApp()

  const pageIndex = theme?.pages
    .map(({ id }: any) => id)
    .indexOf(module?.pageId)

  // Delete function
  function deleteModule() {
    const values = { ...theme }
    const moduleIndex = values?.pages?.[pageIndex]?.modules
      ?.map(({ id }: any) => id)
      .indexOf(module?.id)
    if (pageIndex !== -1 && moduleIndex !== -1)
      values?.pages?.[pageIndex]?.modules?.splice(moduleIndex, 1)
    setTheme(values)
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
