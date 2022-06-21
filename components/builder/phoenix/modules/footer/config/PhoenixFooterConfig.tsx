/* eslint-disable @next/next/no-img-element */
import ModulesConfigTabs from 'components/builder/interface/config/actions/ModulesConfigTabs'
import { useApp } from 'components/context/AppContext'
import { v4 as uuid_v4 } from 'uuid'

export default function PhoenixFooterConfig() {
  // Get theme
  const { theme, setTheme } = useApp()

  // Get footer config
  const getFooter = theme?.footer

  // Update parent module
  const update = (name: any, value: any) => {
    const values = { ...theme }
    values.footer[name] = value
    setTheme(values)
  }

  // Add new element
  function newMenuItem() {
    const values = { ...theme }
    values?.footer?.menu?.push({ id: uuid_v4(), label: '', link: '' })
    setTheme(values)
  }

  return <ModulesConfigTabs module="footer">Footer config</ModulesConfigTabs>
}
