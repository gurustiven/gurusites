import { Box, Container, HStack, Text } from '@guruhotel/aura-ui'
import { ReactNode } from 'react'
import SettingsLayoutMenu from './SettingsLayoutMenu'

interface SettingsLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

export default function SettingsLayout({
  title,
  description,
  children,
}: SettingsLayoutProps) {
  return (
    <Container css={{ marginTop: '20px' }}>
      <HStack alignItems="flex-start">
        <SettingsLayoutMenu />
        <Box css={{ padding: '0 0 0 32px', width: '80%' }}>
          <Box
            css={{
              border: '1px solid $darkie4',
              borderRadius: '8px',
              padding: '32px',
              paddingTop: '20px',
              width: '100%',
            }}
          >
            {title && (
              <Text as="h2">
                {title}
              </Text>
            )}
            {description && (
              <Text as="p" color="text">
                {description}
              </Text>
            )}
            {children}
          </Box>
        </Box>
      </HStack>
    </Container>
  )
}
