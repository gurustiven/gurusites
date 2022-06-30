/* eslint-disable @next/next/no-img-element */
import { Badge, Box, Button, HStack, Stack } from '@guruhotel/aura-ui'
import { LaptopIcon, MobileIcon } from '@radix-ui/react-icons'
import { useApp } from 'components/context/AppContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LayoutHeader() {
  const router = useRouter()
  const { pathname, query } = router
  const { p: padeId, viewport } = query

  // Get theme
  const { theme } = useApp()

  // Save progress in localstorage
  function save() {
    localStorage.setItem('theme', JSON.stringify(theme))
  }

  function reset() {
    localStorage.removeItem('theme')
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      css={{
        background: 'white',
        borderBottom: '1px solid $darkie4',
        height: '68px',
        padding: '0 20px',
        width: '100%',
      }}
    >
      <Box css={{ width: '33.33%' }}>
        <Link href="/">
          <Box
            css={{
              borderRight: '1px solid $darkie4',
              cursor: 'pointer',
              display: 'inline-block',
              paddingRight: '16px',
              verticalAlign: 'middle',
            }}
          >
            <img
              src="/guruhotel.svg"
              alt="GuruHotel"
              style={{ height: '28px' }}
            />
          </Box>
        </Link>
        <Box css={{ display: 'inline-flex', marginLeft: '8px' }}>
          <Link href="/dashboard">
            <Button
              colorScheme={pathname?.includes('dashboard') ? 'guru' : 'darkie'}
              variant={pathname?.includes('dashboard') ? 'solid' : 'link'}
              type="button"
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/builder?p=798e4870-c94f-43f5-aff6-0023211a1f8f">
            <Button
              colorScheme={pathname?.includes('builder') ? 'guru' : 'darkie'}
              variant={pathname?.includes('builder') ? 'solid' : 'link'}
              type="button"
            >
              Builder
            </Button>
          </Link>
          <Link href="/settings/general">
            <Button
              colorScheme={pathname?.includes('settings') ? 'guru' : 'darkie'}
              variant={pathname?.includes('settings') ? 'solid' : 'link'}
              type="button"
            >
              Settings
            </Button>
          </Link>
        </Box>
      </Box>
      {pathname?.includes('builder') && (
        <HStack
          alignItems="center"
          justifyContent="center"
          spacing="1"
          css={{ width: '33.33%' }}
        >
          <Button
            colorScheme={!viewport?.includes('mobile') ? 'guru' : 'darkie'}
            variant={!viewport?.includes('mobile') ? 'solid' : 'link'}
            onClick={() =>
              router.push({
                pathname: '/builder',
                query: { p: padeId, viewport: 'desktop' },
              })
            }
          >
            <LaptopIcon />
          </Button>
          <Button
            colorScheme={viewport?.includes('mobile') ? 'guru' : 'darkie'}
            variant={viewport?.includes('mobile') ? 'solid' : 'link'}
            onClick={() =>
              router.push({
                pathname: '/builder',
                query: { p: padeId, viewport: 'mobile' },
              })
            }
          >
            <MobileIcon />
          </Button>
        </HStack>
      )}
      <Box
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '33.33%',
        }}
      >
        <Badge
          size="lg"
          css={{
            background: 'transparent',
            color: '$darkie8',
            fontWeight: '$normal',
            marginRight: '8px',
          }}
        >
          Edited 2 hours ago
        </Badge>
        <Button
          colorScheme="red"
          size="sm"
          css={{ marginRight: '8px' }}
          variant="link"
          onClick={() => reset()}
        >
          Reset
        </Button>
        <Button
          colorScheme="darkie"
          size="sm"
          css={{ marginRight: '8px' }}
          variant="outline"
          onClick={() => save()}
        >
          Save
        </Button>
        <Button size="sm" colorScheme="guru">
          Publish
        </Button>
      </Box>
    </Stack>
  )
}
