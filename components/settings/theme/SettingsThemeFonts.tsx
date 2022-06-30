import { ChevronDownRegular } from '@guruhotel/aura-icons'
import {
  Box,
  HStack,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  Text,
  VStack,
} from '@guruhotel/aura-ui'

interface SettingsThemeFontsProps {
  defaultValues: {
    [key: string]: string
  }
  update: (collection: string, name: string, value: any) => void
}

export default function SettingsThemeFonts({
  defaultValues,
  update,
}: SettingsThemeFontsProps) {
  return (
    <Box css={{ width: '100%' }}>
      <Text as="h4" css={{ margin: '24px 0 12px 0' }}>
        Fonts
      </Text>
      <HStack spacing="12">
        <Box css={{ width: '32%' }}>
          <VStack>
            <Label htmlFor="mainFont" css={{ width: '100%' }}>
              Main
            </Label>
            <Select
              defaultValue={defaultValues?.main}
              css={{ width: '100%' }}
              onValueChange={(e) => update('fonts', 'main', e)}
            >
              <SelectTrigger
                id="mainFont"
                aria-label="Font"
                css={{
                  justifyContent: 'space-between',
                  marginTop: '4px',
                  width: '100%',
                }}
              >
                <SelectValue />
                <SelectIcon>
                  <Box css={{ mb: '$1' }}>
                    <ChevronDownRegular
                      label=""
                      color="currentcolor"
                      size="xs"
                    />
                  </Box>
                </SelectIcon>
              </SelectTrigger>
              <SelectContent>
                <SelectViewport>
                  <SelectGroup>
                    <SelectItem value="inter">
                      <SelectItemText>Inter</SelectItemText>
                    </SelectItem>
                    <SelectItem value="poppins">
                      <SelectItemText>Poppins</SelectItemText>
                    </SelectItem>
                  </SelectGroup>
                </SelectViewport>
              </SelectContent>
            </Select>
          </VStack>
        </Box>
        <Box css={{ width: '32%' }}>
          <VStack>
            <Label htmlFor="secondaryFont" css={{ width: '100%' }}>
              Secondary
            </Label>
            <Select
              defaultValue={defaultValues?.secondary}
              css={{ width: '100%' }}
              onValueChange={(e) => update('fonts', 'secondary', e)}
            >
              <SelectTrigger
                id="secondaryFont"
                aria-label="Font"
                css={{
                  justifyContent: 'space-between',
                  marginTop: '4px',
                  width: '100%',
                }}
              >
                <SelectValue />
                <SelectIcon>
                  <Box css={{ mb: '$1' }}>
                    <ChevronDownRegular
                      label=""
                      color="currentcolor"
                      size="xs"
                    />
                  </Box>
                </SelectIcon>
              </SelectTrigger>
              <SelectContent>
                <SelectViewport>
                  <SelectGroup>
                    <SelectItem value="inter">
                      <SelectItemText>Inter</SelectItemText>
                    </SelectItem>
                    <SelectItem value="poppins">
                      <SelectItemText>Poppins</SelectItemText>
                    </SelectItem>
                  </SelectGroup>
                </SelectViewport>
              </SelectContent>
            </Select>
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}
