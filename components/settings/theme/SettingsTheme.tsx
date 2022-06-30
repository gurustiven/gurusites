import { Box, Button } from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'
import SettingsThemeColors from './SettingsThemeColors'
import SettingsThemeFonts from './SettingsThemeFonts'

export default function SettingsTheme() {
  const { theme, setTheme } = useApp()

  // Update settings
  const update = (collection: string, name: string, value: any) => {
    const values = { ...theme }
    values.general[collection][name] = value
    setTheme(values)
  }

  return (
    <>
      <SettingsThemeFonts
        defaultValues={theme?.general?.fonts}
        update={update}
      />
      <SettingsThemeColors
        defaultValues={theme?.general?.colors}
        update={update}
      />
    </>
  )
}
