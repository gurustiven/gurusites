import type { NextPage } from 'next'
import { Box, Button, HStack, Input, Label, Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport, Separator, Text, VStack } from '@guruhotel/aura-ui';
import Layout from 'components/builder/interface/layout/Layout'
import SettingsLayout from 'components/settings/SettingsLayout';
import { CheckSolid, ChevronDownRegular, ChevronUpRegular } from '@guruhotel/aura-icons';

const SettingsThemePage: NextPage = () => {
  return (
    <Layout page="settings--home">
      <SettingsLayout>
        <Text as="h2" color="darkie">Theme</Text>
        <Text as="p" color="text">Global settings for your website</Text>
        <Box css={{ width: '100%' }}>
          <Text as="h4" css={{ margin: '24px 0 12px 0' }}>Fonts</Text>
          <HStack spacing="12">
            <Box css={{ width: '32%' }}>
              <VStack>
                <Label htmlFor="font" css={{ width: '100%' }}>Main</Label>
                <Select defaultValue="inter" css={{ width: '100%' }}>
                  <SelectTrigger id="font" aria-label="Font" css={{ justifyContent: 'space-between', marginTop: '4px', width: '100%' }}>
                    <SelectValue />
                    <SelectIcon>
                      <Box css={{ mb: '$1' }}>
                        <ChevronDownRegular label="" color="currentcolor" size="xs" />
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
                <Label htmlFor="font" css={{ width: '100%' }}>Secondary</Label>
                <Select defaultValue="inter" css={{ width: '100%' }}>
                  <SelectTrigger id="font" aria-label="Font" css={{ justifyContent: 'space-between', marginTop: '4px', width: '100%' }}>
                    <SelectValue />
                    <SelectIcon>
                      <Box css={{ mb: '$1' }}>
                        <ChevronDownRegular label="" color="currentcolor" size="xs" />
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
        <Box css={{ marginTop: '12px' }}>
          <Text as="h4" css={{ margin: '24px 0 12px 0' }}>Colors</Text>
          <HStack spacing="12">
            <VStack>
              <Label htmlFor="font" css={{ marginBottom: '4px', width: '100%' }}>Main</Label>
              <Input placeholder='FFFFFF' css={{ width: '100%' }} />
            </VStack>
            <VStack>
              <Label htmlFor="font" css={{ marginBottom: '4px', width: '100%' }}>Secondary</Label>
              <Input placeholder='FFFFFF' css={{ width: '100%' }} />
            </VStack>
            <VStack>
              <Label htmlFor="font" css={{ marginBottom: '4px', width: '100%' }}>Utilitary</Label>
              <Input placeholder='FFFFFF' css={{ width: '100%' }} />
            </VStack>
          </HStack>
        </Box>
        <Box css={{ marginTop: '24px' }}>
          <Button>Save and continue</Button>
        </Box>
      </SettingsLayout>
    </Layout>
  )
}

export default SettingsThemePage
