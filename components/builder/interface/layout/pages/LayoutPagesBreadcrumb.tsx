import { ChevronRightRegular, GearRegular } from '@guruhotel/aura-icons'
import { Button, HStack, VStack, Text, Badge } from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'
import { useRouter } from 'next/router'

export default function LayoutPagesBreadcrumb() {
  const { theme } = useApp()
  const router = useRouter()
  const { p } = router.query

  // Get current page
  const currentPage = theme?.pages?.find((item: any) => item.id === p)?.config

  return (
    <VStack>
      <HStack>
        <GearRegular
          color="darkie"
          label="settings"
          css={{ marginRight: '2px' }}
        />
        <Button colorScheme="darkie" css={{ display: 'block' }} variant="link">
          Pages
        </Button>
        <ChevronRightRegular
          label="spacer"
          size="xs"
          css={{ marginRight: '12px' }}
        />
        <Button colorScheme="darkie" css={{ display: 'block' }} variant="flat">
          {currentPage?.name || '-'}
        </Button>
      </HStack>
    </VStack>
  )
}
