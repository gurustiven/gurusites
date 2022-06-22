import { Container, HStack, Separator, Text, VStack } from '@guruhotel/aura-ui'
import ModulesConfigActionsNew from '../interface/config/actions/new/ModulesConfigActionsNew'

export default function BuilderEmpty() {
  return (
    <Container css={{ padding: '60px 0' }}>
      <VStack alignItems="center">
        <Text as="h2" css={{ color: '$darkie9' }}>
          Welcome to your new page 🎉
        </Text>
        <Text css={{ color: '$darkie8' }}>
          Here you can add modules and customize all the page content.
        </Text>
        <br />
        <VStack spacing="2">
          <ModulesConfigActionsNew /> <Text as="span">Add new</Text>
        </VStack>
      </VStack>
    </Container>
  )
}
