import { Button, Text } from '@guruhotel/aura-ui'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'

export default function LayoutPagesItem({ data }: any) {
  const router = useRouter()

  // Get current element
  const { name, route } = data?.config

  return (
    <>
      <Button
        colorScheme="darkie"
        variant="outline"
        onClick={() => router.push(`/builder/?p=${data?.id}`)}
        css={{
          height: '40px',
          marginTop: '-24px',
          position: 'absolute',
          right: '0',
          top: '50%',
        }}
      >
        Edit <ChevronRightIcon />
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
