import { VStack, InputGroup, Text } from '@guruhotel/aura-ui'
import { ValueIcon } from '@radix-ui/react-icons'

export default function ModulesStyleBackground({ update, defaultValue }: any) {
  return (
    <VStack justifyContent="space-between" spacing="1">
      <Text as="h5">Background</Text>
      <InputGroup size="sm" css={{ width: '100%' }}>
        <InputGroup.LeftIcon icon={<ValueIcon />} />
        <InputGroup.Input
          id="background"
          type="text"
          defaultValue={defaultValue}
          onChange={(e: any) =>
            update('background', 'desktop', e.target.value)
          }
        />
      </InputGroup>
    </VStack>
  )
}
