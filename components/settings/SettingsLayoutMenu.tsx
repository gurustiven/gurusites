import { Box, Button } from '@guruhotel/aura-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SettingsLayoutMenu() {
  const router = useRouter()
  const { pathname } = router

  return (
    <Box css={{ width: '20%' }}>
      <Link href="/settings/general">
        <Button
          colorScheme="darkie"
          variant={pathname?.includes('general') ? 'solid' : 'link'}
          type="button"
          css={{ justifyContent: 'flex-start', margin: '4px 0', width: '100%' }}
        >
          General
        </Button>
      </Link>
      <Link href="/settings/theme">
        <Button
          colorScheme="darkie"
          variant={pathname?.includes('theme') ? 'solid' : 'link'}
          type="button"
          css={{ justifyContent: 'flex-start', margin: '4px 0', width: '100%' }}
        >
          Theme
        </Button>
      </Link>
      <Link href="/settings/integrations">
        <Button
          colorScheme="darkie"
          variant={pathname?.includes('integrations') ? 'solid' : 'link'}
          type="button"
          css={{ justifyContent: 'flex-start', margin: '4px 0', width: '100%' }}
        >
          Integrations
        </Button>
      </Link>
    </Box>
  )
}
