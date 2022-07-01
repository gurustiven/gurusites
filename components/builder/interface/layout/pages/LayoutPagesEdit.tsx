import { Button, HStack, Input, Label, TextArea } from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'
import { useEffect, useState } from 'react'
import Slugify from 'utils/Slugify'

export default function LayoutPagesEdit({ data, setOpened, opened }: any) {
  const { theme, setTheme } = useApp()

  // Get current element
  const { name, route, title, description } = data?.config

  // Current element edited
  const [editedData, setEditedData] = useState({
    name,
    route,
    title,
    description,
  })

  // Update parent
  const updateParent = () => {
    const values = { ...theme }
    const index = values?.pages?.map((page: any) => page?.id).indexOf(data?.id)
    if (index !== -1) values.pages[index].config = editedData
    setTheme(values)
  }

  // Get slug from name
  useEffect(() => {
    if (!name) {
      const slug = Slugify(editedData?.name)
      setEditedData({ ...editedData, route: slug })
    }
  }, [editedData?.name, name, editedData])

  return (
    <>
      <Label htmlFor="pageName">Page name</Label>
      <Input
        id="pageName"
        defaultValue={name}
        placeholder="Name"
        size="sm"
        style={{ margin: '4px 0 8px 0', width: '100%' }}
        onChange={(e: any) =>
          setEditedData({ ...editedData, name: e.target.value })
        }
        autoComplete="off"
        disabled={name === 'Home'}
      />
      <Label htmlFor="pageRoute">Page route (URL)</Label>
      <Input
        id="pageRoute"
        defaultValue={route || editedData?.route}
        placeholder="Route"
        size="sm"
        style={{ margin: '4px 0 8px 0', width: '100%' }}
        onChange={(e: any) =>
          setEditedData({ ...editedData, route: Slugify(e.target.value) })
        }
        autoComplete="off"
        disabled={name === 'Home'}
      />
      <Label htmlFor="pageTitle">Page title</Label>
      <Input
        id="pageTitle"
        defaultValue={title || editedData?.title}
        placeholder="Title"
        size="sm"
        style={{ margin: '4px 0 8px 0', width: '100%' }}
        onChange={(e: any) =>
          setEditedData({ ...editedData, title: e.target.value })
        }
        autoComplete="off"
      />
      <Label htmlFor="pageDescription">Page description</Label>
      <TextArea
        id="pageDescription"
        defaultValue={description}
        placeholder="Page description"
        style={{ margin: '4px 0 8px 0', width: '100%' }}
        onChange={(e: any) =>
          setEditedData({ ...editedData, description: e.target.value })
        }
        autoComplete="off"
      />
      <HStack justifyContent="flex-end" spacing="2">
        <Button
          colorScheme="darkie"
          variant="flat"
          size="sm"
          type="button"
          onClick={() => {
            setOpened(!opened)
          }}
        >
          Cancel
        </Button>
        <Button
          size="sm"
          type="button"
          onClick={() => {
            updateParent()
            setOpened(!opened)
          }}
        >
          Save changes
        </Button>
      </HStack>
    </>
  )
}
