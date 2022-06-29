import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  HStack,
  Stack,
} from '@guruhotel/aura-ui'
import { GearIcon, TrashIcon } from '@radix-ui/react-icons'
import { useApp } from 'components/context/AppContext'

export default function LayoutPagesActions({ opened, setOpened, data }: any) {
  const { theme, setTheme } = useApp()

  // Get current element
  const { name } = data?.config

  // Remove page
  function deletePage(pageId: any) {
    const values = { ...theme }
    const currentPageIndex = values?.pages?.map((id: any) => id).indexOf(pageId)
    values?.pages?.splice(currentPageIndex, 1)
    setTheme(values)
  }

  return (
    <HStack spacing="1" css={{ marginTop: '8px' }}>
      <Button
        colorScheme="guru"
        variant="flat"
        size="xs"
        type="button"
        onClick={() => setOpened(!opened)}
      >
        <GearIcon style={{ marginRight: '2px' }} /> Settings
      </Button>
      {name !== 'Home' && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button colorScheme="red" variant="flat" size="xs" type="button">
              <TrashIcon style={{ marginRight: '2px' }} /> Delete page
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent isCentered size="lg" style={{ zIndex: '9999' }}>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              page and their content.
            </AlertDialogDescription>
            <Stack css={{ justifyContent: 'flex-end' }}>
              <AlertDialogCancel asChild>
                <Button colorScheme="gray" css={{ marginRight: 25 }}>
                  Cancel
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button colorScheme="red" onClick={() => deletePage(data?.id)}>
                  Yes, delete page and content
                </Button>
              </AlertDialogAction>
            </Stack>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </HStack>
  )
}
