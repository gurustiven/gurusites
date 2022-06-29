import { useClickOutside } from '@guruhotel/aura-hooks'
import { ChevronRightRegular, GearRegular } from '@guruhotel/aura-icons'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  Box,
  Button,
  Center,
  HStack,
  Input,
  Label,
  Separator,
  Stack,
  Text,
  TextArea,
} from '@guruhotel/aura-ui'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { v4 as uuid_v4 } from 'uuid'
import { useApp } from 'components/context/AppContext'
import Sidebar from '../../shared/Sidebar'
import { useSlugify } from 'utils/useSlugify'

export default function LayoutPages() {
  const router = useRouter()
  const { p } = router.query
  const { theme, setTheme } = useApp()

  // Add new page
  function newPage() {
    const values = { ...theme }
    values?.pages?.push({ id: uuid_v4(), name: '', route: '', modules: [] })
    setTheme(values)
  }

  // Remove page
  function deletePage(pageId: any) {
    const values = { ...theme }
    const currentPageIndex = values?.pages?.map((id: any) => id).indexOf(pageId)
    values?.pages?.splice(currentPageIndex, 1)
    setTheme(values)
  }

  if (theme && p) {
    return (
      <Sidebar
        title="Pages"
        trigger={
          <HStack>
            <GearRegular
              color="darkie"
              label="settings"
              css={{ marginRight: '2px' }}
            />
            <Button
              colorScheme="darkie"
              css={{ display: 'block' }}
              variant="link"
            >
              Pages
            </Button>
            <ChevronRightRegular
              label="spacer"
              size="xs"
              css={{ marginRight: '12px' }}
            />
            <Button
              colorScheme="darkie"
              css={{ display: 'block' }}
              variant="flat"
            >
              {p
                ? `${theme?.pages?.filter(({ id }: any) => id === p)[0]?.name}`
                : 'Home'}
            </Button>
          </HStack>
        }
      >
        <Box css={{ marginTop: '20px' }}>
          {theme?.pages?.map((item: any, key: any) => (
            <LayoutPagesCreator
              key={key}
              data={item}
              theme={theme}
              setTheme={setTheme}
              deletePage={deletePage}
            />
          ))}
        </Box>
        <Center>
          <Button
            colorScheme="darkie"
            variant="outline"
            onClick={() => newPage()}
          >
            Add new +
          </Button>
        </Center>
      </Sidebar>
    )
  }

  return null
}

function LayoutPagesCreator({ data, theme, setTheme, deletePage }: any) {
  const router = useRouter()

  // Get current element
  const { id, name, route, title, description } = data

  // Update parent
  const update = (name: string, value: any) => {
    const values = { ...theme }
    const index = values?.pages?.map((page: any) => page?.id).indexOf(id)
    index !== -1 && (values.pages[index][name] = value)
    setTheme(values)
  }

  // Change state to edit
  const [opened, setOpened] = useState(false)
  const ref = useClickOutside(() => setOpened(false))

  // Update route with name
  useEffect(() => {
    if (name) update('route', useSlugify(name))
  }, [name])

  return (
    <Box
      ref={ref}
      css={
        opened
          ? {
              border: '1px solid $darkie4',
              borderRadius: '8px',
              width: '100%',
              margin: '24px 0',
              padding: '16px',
              position: 'relative',
            }
          : {
              borderBottom: '1px solid $darkie4',
              marginBottom: '16px',
              paddingBottom: '16px',
              position: 'relative',
            }
      }
    >
      {opened ? (
        <>
          <Text css={{ margin: '0 0 8px 0' }}>General</Text>
          <Label htmlFor="pageName">Page name</Label>
          <Input
            id="pageName"
            defaultValue={name}
            placeholder="Name"
            size="sm"
            style={{ margin: '8px 0', width: '100%' }}
            onChange={(e) => update('name', e.target.value)}
          />
          <Separator css={{ margin: '8px 0' }} />
          <Text css={{ margin: '8px 0' }}>Edit SEO</Text>
          <Label htmlFor="pageName">Page route (URL)</Label>
          <Input
            id="pageRoute"
            defaultValue={route}
            placeholder="Route"
            size="sm"
            style={{ margin: '8px 0', width: '100%' }}
            onChange={(e) => update('route', e.target.value)}
          />
          <Separator css={{ margin: '8px 0' }} />
          <Label htmlFor="pageName">SEO Title</Label>
          <Input
            placeholder="Page title"
            size="sm"
            style={{ margin: '4px 0', width: '100%' }}
            onChange={(e) => update('title', e.target.value)}
          />
          <Separator css={{ margin: '8px 0' }} />
          <Label htmlFor="pageName">SEO Description</Label>
          <TextArea
            placeholder="Page description"
            style={{ margin: '4px 0', width: '100%' }}
            onChange={(e) => update('description', e.target.value)}
          />
        </>
      ) : (
        <>
          <Button
            colorScheme="darkie"
            variant="outline"
            onClick={() => router.push(`/builder/?p=${id}`)}
            css={{
              height: '40px',
              marginTop: '-24px',
              position: 'absolute',
              right: '0',
              top: '50%',
              width: '40px',
            }}
          >
            <ChevronRightIcon />
          </Button>
          <Text fontWeight="bold">{name || '-'}</Text>
          <Text as="span" fontSize="sm" css={{ color: '$text10' }}>
            Route:{' '}
            <Text
              fontWeight="bold"
              css={{ color: '$darkie', display: 'inline' }}
            >
              /{route || 'empty'}
            </Text>
          </Text>
        </>
      )}
      <HStack
        alignItems="center"
        justifyContent="space-between"
        css={
          opened
            ? { margin: '4px 0 0 0', width: '100%' }
            : {
                margin: '0 -6px',
                width: '100%',
              }
        }
      >
        <Button
          colorScheme={opened ? 'guru' : 'primary'}
          variant={opened ? 'solid' : 'link'}
          size={opened ? 'sm' : 'xs'}
          onClick={() => setOpened(!opened)}
          type="button"
        >
          {opened ? 'Save changes' : 'Edit page'}
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            {opened && (
              <Button
                colorScheme="text"
                variant="link"
                size={opened ? 'sm' : 'xs'}
                type="button"
              >
                Delete
              </Button>
            )}
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
                <Button colorScheme="red" onClick={() => deletePage(id)}>
                  Yes, delete page and content
                </Button>
              </AlertDialogAction>
            </Stack>
          </AlertDialogContent>
        </AlertDialog>
      </HStack>
    </Box>
  )
}
