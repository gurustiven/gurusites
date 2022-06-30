import type { NextPage } from 'next'
import Layout from 'components/builder/interface/layout/Layout'
import SettingsLayout from 'components/settings/SettingsLayout'
import SettingsTheme from 'components/settings/theme/SettingsTheme'

const SettingsThemePage: NextPage = () => {
  return (
    <Layout page="settings--home">
      <SettingsLayout
        title="Theme"
        description="Global settings for your website"
      >
        <SettingsTheme />
      </SettingsLayout>
    </Layout>
  )
}

export default SettingsThemePage
