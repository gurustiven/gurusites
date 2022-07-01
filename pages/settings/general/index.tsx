import type { NextPage } from 'next'
import { Separator, Text } from '@guruhotel/aura-ui'
import Layout from 'components/builder/interface/layout/Layout'
import SettingsLayout from 'components/settings/SettingsLayout'

const SettingsGeneralPage: NextPage = () => {
  return (
    <Layout page="settings--home">
      <SettingsLayout
        title="general"
        description="Global settings for your website"
      >
        <Separator css={{ margin: '16px 0' }} />
      </SettingsLayout>
    </Layout>
  )
}

export default SettingsGeneralPage
