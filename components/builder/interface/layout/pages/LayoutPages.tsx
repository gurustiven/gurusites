import { useClickOutside } from '@guruhotel/aura-hooks'
import { Box, Button, Center } from '@guruhotel/aura-ui'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { v4 as uuid_v4 } from 'uuid'
import { useApp } from 'components/context/AppContext'
import Sidebar from '../../shared/Sidebar'
import LayoutPagesBreadcrumb from './LayoutPagesBreadcrumb'
import LayoutPagesEdit from './LayoutPagesEdit'
import LayoutPagesItem from './LayoutPagesItem'
import LayoutPagesActions from './LayoutPagesActions'

export default function LayoutPages() {
  const router = useRouter()
  const { p } = router.query
  const { theme, setTheme } = useApp()

  // Add new page
  function newPage() {
    const values = { ...theme }
    values?.pages?.push({
      id: uuid_v4(),
      config: {},
      modules: [],
    })
    setTheme(values)
  }

  if (theme && p) {
    return (
      <Sidebar
        title="Pages"
        trigger={
          <span>
            <LayoutPagesBreadcrumb />
          </span>
        }
      >
        <Box css={{ marginTop: '20px' }}>
          {theme?.pages?.map((item: any, key: any) => (
            <LayoutPagesCreator key={key} data={item} />
          ))}
        </Box>
        <Center>
          <Button
            colorScheme="guru"
            variant="solid"
            onClick={() => newPage()}
          >
            Add new page +
          </Button>
        </Center>
      </Sidebar>
    )
  }

  return null
}

function LayoutPagesCreator({ data }: any) {
  // Change state to edit
  const [opened, setOpened] = useState(false)
  const ref = useClickOutside(() => setOpened(false))

  return (
    <Box
      ref={ref}
      css={
        opened
          ? {
              border: '2px solid $darkie8',
              borderRadius: '8px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              width: '100%',
              margin: '24px 0',
              padding: '16px',
              position: 'relative',
            }
          : {
              borderBottom: '1px solid $darkie3',
              marginBottom: '16px',
              paddingBottom: '16px',
              position: 'relative',
            }
      }
    >
      {opened ? (
        <LayoutPagesEdit data={data} setOpened={setOpened} opened={opened} />
      ) : (
        <LayoutPagesItem data={data} />
      )}
      {!opened && (
        <LayoutPagesActions data={data} opened={opened} setOpened={setOpened} />
      )}
    </Box>
  )
}
