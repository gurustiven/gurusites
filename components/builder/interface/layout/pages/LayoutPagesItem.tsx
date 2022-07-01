import { Button, Text } from '@guruhotel/aura-ui'
import { useRouter } from 'next/router'
import { useApp } from 'components/context/AppContext'
import { ChevronRightIcon } from '@radix-ui/react-icons'

export default function LayoutPagesItem({ data }: any) {
  const router = useRouter()

  // Get theme
  const { pageId } = useApp()

  // Get current element
  const { name, route } = data?.config

  // Set page comparer
  const pageComparer = pageId === data?.id

  return (
    <>
      <Button
        colorScheme="darkie"
        variant={pageComparer ? 'solid' : 'outline'}
        onClick={() => router.push(`/builder/?p=${data?.id}`)}
        css={{
          marginTop: '-24px',
          position: 'absolute',
          right: '0',
          top: '50%',
        }}
        size="sm"
      >
        {pageComparer ? 'Editing' : 'Select'} <ChevronRightIcon />
      </Button>
      <Text fontWeight="bold">{name || '-'}</Text>
      <Text as="span" fontSize="sm" css={{ color: '$darkie8' }}>
        Route:{' '}
        <Text fontWeight="bold" css={{ color: '$darkie', display: 'inline' }}>
          /{route}
        </Text>
      </Text>
    </>
  )
}
