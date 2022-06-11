import type { NextPage } from 'next'
import { Button, Center, HStack, Separator, Text } from '@guruhotel/aura-ui';
import Layout from 'components/builder/interface/layout/Layout'
import { ChevronRightRegular } from '@guruhotel/aura-icons';

const DashboardHomePage: NextPage = () => {
  return (
    <Layout page="settings--home">
      <Center css={{ flexDirection: 'column' }}>
        <HStack css={{ height: '60px', alignItems: "center" }}>
          <Button colorScheme="darkie" size="md" css={{ display: 'block' }} variant="link">Dashboard</Button>
        </HStack>
        <Separator />
        <p>This is a dashboard page</p>
      </Center>
    </Layout>
  )
}

export default DashboardHomePage
