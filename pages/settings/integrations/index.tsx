import type { NextPage } from 'next'
import { Separator, Text } from '@guruhotel/aura-ui';
import Layout from 'components/builder/interface/layout/Layout'
import SettingsLayout from 'components/settings/SettingsLayout';

const SettingsIntegrationsPage: NextPage = () => {
  return (
    <Layout page="settings--home">
      <SettingsLayout>
        <Text as="h2" color="darkie">Integrations</Text>
        <Text as="p" color="text">Global settings for your website</Text>
        <Separator css={{ margin: '16px 0' }} />
      </SettingsLayout>
    </Layout>
  )
}

export default SettingsIntegrationsPage
