import styles from './Empty.module.scss'
import {
  Box,
  Button,
  Container,
  Separator,
  Text,
  VStack,
} from '@guruhotel/aura-ui'
import ModulesConfigActionsNew from '../interface/config/actions/new/ModulesConfigActionsNew'
import { PlusIcon } from '@radix-ui/react-icons'

export default function BuilderEmpty() {
  return (
    <Box className={styles.empty}>
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
            <ModulesConfigActionsNew>
              <Button colorScheme="darkie" type="button">
                <span style={{ marginRight: '4px' }}>Add Module</span>
                <PlusIcon />
              </Button>
            </ModulesConfigActionsNew>
          </VStack>
          <br />
          <Separator
            css={{ background: '$darkie2', margin: '16px 0 12px 0' }}
          />
          <Text css={{ color: '$darkie11' }}>Or start with a template:</Text>
        </VStack>
      </Container>
    </Box>
  )
}
