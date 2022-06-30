import { Box, HStack, Input, Label, Text, VStack } from '@guruhotel/aura-ui'
import { useApp } from 'components/context/AppContext'

interface SettingsThemeColorsProps {
  defaultValues: {
    [key: string]: string
  }
  update: (collection: string, name: string, value: any) => void
}

export default function SettingsThemeColors({
  defaultValues,
  update,
}: SettingsThemeColorsProps) {
  const { theme, setTheme } = useApp()

  return (
    <Box css={{ marginTop: '12px' }}>
      <Text as="h4" css={{ margin: '24px 0 12px 0' }}>
        Colors
      </Text>
      <HStack spacing="12">
        <VStack>
          <Label
            htmlFor="mainColor"
            css={{ marginBottom: '4px', width: '100%' }}
          >
            Main
          </Label>
          <Input
            id="mainColor"
            defaultValue={defaultValues?.main}
            placeholder="FFFFFF"
            css={{ width: '100%' }}
            onChange={(e) => update('colors', 'main', e.target.value)}
          />
        </VStack>
        <VStack>
          <Label
            htmlFor="secondaryColor"
            css={{ marginBottom: '4px', width: '100%' }}
          >
            Secondary
          </Label>
          <Input
            id="secondaryColor"
            defaultValue={defaultValues?.secondary}
            placeholder="FFFFFF"
            css={{ width: '100%' }}
            onChange={(e) => update('colors', 'secondary', e.target.value)}
          />
        </VStack>
        <VStack>
          <Label
            htmlFor="utilitaryColor"
            css={{ marginBottom: '4px', width: '100%' }}
          >
            Utilitary
          </Label>
          <Input
            id="utilitaryColor"
            defaultValue={defaultValues?.utilitary}
            placeholder="FFFFFF"
            css={{ width: '100%' }}
            onChange={(e) => update('colors', 'utilitary', e.target.value)}
          />
        </VStack>
      </HStack>
    </Box>
  )
}
