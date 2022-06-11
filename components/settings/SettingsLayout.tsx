import { Box, Button, Container, HStack, Separator, Text } from "@guruhotel/aura-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface SettingsLayoutProps {
  children: ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const router = useRouter()
  const { pathname } = router
  return (
    <Container css={{ marginTop: '20px' }}>
      <HStack alignItems='flex-start'>
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
        <Box css={{ padding: '0 0 0 32px', width: '80%' }}>
          <Box css={{ border: '1px solid $darkie4', borderRadius: '8px', padding: '32px', width: '100%' }}>
            {children}
          </Box>
        </Box>
      </HStack>
    </Container>
  )
}
